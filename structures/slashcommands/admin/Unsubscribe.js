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
  name: "unsubscribe",
  description: "ألغاء اشتراك عضو",
  options: [
    {
      name: "user",
      type: ApplicationCommandOptionType.User,
      description: "المستخدم الذي تود انهاء اشتراكه",
      required: true,
    },
    {
      name: "reason",
      description: "السبب",
      type: 3,
      required: false,
      choices: [
        {
          name: "عدم احترام قوانين البوت",
          value: "عدم احترام قوانين البوت",
        },
        {
          name: "مشاركة محتوى غير لائق",
          value: "مشاركة محتوى غير لائق",
        },
        {
          name: "أستخدام اكثر من شخص حساب واحد",
          value: "أستخدام اكثر من شخص حساب واحد",
        },
        {
          name: "اخري",
          value: "اخري",
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

    const User = interaction.options.getUser("user");
    const Reason = interaction.options.getString("reason") || "أخري";

    const Data = subscriptions.get(User.id);

    if (!Data) {
      return interaction.reply("هذا المستخدم غير مشترك");
    } else {
      subscriptions.delete(User.id);

      const UserDm = new EmbedBuilder()
        .setColor(Colors.DarkRed)
        .setTitle("تم الغاء الأشتراك")
        .addFields({
          name: "السبب",
          value: `- **${Reason || "Not specified"}**`,
        })
        .setTimestamp();
      interaction.reply({ embeds: [UserDm] });

      const UserDm2 = new EmbedBuilder()
        .setColor(Colors.DarkRed)
        .setTitle("لقد تم الغاء اشتراكك")
        .addFields(
          {
            name: "السبب",
            value: `- **${Reason || "Not specified"}**`,
          },
          {
            name: "الأدمن المسؤول",
            value: `- **${interaction.member}**`,
          }
        )
        .setTimestamp();
      User.send({ embeds: [UserDm2] });
      try {
        const channel = interaction.guild.channels.cache.some(channel => channel.id === '1343453651116752906');
        if (channel)
          channel.send({ embeds: [exampleEmbed]})
      } catch (error) {}
    }
  },
};
