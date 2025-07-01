"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutSection() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="relative p-10">
      <motion.div
        animate={{
          backgroundColor: isOn ? "#1a1a29" : "#5d5b74", // меняем фон при переключении
          borderColor: isOn ? "#5d5b74" : "#1a1a29", // для контраста меняем цвет бордера
        }}
        transition={{ duration: 0.5 }}
        className="
          border-4 rounded-[100px] w-[201px] h-[454px]
          -rotate-[-75deg]
          "
        style={{
          borderStyle: "solid",
        }}
      />

      <motion.div
        onClick={() => setIsOn(!isOn)}
        animate={{ x: isOn ? -25 : 210, y: isOn ? -1 : -63 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full flex items-center justify-center cursor-pointer"
      >
        <img
          src="/buttonsun.svg"
          className="min-w-[191px] min-h-[191px] opacity-80 translate-y-[16%] translate-x-[6%]"
          alt="button icon"
        />
      </motion.div>
    </div>
  );
}
