import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

type ChatMessage = {
  id: number;
  text: string;
  fromUser: boolean;
  isReply?: boolean;
  timestamp: number;
};

export default function ThirdScreen() {
  const [name, setName] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  const lastReplyRef = useRef<string | null>(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch("/api/last-reply");
        if (res.status === 200) {
          const data = await res.json();
          if (data.isReply && data.text && data.text !== lastReplyRef.current) {
            lastReplyRef.current = data.text;
            setMessages((prev) => [
              ...prev,
              {
                id: Date.now(),
                text: data.text,
                fromUser: false,
                isReply: true,
                timestamp: Date.now(),
              },
            ]);
          }
        }
      } catch (err) {
        console.error("Ошибка получения ответа от бота:", err);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const sendMessage = async () => {
    if (!name.trim() || !input.trim()) {
      alert("Пожалуйста, заполните имя и сообщение");
      return;
    }

    const newMessage: ChatMessage = {
      id: Date.now(),
      text: input.trim(),
      fromUser: true,
      timestamp: Date.now(),
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
        return;
      }

      // Ждем и получаем ответ бота
      setTimeout(async () => {
        try {
          const replyRes = await fetch("/api/last-reply");
          if (replyRes.status === 204) return;

          const replyData = await replyRes.json();

          if (replyData?.text && replyData.text !== lastReplyRef.current) {
            lastReplyRef.current = replyData.text;
            setMessages((prev) => [
              ...prev,
              {
                id: Date.now() + 1,
                text: replyData.text,
                fromUser: false,
                isReply: replyData.isReply,
                timestamp: Date.now(),
              },
            ]);
          }
        } catch (e) {
          console.error("Ошибка получения ответа:", e);
        }
      }, 2000);
    } catch (error) {
      alert("Ошибка сети при отправке");
    }
  };

  async function addUser() {
    if (!name.trim()) {
      alert("Введите имя перед добавлением пользователя");
      return;
    }

    try {
      const res = await fetch("/api/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tgId: Date.now().toString(), // генерация уникального tgId на клиенте (для теста)
          tgNick: "",
          name,
          isAdmin: false,
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        alert("Ошибка: " + errData.error);
        return;
      }

      const data = await res.json();
      console.log("Пользователь добавлен:", data);
      alert("Пользователь добавлен: " + data.name);
    } catch (error) {
      alert("Ошибка сети при добавлении пользователя");
      console.error(error);
    }
  }

  const formatTime = (ms: number) => {
    const date = new Date(ms);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
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
            {messages.map(({ id, text, fromUser, isReply, timestamp }) => (
              <div
                key={id}
                className={`px-4 py-3 rounded-lg max-w-[80%] break-words
                  ${fromUser ? "self-end text-black bg-blue-500" : ""}
                  ${!fromUser && isReply ? "self-start bg-green-500" : ""}
                  ${!fromUser && !isReply ? "self-start bg-gray-500" : ""}
                `}
              >
                {!fromUser && (
                  <p className="text-white font-semibold mb-1">Бот</p>
                )}
                {fromUser && (
                  <p className="text-black font-semibold mb-1">{name}</p>
                )}
                <p>{text}</p>
                <p className="text-xs text-gray-300 mt-1 select-none">
                  {formatTime(timestamp)}
                </p>
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
              className="flex-1 rounded-lg px-4 py-2 text-white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700 transition"
            >
              Отправить
            </button>
            <button
              type="button"
              onClick={addUser}
              className="bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700 transition"
            >
              Добавить пользователя
            </button>
          </form>
        </motion.div>

        <motion.div className="w-[720px] h-[733px] ml-[100px] mt-[13px]">
          <img src="./bigform.svg" alt="Decorative" />
        </motion.div>
      </div>
    </section>
  );
}
