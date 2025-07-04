"use client";
import { useEffect } from "react";

export default function LeadForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute("data-telegram-login", "leadform2202_bot"); // без @
    script.setAttribute("data-size", "large");
    script.setAttribute("data-userpic", "false");
    script.setAttribute("data-request-access", "write");
    script.setAttribute("data-onauth", "onTelegramAuth(user)");
    script.async = true;

    const container = document.getElementById("telegram-login-container");
    if (container) {
      container.innerHTML = ""; // Очистить перед вставкой
      container.appendChild(script);
    }

    // Очистка
    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  // Глобальная функция — обязательно через window
  useEffect(() => {
    (window as any).onTelegramAuth = function (user: any) {
      console.log("Данные от Telegram:", user);
      // Здесь ты можешь отправить user на backend или сохранить в state
      alert(`Привет, ${user.first_name}!`);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Войти через Telegram</h2>
      <div id="telegram-login-container" />
    </div>
  );
}
