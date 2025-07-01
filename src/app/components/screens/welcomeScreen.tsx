export default function WelcomeScreen() {
  return (
    <section className="w-full min-h-screen bg-[#FFF9F0] flex flex-col justify-center pxcenter items-4 text-center">
      <h1 className="text-center">Этот сайт сделан вручную</h1>
      <p className="text-base md:text-lg text-[#2E293D] font-light">
        Каждая буква, каждый пиксель, каждая строчка кода — наши
      </p>
      <p className="text-sm text-[#2E293D] mt-2">
        Пролистайте, чтобы увидеть, на что мы способны
      </p>
    </section>
  );
}
