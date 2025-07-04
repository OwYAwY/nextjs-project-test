import { motion } from "framer-motion";

export default function SecondScreen() {
  return (
    <section className="w-full min-h-screen bg-[#1A1A29] px-4 relative overflow-visible">
      <motion.div className="absolute left-[250px] top-[110px] bottom-[115px]">
        <div className="flex flex-col items-center gap-5">
          <span className="text-white text-[83px] font-normal leading-none text-center mb-[20px]">
            МЫ НЕ
          </span>

          <div className="relative w-[603px] flex flex-col gap-5">
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center z-0 gap-5">
              <img
                src="./mineBACK.svg"
                alt="mine1"
                className="w-full h-[70px]"
              />
              <img
                src="./mineBACK.svg"
                alt="mine2"
                className="w-full h-[70px]"
              />
              <img
                src="./mineBACK.svg"
                alt="mine3"
                className="w-full h-[70px]"
              />
            </div>

            <div className="relative z-10 flex flex-col gap-5 items-center">
              <img
                src="./x.svg"
                alt="x icon"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              />
              <img
                src="./mine11.svg"
                alt="mine1"
                className="w-full h-[70px] opacity-95 transition duration-200 cursor-pointer hover:scale-105"
              />
              <img
                src="./mine12.svg"
                alt="mine2"
                className="w-full h-[70px] opacity-95 transition duration-200 cursor-pointer hover:scale-105"
              />
              <img
                src="./mine13.svg"
                alt="mine3"
                className="w-full h-[70px] opacity-95 transition duration-200 cursor-pointer hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 mt-[60px]">
          <span className="text-white text-[70px] font-normal leading-none text-center mb-[20px]">
            ЗАТО МЫ
          </span>

          <div className="relative w-[603px] flex flex-col gap-5">
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center z-0 gap-5">
              <img
                src="./zatoWeBack.svg"
                alt="mine1"
                className="w-full h-[70px]"
              />
              <img
                src="./zatoWeBack.svg"
                alt="mine2"
                className="w-full h-[70px]"
              />
              <img
                src="./zatoWeBack.svg"
                alt="mine3"
                className="w-full h-[70px]"
              />
            </div>

            <div className="relative z-10 flex flex-col gap-5 items-center">
              <img
                src="./heart.svg"
                alt="heart icon"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              />
              <img
                src="./zatoWeFront1.svg"
                alt="mine1"
                className="w-full h-[70px] opacity-95 transition duration-200 cursor-pointer hover:scale-105"
              />
              <img
                src="./zatoWeFront2.svg"
                alt="mine2"
                className="w-full h-[70px] opacity-95 transition duration-200 cursor-pointer hover:scale-105"
              />
              <img
                src="./zatoWeFront3.svg"
                alt="mine3"
                className="w-full h-[70px] opacity-95 transition duration-200 cursor-pointer hover:scale-105"
              />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute flex flex-col items-center"
        style={{
          width: "720px",
          height: "664px",
          left: "953px",
          top: "240px",
        }}
      >
        <span className="text-white text-[36px] font-bold font-inter leading-none text-center mb-[8px] ">
          Наша услуга —
        </span>
        <span className="text-white text-[36px] font-bold font-inter leading-none text-center mb-[39px] ">
          это работа с вниманием
        </span>
        <img
          src="./rightkvadrat.svg"
          className="mb-[20px]"
          alt="rightkvadrat"
        />
        <a href="#section3">
          <img
            src="./rightbutton.svg"
            alt="rightbutton"
            className="transition duration-200 cursor-pointer hover:scale-102"
          />
        </a>
      </motion.div>
    </section>
  );
}
