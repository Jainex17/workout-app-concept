import { Link } from "react-router-dom";

const Goals = () => {
  return (
    <div className="overflow-scroll h-full no-scrollbar py-10">
      <div className="px-4 pt-1 flex flex-col h-full justify-between">
        <div className="font-Montserrat">
          <div className="mt-5 text-xl font-semibold text-zinc-800 text-center">
            What are your goals?
          </div>

          <div className="flex  justify-between px-5 py-2 mt-11 h-12 rounded-xl bg-[#F1F1F1]">
            <div className="my-auto text-xs font-semibold text-zinc-800">
              Weight Loss
            </div>
            <div className="flex flex-col justify-center">
              <input
                type="checkbox"
                className="rounded border border-solid border-[#7F7F7F] w-5 h-5 accent-green-700 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-between px-5 py-1 mt-4 h-12 rounded-xl bg-[#F1F1F1]">
            <div className="my-auto text-xs font-semibold text-zinc-800">
              Muscle Gain
            </div>
            <div className="flex flex-col justify-center">
              <input
                type="checkbox"
                className="rounded border border-solid border-[#7F7F7F] w-5 h-5 accent-green-700 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-between px-5 py-2 mt-4 h-12 rounded-xl bg-[#F1F1F1]">
            <div className="my-auto text-xs font-semibold text-zinc-800">
              Flexibility and Mobility
            </div>
            <div className="flex flex-col justify-center">
              <input
                type="checkbox"
                className="rounded border border-solid border-[#7F7F7F] w-5 h-5 accent-green-700 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-between px-5 py-2 mt-4 h-12 rounded-xl bg-[#F1F1F1]">
            <div className="my-auto text-xs font-semibold text-zinc-800">
              General Fitness
            </div>
            <div className="flex flex-col justify-center">
              <input
                type="checkbox"
                className="rounded border border-solid border-[#7F7F7F] w-5 h-5 accent-green-700 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-between px-5 py-2 mt-4 h-12 rounded-xl bg-[#F1F1F1]">
            <div className="my-auto text-xs font-semibold text-zinc-800">
              Event - specific training
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center">
                <input
                  type="checkbox"
                  className="rounded border border-solid border-[#7F7F7F] w-5 h-5 accent-green-700 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between px-5 py-2 mt-4 h-12 rounded-xl bg-[#F1F1F1]">
            <div className="my-auto text-xs font-semibold text-zinc-800">
              Mindfulness and Mental Health
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center">
                <input
                  type="checkbox"
                  className="rounded border border-solid border-[#7F7F7F] w-5 h-5 accent-green-700 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to={"/home"} className="mt-10 w-full">
            <button className="w-full btn-custom text-white font-semibold text-base font-Montserrat">
              Conform
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Goals;
