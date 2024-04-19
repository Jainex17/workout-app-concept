import { Link } from "react-router-dom";
import Img from "../../assets/Page2.png";
import Gobtn from "../../assets/GoBtn.svg";

const Page2 = () => {
  return (
    <div className="flex justify-center p-2 overflow-scroll h-full no-scrollbar">
      <div className="flex flex-col">
        <Link
          to={"/signup"}
          className="px-2 pt-2 text-lg text-[#9FB2FF] underline text-end"
        >
          Skip
        </Link>
        <div className="flex flex-col px-4 mt-16 w-full">
          <img
            src={Img}
            className="self-center w-full"
          />
          <div className="flex flex-col items-start text-start mt-10">
            <div className="mt-14 text-2xl font-semibold text-zinc-800">
                Get Burn
            </div>
            <div className="mt-6 text-base font-medium text-neutral-500">
                Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever
            </div>
          </div>
          <Link to={"/signup"} className="flex cursor-pointer justify-end my-10">
            <img src={Gobtn} alt="btn" className="self-end" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page2;
