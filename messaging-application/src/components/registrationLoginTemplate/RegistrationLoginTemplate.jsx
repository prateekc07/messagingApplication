import { CiFaceSmile } from "react-icons/ci";
import ChatFusionLogo from "../../assets/chatFusionLogo1.png";
import FacebookLogo from "../../assets/facebookLogo.png";
import GmailLogo from "../../assets/gmailLogo.png";
import { RxCrossCircled } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function RegistrationLoginTemplate() {

  /*
  This isLoginPage state is used to redirect from Registration page to login page. It used in cross icon on the top right side of the registration page, on clicking the cross button then it get back to login page. This state is passed throught Outlet using context attribute of outlet, so it's children can access it through useOutletContext() hook. In login page it set to true for not showing this cross icon and in registration page it set to false to showing the cross icon.
  */
  let [isLoginPage, setIsLoginPage] = useState(true);

  return (
    <section
      className="registrationLoginBox flex w-[70%] h-[70vh] mx-auto mt-28 rounded-xl"
      style={{ boxShadow: "0px 0px 15px #8c8c8c" }}
    >
      <div className="registrationLoginTemplate w-[50%] bg-gradient-to-br from-gradientPurple to-gradientBlue flex flex-col items-center justify-around rounded-l-xl">
        <div className="welcome text-white text-3xl">Welcome to</div>
        <div className="appLogo flex flex-col items-center">
          <div className="logo mb-2">
            <img src={ChatFusionLogo} alt="" width={200} />
          </div>
          <div
            className="applicationName font-bold text-3xl text-logoBlue mt-2"
            style={{ textShadow: "1px 1px black" }}
          >
            CHAT FUSION
          </div>
        </div>
        <div className="slogan text-white font-semibold text-xl">
          Share your smile with this world and Find Friends.
        </div>
        <div className="smileLogo">
          <CiFaceSmile className="text-white text-4xl" />
        </div>
      </div>
      <div className="registrationLoginForm w-[50%] rounded-r-xl flex flex-col justify-center">
        <div className="flex justify-between">
          <div className="greeting text-cyan-500 text-8xl mb-3 ml-10">
            Hello!
          </div>
          <div className="backToLogin mr-4 mt-2 text-3xl text-blue-900">
            <Link
              to="/login"
              onClick={() => {
                setIsLoginPage(true);
              }}
            >
              <RxCrossCircled
                className={`rounded-xl ${isLoginPage ? "hidden" : ""}`}
                title="Back to login page."
              />
            </Link>
          </div>
        </div>
        <div className="signSection h-[42vh]">
          <Outlet context={[isLoginPage, setIsLoginPage]} />
        </div>
        <div className="oauthCredLogin">
          <div className="oauthHeading flex justify-center items-center">
            <div className="leftLine border-b-2 border-black w-44"></div>
            <div className="authSection text-cyan-950 font-semibold text-lg px-3">
              or connect with
            </div>
            <div className="rightLine border-b-2 border-black w-44"></div>
          </div>
          <div className="oauthProviders flex justify-around">
            <div className="gmail bg-yellow-300 text-white rounded-2xl my-4">
              <button className="rounded-2xl py-1 px-14 text-lg flex items-center">
                <span className="pr-2">
                  <img src={GmailLogo} width={25} alt="" />
                </span>
                Gmail
              </button>
            </div>
            <div className="facebook bg-blue-400 text-white rounded-2xl my-4">
              <button className="rounded-2xl py-1 px-14 text-lg flex items-center">
                <span className="pr-2">
                  <img src={FacebookLogo} width={25} alt="" />
                </span>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistrationLoginTemplate;
