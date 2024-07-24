import { useEffect, useState } from "react";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import { userRegistration } from "../../services/user-authentication-service";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

function Registration() {
  let [isLoginPage, setIsLoginPage] = useOutletContext();
  useEffect(() => {
    setIsLoginPage(false);
  }, []);

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [termAndConditions, setTermAndConditions] = useState(false);

  // States used to store that the email or password is correct or not.
  let [isEmailCorrect, setIsEmailCorrect] = useState(true);
  let [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  let [showPassword, setShowPassword] = useState(false);

  // Email validation method
  let handleEmail = () => {
    let emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if (email === "") {
      setIsEmailCorrect(true);
    } else if (emailRegExp.test(email)) {
      setIsEmailCorrect(true);
    } else {
      setIsEmailCorrect(false);
    }
  };

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

  useEffect(() => {
    handleEmail();
  }, [email]);

  useEffect(() => {
    handlePassword();
  }, [password]);

  let navigate = useNavigate();

  let handleSignUp = async () => {
    if (name !== "" && isEmailCorrect && isPasswordCorrect && termAndConditions) {
      // navigate("/verifyOtp");
      let user = {
        name: name,
        email: email,
        password: password
      }
      userRegistration(user);
    }
  }

  return (
    <>
      <div className="signUpForm ml-7 md:ml-10 lg:ml-16">
        <div className="registrationHeading text-xl font-semibold text-cyan-800">
          Sign Up details
        </div>
        <div className="name">
          <input
            type="text"
            name="name"
            value={name}
            title="Capitalize first letter of your FirstName and LastName."
            onChange={(e) => setName(e.target.value)}
            id="userName"
            className="border bg-cyan-50 w-[90%] lg:w-[80%] h-10 rounded-md pl-3 placeholder:text-lg outline-none text-cyan-800 text-lg my-1.5"
            placeholder="Name"
          />
        </div>
        <div className="email">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border ${
              isEmailCorrect ? "" : "border-red-600"
            } bg-cyan-50 w-[90%] lg:w-[80%] h-10 rounded-md pl-3 placeholder:text-lg outline-none text-cyan-800 text-lg my-1.5`}
            id="userEmail"
            placeholder="Email"
          />
        </div>
        <div className="password flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`border ${
              isPasswordCorrect ? "" : "border-red-600"
            } bg-cyan-50 w-[90%] lg:w-[80%] h-10 rounded-md pl-3 placeholder:text-lg outline-none text-cyan-800 text-lg my-1.5`}
            placeholder="Password"
            id="userPassword"
          />
          {showPassword ? (
            <IoEyeOffOutline
              onClick={() => setShowPassword((prev) => !prev)}
              className="relative right-8 hover:cursor-pointer text-blue-200 text-2xl"
            />
          ) : (
            <IoEyeOutline
              onClick={() => setShowPassword((prev) => !prev)}
              className="relative right-8 hover:cursor-pointer text-blue-200 text-2xl"
            />
          )}
        </div>
        <div className="termsConditions">
          <input
            type="checkbox"
            onClick={() => setTermAndConditions((prev) => !prev)}
            name="termsConditions"
            id="t&c"
          />{" "}
          <span className="text-cyan-800 text-[0.8rem] lg:text-[1rem]">
            I agree with the terms and conditions.
          </span>
        </div>
        <div className="signUpButton text-center my-2 -ml-7 md:-ml-10 lg:-ml-16">
          <button
            onClick={handleSignUp}
            className="text-lg py-1 px-20 lg:px-28 rounded-2xl bg-gradient-to-br from-gradientPurple to-gradientBlue text-white font-semibold hover:text-gray-200 active:text-gray-100"
          >
            SignUp
          </button>
        </div>
      </div>
    </>
  );
}

export default Registration;
