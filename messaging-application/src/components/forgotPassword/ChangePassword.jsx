import React, { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom';

function ChangePassword() {
  let [isLoginPage, setIsLoginPage] = useOutletContext();
  useEffect(() => {
    setIsLoginPage(false);
  }, []);

  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  let [isConfirmPasswordCorrect, setIsConfirmPasswordCorrect] = useState(true);

  //  Password validation method
  let handlePassword = () => {
    let passwordRegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password === "") {
      setIsPasswordCorrect(true);
    } else if (passwordRegExp.test(password)) {
      setIsPasswordCorrect(true);
    } else {
      setIsPasswordCorrect(false);
    }
  };

  //  Confirm Password validation method
  let handleConfirmPassword = () => {
    let passwordRegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (confirmPassword === "") {
      setIsConfirmPasswordCorrect(true);
    } else if (passwordRegExp.test(confirmPassword) && password === confirmPassword) {
      setIsConfirmPasswordCorrect(true);
    } else {
      setIsConfirmPasswordCorrect(false);
    }
  };

  useEffect(() => {
    handlePassword();
  }, [password]);
  
  useEffect(() => {
    handleConfirmPassword();
  }, [confirmPassword]);

  let handleChangePassword = async () => {
    
  };

  return (
    <div>
      <div className="changePasswordForm text-center mt-4">
        <div className="changePasswordHeading text-xl font-semibold text-cyan-800">
          Change Password
        </div>
        <div className="password mt-5">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`border ${
              isPasswordCorrect ? "" : "border-red-600"
            } bg-cyan-50 w-[80%] h-10 rounded-md pl-3 placeholder:text-lg outline-none text-cyan-800 text-lg my-2`}
            id="userPassword"
            placeholder="Enter New Password"
          />
        </div>
        <div className="confirmPassword">
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`border ${
              isConfirmPasswordCorrect ? "" : "border-red-600"
            } bg-cyan-50 w-[80%] h-10 rounded-md pl-3 placeholder:text-lg outline-none text-cyan-800 text-lg my-2`}
            placeholder="Confirm New Password"
            id="userConfirmPassword"
          />
        </div>
        <div className="changePasswordButton mt-8">
          <button
            onClick={handleChangePassword}
            className="text-lg py-1 px-20 lg:px-28 rounded-2xl bg-gradient-to-br from-gradientPurple to-gradientBlue text-white font-semibold hover:text-gray-200 active:text-gray-100"
          >
            Change
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;