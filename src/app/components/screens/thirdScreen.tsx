import { motion } from "framer-motion";

export default function ThirdScreen() {
  return (
    <section
      id="section3"
      className="w-full min-h-screen bg-[#1A1A29] px-4 relative overflow-visible"
    >
      <div className="absolute left-[250px] top-[157px] w-[1420px] h-[733px] flex">
        <motion.div className="w-[600px] h-[712px] mt-[21px]">
          <span className="text-white text-[60px] font-normal leading-none text-center block">
            Не тупи, закажи сайт
          </span>
          <img src="./leadform.svg" className="mt-[25px]" />
          <img
            src="./lookatus.svg"
            className="mt-[20px] cursor-pointer transition duration-200 cursor-pointer hover:scale-103"
          />
        </motion.div>

        <motion.div className="w-[720px] h-[733px] ml-[100px] mt-[13px]">
          <img src="./bigform.svg" />
        </motion.div>
      </div>
    </section>
  );
}
