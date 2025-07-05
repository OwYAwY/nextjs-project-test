import { tg } from "./bot.js";
import { print } from "../helpers/print.js";
import { setLastReplyText } from "./replyStore.js";

export const listener = () => {
  tg.updates.on("message", async (ctx) => {
    const isReply = !!ctx.update?.message?.reply_to_message;
    const userReplyText = ctx.text;
    if (isReply && userReplyText) {
      try {
        setLastReplyText(userReplyText, true);
      } catch (e) {
        print("Telegram", `Ошибка ответа: ${e}`);
      }
    }
  });
};
