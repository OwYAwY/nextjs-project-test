import { tg } from "./bot.js";

export const listener = () => {
  tg.updates.on("message", async (ctx) => {
    const message = ctx.update?.message;
    const isReply = !!message?.reply_to_message;
    const userReplyText = ctx.text;

    console.log("📩 Новое сообщение от Telegram:");
    console.dir(message);

    if (isReply && userReplyText) {
      try {
        await fetch("http://localhost:3000/api/last-reply", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: userReplyText, isReply: true }),
        });

        console.log("✅ reply сохранён в /api/last-reply");
      } catch (err) {
        console.error("❌ Ошибка сохранения в /api/last-reply:", err);
      }
    }
  });
};
