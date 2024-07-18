import React, { useEffect, useRef, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import OtpInput from "./OtpInput";

function OtpComponent() {
  let [isLoginPage, setIsLoginPage] = useOutletContext();
  useEffect(() => {
    setIsLoginPage(false);
  }, []);

  let [otp, setOtp] = useState("");

  let handleVerify = async () => {
    console.log(otp);
  }


  return (
    <div className="text-center">
      <div className="heading text-xl font-semibold pb-1 text-cyan-900">
        Verify Otp
      </div>
      <div className="otpText text-[1.15rem] lg:text-[1.25rem] text-cyan-700">
        A OneTimePassword has been sent to your registered email.
      </div>
      <div className="otp my-3">
        <OtpInput setOtp={setOtp} />
      </div>
      <div className="resendOtp text-xl font-semibold text-gray-600">
        {"Didn't get the code?"}
        <Link className="ml-2 text-blue-800 hover:text-blue-700 active:text-blue-900">
          Resend
        </Link>
      </div>
      <div className="errorMessage text-red-600 font-semibold h-9">
        <span className="text-lg">Entered incorrect Otp!</span>
      </div>
      <div className="verifyOtpButtom">
        <button
          className="bg-gradient-to-br from-gradientPurple to-gradientBlue text-white px-10 py-1 text-2xl rounded-3xl hover:text-gray-200 active:text-gray-100"
          onClick={handleVerify}
        >
          Verify
        </button>
      </div>
    </div>
  );
}

export default OtpComponent;
