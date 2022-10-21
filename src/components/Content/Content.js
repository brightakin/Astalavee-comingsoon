import comingSoonImage from "../../assets/ComingSoon.png";
import flightIconLarge from "../../assets/flighticonlarge.png";
import flightIconSmall from "../../assets/flighticonsmall.png";

const Content = (props) => {
  return (
    <div className="relative">
      <img
        src={flightIconLarge}
        className="absolute h-[67px]  lg:h-[80px] w-[54px] lg:w-[150px] top-[367px]  lg:top-[150px] left-[21px] lg:left-[50px]"
        alt=""
      />
      <h1 className="absolute lg:right-20 lg:top-20 top-10 left-[2px] sm:text-6xl lg:text-7xl text-4xl w-[100vw] lg:w-full leading-20 font-bold text-center text-[#cbcbd4]">
        We Are Building The Future For{" "}
        <span className="text-[#ffe202]">Creators.</span>
      </h1>
      <h3 className="absolute sm:top-[185px] lg:top-[250px] top-[140px] lg:right-20 sm:left-[40px] left-[10px] lg:text-4xl sm:text-2xl text-[15px] w-[90vw] font-semibold lg:font-bold text-center text-[#ffffff] ">
        Ecommerce platform for every Creators to sell their creatives with
        necessary tools.
      </h3>
      <button
        onClick={props.onClick}
        className="absolute hover:border-2 hover:border-white h-[56px] lg:h-[123px] w-[185px] lg:w-[500px] left-[110px] sm:left-[345px] lg:left-[400px] sm:top-[275px] top-[250px] lg:top-[400px] text-[#9900cc] font-bold leading-4 text-center text-1xl lg:text-4xl rounded-full bg-white  hover:text-[#ffffff] hover:bg-[#9900cc]"
      >
        Join Waiting List
      </button>
      <img
        src={flightIconSmall}
        className="absolute h-[80px] w-[56px] top-[400px] right-[50px] lg:visible invisible"
        alt=""
      />
      <div className="absolute h-[272px] lg:h-[514px] w-[209px]  lg:w-[395px] top-[300px] sm:top-[325px] lg:top-[500px] left-[90px] sm:left-[330px] lg:left-[475px]">
        <img src={comingSoonImage} alt="" />
      </div>
    </div>
  );
};

export default Content;
