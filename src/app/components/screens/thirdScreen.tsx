import { motion } from "framer-motion";
import { useState } from "react";

export default function ThirdScreen() {
  const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN!;
  const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID!;

  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) {
      alert("Введите сообщение");
      return;
    }

    const now = new Date();
    const timeString = now.toLocaleString();

    const fullMessage = `Сообщение из формы: ${message}\n\nОтправлено: ${timeString}`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: fullMessage,
          }),
        }
      );

      const data = await res.json();

      if (data.ok) {
        alert("Сообщение отправлено!");
        setMessage("");
      } else {
        alert("Ошибка Telegram: " + data.description);
      }
    } catch (error) {
      alert("Ошибка сети при отправке сообщения");
    }
  };

  return (
    <section
      id="section3"
      className="w-full min-h-screen bg-[#1A1A29] px-4 relative overflow-visible"
    >
      <div className="absolute left-[250px] top-[157px] w-[1420px] h-[733px] flex">
        <motion.div className="w-[600px] h-[712px] mt-[21px] flex flex-col">
          <span className="text-white text-[60px] font-normal leading-none text-center block">
            Не тупи, закажи сайт
          </span>

          <textarea
            className="mt-[25px] w-[600px] h-[470px] bg-transparent text-white resize-none p-4 text-base leading-normal outline-none"
            placeholder="Введите сообщение..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <img
            src="./lookatus.svg"
            alt="Send message"
            className="mt-[20px] cursor-pointer transition duration-200 hover:scale-105 self-start"
            onClick={sendMessage}
          />
        </motion.div>

        <motion.div className="w-[720px] h-[733px] ml-[100px] mt-[13px]">
          <img src="./bigform.svg" />
        </motion.div>
      </div>
    </section>
  );
}
