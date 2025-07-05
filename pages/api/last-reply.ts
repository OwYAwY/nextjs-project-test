// pages/api/last-reply.ts

let lastReply = {
  text: "",
  isReply: false,
  timestamp: 0,
};

export default function handler(req: any, res: any) {
  if (req.method === "GET") {
    if (!lastReply.text) {
      // Нет нового ответа — возвращаем 204 No Content
      return res.status(204).end();
    }

    // Отдаём последний reply
    const replyToSend = { ...lastReply };

    // Сбрасываем lastReply после отдачи
    lastReply = {
      text: "",
      isReply: false,
      timestamp: 0,
    };

    return res.status(200).json(replyToSend);
  }

  if (req.method === "POST") {
    const { text, isReply } = req.body;

    if (!text) return res.status(400).json({ error: "Текст обязателен" });

    lastReply = {
      text,
      isReply: !!isReply,
      timestamp: Date.now(),
    };

    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: "Метод не поддерживается" });
}
