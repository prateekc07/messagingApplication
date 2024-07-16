import React, { useEffect, useRef } from 'react'

function OtpInput({ setOtp }) {

  let otpInputRef = useRef([]);

  useEffect(() => {
    if (otpInputRef.current[0]) otpInputRef.current[0].focus();
  }, []);

  const handleKeyUp = (e, index) => {
    if (e.key === "Backspace" && index > 0) {
      otpInputRef.current[index - 1].focus();
    } else if (
      e.key >= 0 &&
      e.key <= 9 &&
      e.key !== " " &&
      index < otpInputRef.current.length - 1
    ) {
      otpInputRef.current[index + 1].focus();
    } else {
      let otp = "";
      for (let i = 0; i < 4; i++) {
        otp += otpInputRef.current[i].value;
      }
      setOtp(otp);
    }
  };

  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <input
          key={index}
          ref={(currentOtpElem) =>
            (otpInputRef.current[index] = currentOtpElem)
          }
          onKeyUp={(e) => handleKeyUp(e, index)}
          className="border border-gray-400 w-10 h-10 mx-1 rounded-lg text-xl text-center outline-none text-gray-600"
          type="text"
          maxLength={1}
        />
      ))}
    </>
  );
}

export default OtpInput;