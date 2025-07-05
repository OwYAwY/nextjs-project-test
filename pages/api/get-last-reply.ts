// pages/api/get-last-reply.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { getLastReplyText, clearLastReply } from "../../telegramBot/replyStore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const reply = getLastReplyText();

  if (!reply) {
    return res.status(200).json(null); // ничего нет — ок
  }

  clearLastReply(); // очищаем, чтобы не дублировалось

  return res.status(200).json(reply);
}
