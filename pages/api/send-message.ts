import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Метод не поддерживается" });
  }

  const { name, message } = req.body;

  if (!name || !message || !name.trim() || !message.trim()) {
    return res.status(400).json({ error: "Имя и сообщение обязательны" });
  }

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    return res
      .status(500)
      .json({ error: "BOT_TOKEN или CHAT_ID не установлены в .env.local" });
  }

  const now = new Date().toLocaleString();
  const text = `💬 Новое сообщение из формы:\n\n👤 Имя: ${name}\n📝 Сообщение: ${message}\n🕒 Отправлено: ${now}`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      }
    );

    const data = await response.json();

    if (!data.ok) {
      return res.status(500).json({
        error: "Ошибка от Telegram API",
        details: data,
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Ошибка отправки в Telegram:", error);
    return res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
}
