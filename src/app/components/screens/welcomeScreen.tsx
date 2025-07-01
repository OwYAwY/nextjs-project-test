// import AnimatedCircleButton from "../AnimatedCircleButton";
export default function WelcomeScreen() {
  return (
    <section className="w-full min-h-screen bg-[#FFF9F0] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-center">Этот сайт сделан вручную</h1>
      <p className="text-base md:text-lg text-[#2E293D] font-light">
        Каждая буква, каждый пиксель, каждая строчка кода — наши
      </p>
      <p className="text-sm text-[#2E293D] mt-2">
        Пролистайте, чтобы увидеть, на что мы способны
      </p>

      <div className="relative mt-[78px] w-[228px] h-[228px] mx-auto">
        <img
          src="/buttoncircle.svg"
          className="w-full h-full"
          alt="Outer circle"
        />

        <img
          src="/buttoncircle2.svg"
          className="absolute top-1/2 left-1/2 w-[150px] h-[150px] -translate-x-1/2 -translate-y-1/2"
          alt="Inner circle"
        />
        <img
          src="/moon.svg"
          className="absolute top-1/2 left-1/2 w-[70px] h-[70px] -translate-x-1/2 -translate-y-1/2"
          alt="Inner circle"
        />
      </div>
      {/* <AnimatedCircleButton /> */}
    </section>
  );
}
