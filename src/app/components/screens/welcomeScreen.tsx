"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import AboutSection from "../animationbutton";

export default function WelcomeScreen() {
  const [isOn, setIsOn] = useState(false);

  return (
    <section className="w-full min-h-screen bg-[#1A1A29] flex flex-col justify-center items-center text-center px-4 relative overflow-visible">
      {/* Текст по центру */}
      <div className="z-10">
        <h1 className="text-white text-2xl md:text-3xl font-semibold mb-2">
          Этот сайт сделан вручную
        </h1>
        <p className="text-base md:text-lg text-[#FFF] font-light">
          Каждая буква, каждый пиксель, каждая строчка кода — наши
        </p>
        <p className="text-sm text-[#FFF] mt-2 mb-8">
          Пролистайте, чтобы увидеть, на что мы способны
        </p>
      </div>

      {/* AboutSection справа, абсолютно позиционирован */}
      <div className="absolute top-1/2 right-30 -translate-y-1/2 pointer-events-auto">
        <AboutSection />
      </div>

      {/* Переключатель */}
    </section>
  );
}
