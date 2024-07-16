import React, { useEffect, useRef, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import OtpInput from "./OtpInput";

function OtpComponent() {
  let [isLoginPage, setIsLoginPage] = useOutletContext();
  useEffect(() => {
    setIsLoginPage(false);
  }, []);

  let [otp, setOtp] = useState("");

  let handleVerify = () => {
    console.log(otp);
  }


  return (
    <div className="text-center mt-2">
      <div className="heading text-xl font-semibold py-2 text-cyan-900">
        Verify Otp
      </div>
      <div className="otpText text-[1.25rem] text-cyan-700">
        A OneTimePassword has been sent to your registered email.
      </div>
      <div className="otp my-5">
        <OtpInput setOtp={setOtp} />
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
        <button
          className="bg-gradient-to-br from-gradientPurple to-gradientBlue text-white px-10 py-1 text-2xl rounded-3xl mb-2 hover:text-gray-200 active:text-gray-100"
          onClick={handleVerify}
        >
          Verify
        </button>
      </div>
    </div>
  );
}

export default OtpComponent;
