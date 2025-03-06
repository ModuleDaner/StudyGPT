const { ActivityType } = require("discord.js");
const client = require("../../client");
const { logger } = require("../../functions/logger");
const { DB } = require("pro.db-mega");
const subscriptions = new DB({ fileName: `subscriptions.json` });
const moment = require("moment");
const cron = require("node-cron");

client.on("ready", async () => {
  console.log("\n---------------------");
  logger(`${client.user.tag} is ready`, "success");
  console.log("---------------------");

  client.user.setPresence({
    activities: [
      {
        name: "خالد صقر",
        type: ActivityType.Listening,
      },
    ],
    status: "dnd",
  });

  cron.schedule("*/30 * * * * *", () => {
    Update();
  });

  function Update() {
    delete require.cache[require.resolve("../../../subscriptions.json")];

    let subs = require("../../../subscriptions.json");
    for (let [UserId] of Object.entries(subs)) {
      let value = subscriptions.get(UserId);
      if (!value) return;
      if (value) {
        const IsVaild = moment(value.ExpireDate).isBefore(moment());
        if (IsVaild) {
          subscriptions.delete(UserId);
        }
      }
    }
  }
  Update();
});
