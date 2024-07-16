import React, { useEffect, useRef } from "react";
import { Link, useOutletContext } from "react-router-dom";

function OtpComponent() {
  let [isLoginPage, setIsLoginPage] = useOutletContext();
  useEffect(() => {
    setIsLoginPage(false);
  }, []);


  return (
    <div className="text-center mt-2">
      <div className="heading text-2xl font-semibold py-2 text-cyan-900">
        Verify Otp
      </div>
      <div className="otpText text-[1.25rem] text-cyan-700">
        A OneTimePassword has been sent to your registered email.
      </div>
      <div className="otp my-5">
        <input
          className="border border-gray-400 w-10 h-10 mx-1 rounded-lg text-xl text-center outline-none text-gray-600"
          type="text"
          maxLength={1}
        />
        <input
          className="border border-gray-400 w-10 h-10 mx-1 rounded-lg text-xl text-center outline-none text-gray-600"
          type="text"
          maxLength={1}
        />
        <input
          className="border border-gray-400 w-10 h-10 mx-1 rounded-lg text-xl text-center outline-none text-gray-600"
          type="text"
          maxLength={1}
        />
        <input
          className="border border-gray-400 w-10 h-10 mx-1 rounded-lg text-xl text-center outline-none text-gray-600"
          type="text"
          maxLength={1}
        />
      </div>
      <div className="resendOtp text-xl font-semibold text-gray-600 mb-3">
        {"Didn't get the code?"}
        <Link className="ml-2 text-blue-800 hover:text-blue-700 active:text-blue-900">
          Resend
        </Link>
      </div>
      <div className="errorMessage text-red-600 font-semibold h-9 my-3">
        <span className="text-lg">Entered incorrect Otp!</span>
      </div>
      <div className="verifyOtpButtom">
        <button className="bg-gradient-to-br from-gradientPurple to-gradientBlue text-white px-10 py-1 text-2xl rounded-3xl mb-2 hover:text-gray-200 active:text-gray-100">
          Verify
        </button>
      </div>
    </div>
  );
}

export default OtpComponent;
