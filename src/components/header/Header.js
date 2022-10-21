import headerImage from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="h-[100px] w-[100%] bg-white">
      <img
        className="absolute h-[40px] w-[300px] left-[20px] sm:left-[80px] top-[38px]"
        src={headerImage}
        alt=""
      />
    </header>
  );
};

export default Header;
