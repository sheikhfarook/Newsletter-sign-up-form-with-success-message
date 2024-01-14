// import { useEffect } from "react";
import check from "../assets/check.svg";

const SubscribingPage = ({ email, onClose }) => {
  // const obj = {
  //   name: "John Doe",
  //   age: 25,
  //   courses: ["Math 101"],
  // };

  return (
    <div className="my-[16rem] max-sm:my-[10rem] ">
      <div
        className="w-[31.5rem] h-[32.5rem] m-auto rounded-[2.25rem] bg-white 
      max-sm:h-[50.75rem] max-sm:rounded-none ">
        <div
          className="w-[23.5rem] font-roboto mx-auto items-center justify-center space-y-6 max-sm:space-y-[23rem] 
        max-sm:w-[20.4375rem]">
          <div className="space-y-6 max-sm:space-y-10">
            <div className="pt-12 ">
              <img className="w-[4rem] h-[4rem] " src={check} alt="" />
            </div>
            <h1
              className="w-full text-[3.5rem] font-[700] leading-[4rem]
            max-sm:leading-[2.5rem] max-sm:text-[2.5rem]">
              Thanks for subscribing!
            </h1>
            <p className="w-[full] text-[1rem] font-[400]  ">
              A confirmation email has been sent to{" "}
              <span className="font-[700]">{email}</span> Please open it and
              click the button inside to confirm your subscription.
            </p>
          </div>
          {/* ash@loremcompany.com. */}
          <button
            onClick={onClose}
            className="w-full h-[3.5rem] rounded-[0.5rem] hover:bg-gradient-to-t from-[#FF527B] to-[#FF6A3A] text-center bg-[#242742] text-[1rem] font-[700] text-white">
            <p className="">Dismiss message</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribingPage;
