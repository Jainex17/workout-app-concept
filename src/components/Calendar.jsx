import { Link } from "react-router-dom";

const Calendar = () => {
  return (
    <div className="overflow-scroll h-full no-scrollbar font-Montserrat">
      <div>
        <div className="flex gap-5 justify-center pr-1.5 text-base tracking-tight whitespace-nowrap text-neutral-800" />
        <div className="mt-9 text-xl font-semibold text-[#2C2B2B] leading-6 flex px-3">
          
          <Link to="/home" className="bg-[#F1F1F1] my-auto p-[2px] rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2C2B2B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
          
          <div className="w-full text-center">
            <span>Workout Schedule</span>
          </div>
        </div>
        <div className="flex justify-center mt-5 gap-1 text-xs font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2C2B2B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <div>Feb 2024</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2C2B2B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
        <div className="flex flex-col mt-4 w-full text-xs font-semibold">
          <div className="grid grid-cols-5 gap-2 mb-10 mt-2 text-xs font-medium leading-4 text-center font-Quicksand">
            <div className="flex flex-col text-[#454545] pb-4 pt-2 cursor-pointer">
              <span className="font-semibold leading-4">Sun</span>
              <span className="text-3xl font-semibold">5</span>
            </div>
            <div className="flex flex-col text-white cal-btn rounded-lg pb-4 pt-2 cursor-pointer">
              <span className="font-semibold leading-4">Mon</span>
              <span className="text-3xl font-semibold">6</span>
            </div>
            <div className="flex flex-col text-[#454545] pb-4 pt-2 cursor-pointer">
              <span className="font-semibold leading-4">Tue</span>
              <span className="text-3xl font-semibold">7</span>
            </div>
            <div className="flex flex-col text-[#454545] pb-4 pt-2 cursor-pointer">
              <span className="font-semibold leading-4">Wed</span>
              <span className="text-3xl font-semibold">8</span>
            </div>
            <div className="flex flex-col text-[#454545] pb-4 pt-2 cursor-pointer">
              <span className="font-semibold leading-4">The</span>
              <span className="text-3xl font-semibold">9</span>
            </div>
          </div>
          <div>
            <div className="border-b-[0.5px] font-semibold text-xs text-black font-montserrat border-[#7F7F7F] py-3 px-[18px]">
              06:00 AM
            </div>
            <div className="sticky">
              <div className="border-b-[0.5px] font-semibold text-xs text-black font-montserrat border-[#7F7F7F] py-3 px-[18px]">
                07:00 AM
              </div>
              <div className="absolute top-5 right-5">
                <div className="text-xs w-auto text-center font-semibold text-white bg-gradient-to-r from-[rgba(211,164,244,1)] to-[rgba(233,177,224,1)] rounded-full p-2">
                  Ab Workout, 7:30am
                </div>
              </div>
            </div>
            <div className="border-b-[0.5px] font-semibold text-xs text-black font-montserrat border-[#7F7F7F] py-3 px-[18px]">
              08:00 AM
            </div>
            <div className="sticky">
              <div className="border-b-[0.5px] font-semibold text-xs text-black font-montserrat border-[#7F7F7F] py-3 px-[18px]">
                09:00 AM
              </div>
              <div className="absolute bottom-0 left-24">
                <div className="text-xs w-auto text-center font-semibold text-white bg-gradient-to-r from-[rgba(211,164,244,1)] to-[rgba(233,177,224,1)] rounded-full p-2 py-[6px]">
                  Upperbody Workout, 9am
                </div>
              </div>
            </div>
            <div className="border-b-[0.5px] font-semibold text-xs text-black font-montserrat border-[#7F7F7F] py-3 px-[18px]">
              10:00 AM
            </div>
            <div className="border-b-[0.5px] font-semibold text-xs text-black font-montserrat border-[#7F7F7F] py-3 px-[18px]">
              11:00 AM
            </div>
            <div className="border-b-[0.5px] font-semibold text-xs text-black font-montserrat border-[#7F7F7F] py-3 px-[18px]">
              12:00 PM
            </div>
            <div className="border-b-[0.5px] font-semibold text-xs text-black font-montserrat border-[#7F7F7F] py-3 px-[18px]">
              01:00 PM
            </div>
            <div className="sticky">
              <div className="border-b-[0.5px] font-semibold text-xs text-black font-montserrat border-[#7F7F7F] py-3 px-[18px]">
                02:00 PM
              </div>
              <div className="absolute top-0 left-24">
                <div className="text-xs w-auto text-center font-semibold text-[#2C2B2B] bg-[#F1F1F1] rounded-full p-2 py-[6px]">
                Lowerbody Workout, 2pm
                </div>
              </div>
            </div>
            <div className="border-b-[0.5px] font-semibold text-xs text-black font-montserrat border-[#7F7F7F] py-3 px-[18px]">
              03:00 PM
            </div>
            <div className="border-b-[0.5px] font-semibold text-xs text-black font-montserrat border-[#7F7F7F] py-3 px-[18px]">
              04:00 PM
            </div>
            <div className="border-b-[0.5px] font-semibold text-xs text-black font-montserrat border-[#7F7F7F] py-3 px-[18px]">
              05:00 PM
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-24 z-50 h-0 flex justify-center cursor-pointer">
        <svg
          width="77"
          height="77"
          viewBox="0 0 77 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1_233)">
            <circle
              cx="38.5"
              cy="34.5"
              r="31.5"
              fill="url(#paint0_linear_1_233)"
            />
            <path
              d="M44.2792 41.2792L48.16 45.16M47.0399 34.5521C47.0399 39.8277 42.7773 44.1041 37.5206 44.1041C32.2626 44.1041 28 39.8277 28 34.5533C28 29.2752 32.2626 25 37.5193 25C42.7773 25 47.0399 29.2764 47.0399 34.5521Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_233"
              x="0.5"
              y="0.5"
              width="76"
              height="76"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="3.25" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_233"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_233"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1_233"
              x1="7"
              y1="33.45"
              x2="70"
              y2="34.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DEE5FF" />
              <stop offset="1" stop-color="#809AFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="sticky bottom-0 z-40 w-full h-20 bg-white border-t border-gray-200 rounded-b-lg">
        <div className="grid h-full max-w-lg grid-cols-5">
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center font-medium p-5 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="#7F7F7F"
                d="M20 10a1 1 0 1 0-2 0zM6 10a1 1 0 0 0-2 0zm14.293 2.707a1 1 0 0 0 1.414-1.414zM12 3l.707-.707a1 1 0 0 0-1.414 0zm-9.707 8.293a1 1 0 1 0 1.414 1.414zM7 22h10v-2H7zm13-3v-9h-2v9zM6 19v-9H4v9zm15.707-7.707l-9-9l-1.414 1.414l9 9zm-10.414-9l-9 9l1.414 1.414l9-9zM17 22a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1zM7 20a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3z"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center font-medium px-5 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="#829DFF" strokeWidth={1.5}>
                <circle cx={19} cy={5} r={2.5}></circle>
                <path
                  strokeLinecap="round"
                  d="M21.25 10v5.25a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6H14"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m7.27 15.045l2.205-2.934a.9.9 0 0 1 1.197-.225l2.151 1.359a.9.9 0 0 0 1.233-.261l2.214-3.34"
                ></path>
              </g>
            </svg>
          </button>

          <span></span>

          <button
            type="button"
            className="inline-flex flex-col items-center justify-center font-medium px-5 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="#7F7F7F" strokeWidth={1.5}>
                <circle cx={12} cy={13} r={3}></circle>
                <path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.408 4.408 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697c0-3.065 0-4.597-.749-5.697a4.407 4.407 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.405 4.405 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364c0 3.064 0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z"></path>
                <path strokeLinecap="round" d="M19 10h-1"></path>
              </g>
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center font-medium px-5 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="#7F7F7F" strokeWidth={2}>
                <path
                  strokeLinejoin="round"
                  d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
                ></path>
                <circle cx={12} cy={7} r={3}></circle>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
