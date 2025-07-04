const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center items-center m-0 p-0">
      <div className="relative w-[474px] h-[127.5px]">
        <img
          src="./header1.svg"
          className="absolute top-0 left-0 w-full h-full"
        />

        <img
          src="./icon.svg"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[59%] w-[83px] h-[72px]"
        />

        <img
          src="./headerButton.svg"
          className="absolute top-[11px] left-[11px] transition duration-200 ease-in-out cursor-pointer hover:scale-105"
        />

        <img
          src="./headerButton2.svg"
          className="absolute top-[11px] right-[11px] transition duration-200 ease-in-out cursor-pointer hover:scale-105"
        />
      </div>
    </header>
  );
};

export default Header;
