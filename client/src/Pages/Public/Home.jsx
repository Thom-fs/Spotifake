import Logo from "../../Assets/jambon-beurre-logo.svg";
import { useState } from "react";

import HomeModal from "../../Components/Public/Home.jsx";
import Register from "../../Components/Public/Register.jsx";
import Login from "../../Components/Public/Login.jsx";
import ForgottenPassword from "../../Components/Public/ForgottenPassword";
import ResetPassword from "../../Components/Public/ResetPassword";

export default function Home() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [forgottenModal, setForgottenModal] = useState(false);
  const [resetModal, setResetModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  return (
    <>
      <div className="flex items-center justify-center h-[100vh] w-[100vw]">
        <div className="flex flex-col items-center justify-center md:min-h-3/5 min-h-4/5 md:w-1/2 w-4/5 bg-light rounded-3xl relative md:px-16 px-8 py-16">
          <img
            src={Logo}
            alt="Jambon Beurre Logo"
            className="absolute -top-16 w-32"
          />
          {loginModal && (
            <Login
              setLoginModal={setLoginModal}
              setRegisterModal={setRegisterModal}
              setForgottenModal={setForgottenModal}
            />
          )}

          {registerModal && (
            <Register
              setRegisterModal={setRegisterModal}
              setLoginModal={setLoginModal}
            />
          )}

          {forgottenModal && (
            <ForgottenPassword
              setForgottenModal={setForgottenModal}
              setLoginModal={setLoginModal}
              setResetModal={setResetModal}
              onEmailChange={handleEmailChange}
            />
          )}

          {resetModal && (
            <ResetPassword
              setResetModal={setResetModal}
              setLoginModal={setLoginModal}
              setForgottenModal={setForgottenModal}
              email={email}
            />
          )}

          {!loginModal && !registerModal && !forgottenModal && !resetModal && (
            <HomeModal
              setRegisterModal={setRegisterModal}
              setLoginModal={setLoginModal}
              setForgottenModal={setForgottenModal}
              setResetModal={setResetModal}
            />
          )}
        </div>
      </div>
    </>
  );
}
