import type { NextApiRequest, NextApiResponse } from "next";
import {
  getLastReplyText,
  clearLastReplyText,
} from "../../telegramBot/replyStore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Метод не поддерживается" });
  }

  try {
    const lastReply = getLastReplyText();

    if (!lastReply) {
      return res.status(200).json({ text: null, isReply: false });
    }

    // Сразу очищаем после запроса, чтобы не повторялся
    clearLastReplyText();

    return res.status(200).json({
      text: lastReply.text,
      isReply: lastReply.isReply,
    });
  } catch (error) {
    console.error("Ошибка при получении последнего ответа:", error);
    return res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
}
