import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

function LoginComponent() {
  let [isLoginPage, setIsLoginPage] = useOutletContext();
  useEffect(() => {
    setIsLoginPage(true);
  }, []);

  // States used to store actual email or password.
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  // States used to store that the email or password is correct or not.
  let [isEmailCorrect, setIsEmailCorrect] = useState(true);
  let [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

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

  let [isLoginInfoCorrect, setIsLoginInfoCorrect] = useState(true);

  //  handle signin info submission when login button is clicked.
  let handleSignIn = async (event) => {
    if (!isEmailCorrect || !isPasswordCorrect) {
      setIsLoginInfoCorrect(false);
      setTimeout(() => {
        setIsLoginInfoCorrect(true)
      }, 3000);
    } else {
      setIsLoginInfoCorrect(true);
    }
    event.preventDefault();
  };

  return (
    <>
      <div className="loginForm text-center pt-4">
        <div className="loginHeading text-xl font-semibold text-cyan-800 my-3">
          Sign In Here
        </div>
        <div className="email">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border ${
              isEmailCorrect ? "" : "border-red-600"
            } bg-cyan-50 w-[80%] h-10 rounded-md pl-3 placeholder:text-lg outline-none text-cyan-800 text-lg my-2`}
            id="userEmail"
            placeholder="Email"
          />
        </div>
        <div className="password">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`border ${
              isPasswordCorrect ? "" : "border-red-600"
            } bg-cyan-50 w-[80%] h-10 rounded-md pl-3 placeholder:text-lg outline-none text-cyan-800 text-lg my-2`}
            placeholder="Password"
            id="userPassword"
          />
        </div>
        <div className="signInErrorMessage h-6 mt-1">
          <span className={`text-red-900 ${isLoginInfoCorrect ? "hidden" : ""} font-semibold`}>
            Email or Password is incorrect!
          </span>
        </div>
        <div className="loginButton my-4">
          <button onClick={handleSignIn} className="text-lg py-1 px-28 rounded-2xl bg-gradient-to-br from-gradientPurple to-gradientBlue text-white font-semibold hover:text-gray-200 active:text-gray-100">
            Login
          </button>
        </div>
        <div className="registerWithUs pt-1">
          {"Don't have an account? "}
          <Link
            to="/registration"
            className="text-blue-900 underline font-semibold hover:text-blue-700 hover:no-underline"
          >
            SignUp
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginComponent;
