import { Link } from "react-router-dom";
// import btn1 from "../assets/Rectangle 692.svg"
// import Google from "../assets/Rectangle 2129.svg"
// import Facebook from "../assets/Rectangle 2130.svg"

const Signup = () => {
  return (
    <>
      <div className="flex flex-col px-4 pb-8 overflow-scroll h-full no-scrollbar">
        <h1 className="mt-11 text-xl font-semibold text-[#2C2B2B] font-roboto">
          Create an account
        </h1>
        <div className="mt-5 font-Montserrat">
          <input
            type="text"
            placeholder="First Name"
            className="px-5 py-4 w-full mt-5 text-xs font-semibold rounded-xl bg-[#F1F1F1] text-[#7F7F7F]"
          ></input>

          <input
            type="text"
            placeholder="Last Name"
            className="px-5 w-full py-4 mt-5 text-xs font-semibold rounded-xl bg-[#F1F1F1] text-[#7F7F7F]"
          ></input>

          <input
            type="email"
            placeholder="Email"
            className="px-5 py-4 mt-5 w-full text-xs font-semibold rounded-xl bg-[#F1F1F1] text-[#7F7F7F]"
          ></input>

          <input
            type="password"
            placeholder="Password"
            className="px-5 py-4 mt-5 w-full text-xs font-semibold rounded-xl bg-[#F1F1F1] text-[#7F7F7F] "
          ></input>
          <div className="flex gap-2 mt-3">
            <div className="flex flex-col justify-center">
              <input
                type="checkbox"
                className=" my-3 rounded border border-solid border-[#7F7F7F] w-5 h-5 accent-green-700"
              />
            </div>
            <div className="text-[#7F7F7F]  flex-auto my-auto text-xs font-semibold leading-5">
              <span className="font-medium">
                By proceeding, I agree to all{" "}
              </span>
              <span className="font-medium text-indigo-300 underline">T&C</span>{" "}
              <span className="font-medium">and </span>
              <span className="font-medium text-indigo-300 underline">
                Privacy Policy
              </span>
            </div>
          </div>
        </div>

        <Link to={"/signin"} className="mt-20">
          <button className="w-full btn-custom text-white font-semibold text-base font-Montserrat">
            Create an Account
          </button>
        </Link>

        <div className="flex w-full gap-2.5 mt-7 text-xs font-medium whitespace-nowrap text-zinc-800">
          <div className="shrink-1 my-auto border border-gray-300 w-full" />
          <div className="flex-auto">Or</div>
          <div className="shrink-2 my-auto h-px border border-gray-300 w-full" />
        </div>
        <div className="flex gap-5 self-center mt-7">
          <div className="shrink-0 w-11 h-11 rounded-lg border border-solid aspect-square border-zinc-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full p-3"
              width="18px"
              height="18px"
              viewBox="0 0 48 48"
            >
              <path
                fill="#ffc107"
                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
              ></path>
              <path
                fill="#ff3d00"
                d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
              ></path>
              <path
                fill="#4caf50"
                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
              ></path>
              <path
                fill="#1976d2"
                d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
              ></path>
            </svg>
          </div>
          <div className="shrink-0 w-11 h-11 rounded-lg border border-solid aspect-square border-zinc-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full p-3"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#1A7AEB"
                d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
              ></path>
            </svg>
          </div>
        </div>
        <Link to={"/signin"} className="self-center mt-7 ">
          <div className="text-xs font-medium font-Montserrat">
            <span>Already have an account? </span>
            <span className="text-indigo-400 underline">
              Login
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Signup;
