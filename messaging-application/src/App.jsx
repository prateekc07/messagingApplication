import "./App.css";
import LoginComponent from "./components/login/LoginComponent";
import RegistrationLoginTemplate from "./components/registrationLoginTemplate/RegistrationLoginTemplate";
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Registration from './components/registration/Registration';
import NotFoundPage from './components/notFoundPage/NotFoundPage';
import OtpComponent from "./components/registration/OtpComponent";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import ChangePassword from "./components/forgotPassword/ChangePassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegistrationLoginTemplate />,
    children: [
      {
        path: "",
        element: <Navigate to="/login" />
      },
      {
        path: "login",
        element: <LoginComponent />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "verifyOtp",
        element: <OtpComponent />
      },
      {
        path: "forgotPassword",
        element: <ForgotPassword />
      },
      {
        path: "changePassword",
        element: <ChangePassword />
      }
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]);

function App() {
  return (
    <>
      < RouterProvider router={router} />
    </>
  );
}

export default App;