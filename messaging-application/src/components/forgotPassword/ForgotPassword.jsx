import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';

function ForgotPassword() {
  let [isLoginPage, setIsLoginPage] = useOutletContext();
  useEffect(() => {
    setIsLoginPage(false);
  }, []);

  let [email, setEmail] = useState("");
  let [isEmailCorrect, setIsEmailCorrect] = useState(true);

  // Email validation method
  let handleEmail = () => {
    let emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if (email === "") {
      setIsEmailCorrect(true);
    } else if (emailRegExp.test(email)) {
      console.log(true);
      setIsEmailCorrect(true);
    } else {
      setIsEmailCorrect(false);
      console.log(false);
    }
  };

  useEffect(() => {
    handleEmail();
  }, [email]);

  let checkEmail = async () => {

  }

  return (
    <div className="text-center flex flex-col justify-around h-60">
      <div className="forgotPasswordHeading text-xl text-cyan-900 font-semibold">
        Forgot Password?
      </div>
      <div className="emailField">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`border ${
            isEmailCorrect ? "" : "border-red-600"
          } bg-cyan-50 w-[80%] h-10 rounded-md pl-3 placeholder:text-lg outline-none text-cyan-800 text-lg`}
          id="userEmail"
          placeholder="Email"
        />
      </div>
      <div className="errorMessage">
        <span className="text-red-600 text-lg text-center font-semibold">
          {"You're not in our clique."}
        </span>
      </div>
      <div className="submitBtn">
        <button onClick={checkEmail} className='bg-gradient-to-br from-gradientPurple to-gradientBlue px-12 rounded-3xl py-1 text-white text-2xl'>Forgot</button>
      </div>
    </div>
  );
}

export default ForgotPassword;