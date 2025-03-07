const { Client, CommandInteraction } = require("discord.js");
const {
  ApplicationCommandType,
  EmbedBuilder,
  ApplicationCommandOptionType,
  PermissionFlagsBits,
  PermissionsBitField,
  Colors,
} = require("discord.js");
const moment = require("moment");
const { DB } = require("pro.db-mega");
const { developers } = require("../../configuration/index");
const subscriptions = new DB({ fileName: `subscriptions.json` });

module.exports = {
  name: "subscription",
  description: "تجديد او انشاء اشتراك جديد",
  options: [
    {
      name: "user",
      type: ApplicationCommandOptionType.User,
      description: "العضو الذي تود اعطائه اشتراك",
      required: true,
    },
    {
      name: "tier",
      description: "نوع الأشتراك",
      type: 3,
      required: true,
      choices: [
        {
          name: "Tier 1 - 🧧",
          value: "1",
        },
        {
          name: "Tier 2 - 🔥",
          value: "2",
        },
      ],
    },
    {
      name: "time",
      type: ApplicationCommandOptionType.String,
      description: "مده اشتراك العضو مثال : (1d - 1w - 28d)",
      required: true,
    },
    {
      name: "paymentmethod",
      description: "طريقه الدفع",
      type: 3,
      required: false,
      choices: [
        {
          name: "Instapay",
          value: "Instapay",
        },
        {
          name: "Vodafone Cash",
          value: "Vodafone Cash",
        },
        {
          name: "Orange Cash",
          value: "Orange Cash",
        },
        {
          name: "We Pay",
          value: "We Pay",
        },
        {
          name: "E& Wallet",
          value: "E& Wallet",
        },
        {
          name: "Paypal",
          value: "Paypal",
        },
        {
          name: "Visa",
          value: "Visa",
        },
        {
          name: "Other",
          value: "Other",
        },
      ],
    },
  ],
  run: async (client, interaction) => {
    if (!developers.includes(interaction.member.id))
      return interaction.reply({
        content: `**انت غير مسموح لك بالقيام بهذا الامر**`,
        ephemeral: true,
      });
    const Time = interaction.options.getString("time");
    const User = interaction.options.getUser("user");
    const Tier = interaction.options.getString("tier");
    const PaymentMethod = interaction.options.getString("paymentmethod");

    console.log(Time, User, Tier, PaymentMethod);
    const { number, string } = getMultiplicationByType(Time);

    const { Date, IsNew } = CreateSupDate(User.id, number, string);
    console.log(Date, IsNew);
    await subscriptions.set(User.id, {
      ExpireDate: Date,
      Tier: Tier,
      PaymentMethod: PaymentMethod || "Not specified",
    });

    const exampleEmbed = new EmbedBuilder()
      .setColor(Colors.Green)
      .setTitle("تم الأشتراك بنجاح")
      .addFields(
        { name: "العضو", value: `<@${User.id}>` },
        { name: "ينتهي الأشتراك في", value: `<t:${moment(Date).unix()}:R>` },
        { name: "نوع الأشتراك", value: " Tier " + Tier },
        { name: "حاله الأشتراك", value: IsNew ? "**اشتراك**" : "**تجديد**" },
        {
          name: "وسيله الدفع",
          value: `- **${PaymentMethod || "Not specified"}**`,
        }
      )
      .setTimestamp()
      .setFooter({ text: "StudyGpt" });

    interaction.reply({ embeds: [exampleEmbed], ephemeral: true });

    const UserDm = new EmbedBuilder()
      .setColor(Colors.DarkGold)
      .setTitle("تم الأشتراك بنجاح")
      .addFields(
        { name: "ينتهي الأشتراك في", value: `<t:${moment(Date).unix()}:R>` },
        { name: "نوع الأشتراك", value: " Tier " + Tier },
        { name: "حاله الأشتراك", value: IsNew ? "اشتراك" : "تجديد" },
        {
          name: "وسيله الدفع",
          value: `- **${PaymentMethod || "Not specified"}**`,
        }
      )
      .setTimestamp()
      .setFooter({ text: "شكرا لأشتراكك في StudyGpt" });

    try {
      User.send({ embeds: [UserDm] });
    } catch (error) {}
    try {
      const channel = interaction.guild.channels.cache.get('1343453651116752906');

      if (channel)
        channel.send({ embeds: [exampleEmbed]})
    } catch (error) {}
  },
};

const CreateSupDate = (UserId, Time, Type) => {
  const Data = subscriptions.get(UserId);

  if (!Data) {
    return { Date: moment().add(Time, Type).toISOString(), IsNew: true };
  }

  const ExpiryDate = moment(Data.ExpireDate);
  return ExpiryDate.isBefore(moment())
    ? { Date: moment().add(Time, Type).toISOString(), IsNew: false }
    : { Date: ExpiryDate.add(Time, Type).toISOString(), IsNew: false };
};

const isNumeric = (str) => /^[0-9]+$/.test(str);

const getMultiplicationByType = (str) => {
  const lastChar = str.charAt(str.length - 1);

  if (isNumeric(lastChar)) {
    return { str };
  } else {
    const match = str.match(/^(\d+)([a-zA-Z]+)$/);
    if (match) {
      const number = match[1];
      const string = match[2];
      return { number, string };
    } else {
      throw new Error("Input does not match the pattern!");
    }
  }
};
