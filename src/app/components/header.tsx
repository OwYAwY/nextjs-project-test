import Link from "next/link";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white flex justify-center items-center h-[100px] w-full shadow-sm">
      <nav className="flex items-center space-x-12 m-0">
        <a
          href="#order"
          className="text-[26px] text-center text-[#2f2d46]"
          style={{ fontFamily: "var(--font-victor-mono)" }}
        >
          заказать
        </a>

        <a
          href="/"
          className="flex items-center justify-center max-w-[122px] max-h-[122px]"
        >
          <img src="/icon.svg" alt="Logo" className="w-[122px] max-h-[122px]" />
        </a>

        <a
          href="#contacts"
          className="text-[26px] text-center text-[#2f2d46]"
          style={{ fontFamily: "var(--font-victor-mono)" }}
        >
          контакты
        </a>
      </nav>
    </header>
  );
};

export default Header;
