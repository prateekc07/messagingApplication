import React from 'react'

function OtpInput() {
  return (
    <>
      {Array.from({length: 4}).map((_, index) => (
        <input
          key={index}
          className="border border-gray-400 w-10 h-10 mx-1 rounded-lg text-xl text-center outline-none text-gray-600"
          type="text"
          maxLength={1}
        />
      ))}
    </>
  );
}

export default OtpInput;