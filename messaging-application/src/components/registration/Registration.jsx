import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

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
  let [isEmailCorrect, setIsEmailCorrect] = useState(null);
  let [isPasswordCorrect, setIsPasswordCorrect] = useState(null);

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

  return (
    <>
      <div className="signUpForm ml-16">
        <div className="registrationHeading text-lg text-cyan-800 my-3">
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
            className="border bg-cyan-50 w-[80%] h-10 rounded-md pl-3 placeholder:text-lg outline-none text-cyan-800 text-lg my-2"
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
        <div className="termsConditions">
          <input 
            type="checkbox"
            onClick={() => setTermAndConditions((prev) => !prev)}
            name="termsConditions" 
            id="t&c" 
          />{" "}
          <span className="text-cyan-800">
            I agree with the terms and conditions.
          </span>
        </div>
        <div className="signUpButton text-center my-5 -ml-16">
          <button className="text-lg py-1 px-28 rounded-2xl bg-gradient-to-br from-gradientPurple to-gradientBlue text-white font-semibold">
            SignUp
          </button>
        </div>
      </div>
    </>
  );
}

export default Registration;
