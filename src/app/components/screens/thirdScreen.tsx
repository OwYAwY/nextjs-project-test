import { motion } from "framer-motion";
import { useState } from "react";

export default function ThirdScreen() {
  const [name, setName] = useState("");
  const [messages, setMessages] = useState<{ id: number; text: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!name.trim() || !input.trim()) {
      alert("Пожалуйста, заполните имя и сообщение");
      return;
    }

    const newMessage = {
      id: Date.now(),
      text: input.trim(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message: newMessage.text }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert("Ошибка: " + (data.error || "Неизвестная"));
      }
    } catch (error) {
      alert("Ошибка сети при отправке");
    }
  };

  return (
    <section
      id="section3"
      className="w-full min-h-screen bg-[#1A1A29] px-4 relative overflow-visible"
    >
      <div className="absolute left-[250px] top-[157px] w-[1420px] h-[733px] flex">
        <motion.div className="w-[600px] h-[712px] mt-[21px] bg-[#232336] rounded-2xl p-6 shadow-lg flex flex-col">
          <span className="text-white text-[48px] font-semibold leading-tight text-left mb-6">
            Не тупи, закажи сайт
          </span>

          <input
            type="text"
            placeholder="Как к вам обращаться?"
            className="w-full h-[50px] bg-[#2a2a40] text-white placeholder-gray-400 rounded-lg px-4 mb-4 outline-none focus:ring-2 focus:ring-[#5c5cff] transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <div className="flex-1 mb-4 overflow-y-auto bg-[#2a2a40] rounded-lg p-4 text-white space-y-4 flex flex-col">
            {messages.map(({ id, text }) => (
              <div
                key={id}
                className="bg-blue-500 px-4 py-3 rounded-lg max-w-[80%] break-words self-end"
              >
                <p className="text-black font-semibold mb-1">{name}</p>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <form
            className="flex space-x-2"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <input
              type="text"
              placeholder="Введите сообщение..."
              className="flex-1 rounded-lg px-4 py-2 text-black"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700 transition"
            >
              Отправить
            </button>
          </form>
        </motion.div>

        <motion.div className="w-[720px] h-[733px] ml-[100px] mt-[13px]">
          <img src="./bigform.svg" />
        </motion.div>
      </div>
    </section>
  );
}
