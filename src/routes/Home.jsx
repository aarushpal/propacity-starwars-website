import { NavLink } from "react-router-dom";
import homePageImage from "../../src/assets/images/homePageImage.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full px-4">
      <div
        className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] p-6 flex flex-col items-start gap-6"
        style={{
          borderRadius: "12px",
          border: "2px solid #E0E6ED",
          background: "var(--White, #FFF)",
          boxShadow: "0px 7px 34px 0px rgba(23, 23, 37, 0.25)",
        }}
      >
        <div
          className="w-full h-[218px] md:h-[218px] lg:h-[230px] xl:h-[250] 2xl:h-[300]"
          style={{
            borderRadius: "8px",
            background: `url(${homePageImage}) lightgray 50% / cover no-repeat`,
          }}
        ></div>
        <div className="w-full text-xl md:text-2xl font-bold text-gray-800">
          Welcome to Star Wars Dashboard
        </div>
        <div className="w-full text-base md:text-lg text-gray-600">
          Star Wars is an American epic space opera multimedia franchise created
          by George Lucas, which began with the eponymous 1977 film and quickly
          became a worldwide pop culture phenomenon.
        </div>
      </div>
    </div>
  );
};

export default Home;
