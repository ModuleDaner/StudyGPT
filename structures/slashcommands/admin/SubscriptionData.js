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

const subscriptions = new DB({ fileName: `subscriptions.json` });
const { developers } = require("../../configuration/index");

module.exports = {
  name: "subscriptiondata",
  description: "عرض بيانات الأشتراك",
  options: [
    {
      name: "user",
      type: ApplicationCommandOptionType.User,
      description: "المستخدم الذي تود معرفه معلومات حول اشتراكه",
      required: true,
    },
  ],
  run: async (client, interaction) => {
    if (!developers.includes(interaction.member.id))
      return interaction.reply({
        content: `**انت غير مسموح لك بالقيام بهذا الامر**`,
        ephemeral: true,
      });

    const User = interaction.options.getUser("user");

    const Data = subscriptions.get(User.id);

    if (!Data) {
      return interaction.reply({content: "هذا المستخدم غير مشترك", ephemeral: true});
    } else {
      const UserDm = new EmbedBuilder()
        .setColor(Colors.Aqua)
        .setTitle("بيانات الأشتراك")
        .addFields(
          {
            name: "ينتهي الأشتراك في",
            value: `<t:${moment(Data.ExpireDate).unix()}:R>`,
          },
          { name: "نوع الأشتراك", value: " Tier " + Data.Tier },
          {
            name: "وسيله الدفع",
            value: `- **${Data.PaymentMethod || "Not specified"}**`,
          }
        )
        .setTimestamp();
      return interaction.reply({ embeds: [UserDm], ephemeral: true });
    }
  },
};
