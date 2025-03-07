require("dotenv/config");
const latexToPlainText = require("./latexToPlainText.js");
const { DB } = require("pro.db-mega");
const axios = require("axios");
const apiHistoryData = new DB({ fileName: `apiHistoryData.json` });
const subscriptions = new DB({ fileName: `subscriptions.json` });
function cleanText(text) {
  return text.replace(/\s+/g, " ").trim();
}
async function Ai(Message) {
  try {
    const UserSubData = subscriptions.get(Message.author.id) || {
      Tier: "Free",
    };
    const OldData = apiHistoryData.get(Message.author.id) || [];
    let OldDataArray = [];
    
    try {
      if (UserSubData.Tier == "1" || UserSubData.Tier == "2") {
        const itemsToKeep = UserSubData.Tier == "1" ? 1 : 2;

        while (OldData.length > itemsToKeep) {
          OldData.shift();
        }
    
        OldData.forEach((Item) => {
          OldDataArray.push({
            role: "assistant",
            content: `I have been asked you: ${Item.MyMessage}. And you are give me this response: ${Item.AiMessage}`,
          });
        });
      }
    } catch (error) {
      console.error("Error processing old data:", error);
    }
    
    let Model = "qwen/qwen2.5-vl-72b-instruct:free";
    if (UserSubData.Tier === "1") {
      Model = "google/gemini-flash-1.5";
    } else if (UserSubData.Tier === "2") {
      Model = "openai/gpt-4o-mini";
    }
    const userMessage = cleanText(
      Message.content.replace(`<@${Message.client.user.id}>`, "")
    );
    if (userMessage.length < 2) {
      return Message.reply(
        "يبدو أنك أرسلت رسالة فارغة، هل يمكنك إعادة المحاولة؟"
      );
    }
    Message.channel.sendTyping();
    
    // Create message content array starting with text
    const messageContent = [
      { type: 'text', text: userMessage }
    ];
    
    // Only add image if it exists
    if (Message.attachments.first()) {
      messageContent.push({
        type: "image_url",
        image_url: { url: Message.attachments.first().url }
      });
    }
    
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: Model,
        messages: [
          {
            role: "system",
            content: `Respond in the language the user uses. Always follow these rules. Make your response efficient, summarized, and clear. Never answer political questions. Do not answer religious questions unless referring to the Quran. Use Discord design script to make your response fancy. Your name is StudyGPT. Do not answer non-educational questions. Do not answer inappropriate questions unless related to biology. Do not respond to unnecessary requests. Use emojis and special symbols to enhance the experience. User name is ${Message.author.globalName}`,
          },
          {
            role: "user",
            content: messageContent
          },
          //...OldDataArray,
        ],
      },
      {
        headers: {
          Authorization:
            "Bearer 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",
          "HTTP-Referer": "https://discord.gg/2qfDwws5k2",
          "X-Title": "StudyGpt",
          "Content-Type": "application/json",
        },
        timeout: 180000,
      }
    );
    console.log(response.data);
    let aiResponse = response.data.choices[0].message.content.trim();
    if (!aiResponse) {
      aiResponse = "عذرًا، لم أتمكن من فهم استفسارك. هل يمكنك إعادة صياغته؟";
    }
    aiResponse = latexToPlainText(aiResponse);
    Message.reply(aiResponse + `\n\n ||**⛔ Tier ${UserSubData.Tier}**||`);
    apiHistoryData.set(
      Message.author.id,
      OldData.concat([
        {
          MyMessage: userMessage.replace(`<@${Message.client.user.id}>`, ""),
          AiMessage: aiResponse,
        },
      ]),
    );
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response?.data || error.message
    );
    Message.reply("حدث خطأ أثناء معالجة طلبك. حاول مرة أخرى لاحقًا.");
  }
}
module.exports = Ai;