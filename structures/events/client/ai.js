const client = require("../../client");
const fetchData = require("../../functions/ai");

client.on("messageCreate", async (message) => {
  if (message.author.bot) {
    return;
  }
  if(message.mentions.users.has(message.client.user.id)){
    fetchData(message);
  }
});
