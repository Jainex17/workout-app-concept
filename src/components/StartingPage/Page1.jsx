import { Link } from "react-router-dom";
import ImgFirst from "../../assets/Page1.png";
import Gobtn from "../../assets/GoBtn.svg";

const Page1 = () => {
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
            src={ImgFirst}
            className="self-center w-full aspect-square max-w-[282px]"
          />
          <div className="flex flex-col items-start text-start">
            <div className="mt-14 text-2xl  font-semibold text-zinc-800">
              Track Your Goal
            </div>
            <div className="mt-5 text-base  font-medium text-neutral-500">
              Don’t worry if you have trouble determining your goals, We can
              help you determine your goals and track your goals
            </div>
          </div>
          <Link to={"/page2"} className="flex cursor-pointer justify-end my-10">
            <img src={Gobtn} alt="btn" className="self-end" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page1;
