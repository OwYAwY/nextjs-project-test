import { print } from "../helpers/print";
import { tg } from "./bot.js";
import { listener } from "./listener";

listener();
const start = async () => {
  await tg.updates
    .startPolling({
      dropPendingUpdates: true,
    })
    .then(() => print("Telegram", "The bot has been successfully launched"))
    .catch((e) => print("Telegram", e));
};

start()
  .then(() => print("All Systems", "Everything has been successfully launched"))
  .catch(async (e) => {
    print("All Systems", e);
  });
