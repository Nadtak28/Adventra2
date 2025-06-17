import { useState } from "react";
import { Navigate } from "react-router-dom";
import HeroImage from './mainContent/HeroSection/heroImage';
import GenerateUnverifiedUserForm from "./mainContent/SignUpForm/generateUnverifiedUserForm/generateUnverifiedUSerForm";
import LoginFormLink from './mainContent/LogInLink/logInLink';
import Header from './mainContent/header/header';
import VerificationForm from './mainContent/SignUpForm/VerificationForm/verificationForm';
import ResendVerificationForm from './mainContent/SignUpForm/resendVerification/resendVerificationForm';

import LoginForm from "../../logIn/components/logInForm/logInForm"; // <- import
import SignUpLink from "../../logIn/components/signUpLink/signUpLink";

export default function MainContent() {
  const [step, setStep] = useState("form"); // 'form' | 'loading' | 'verify' | 'resend' | 'login' | 'success'

  if (step === "success") return <Navigate to="/home" />;

  return (
    <main className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-full max-w-[600px] flex flex-col justify-center px-10">
          {step === "form" && (
            <>
              <h2 className="text-[#0e1a18] text-[28px] font-bold leading-tight pb-3 text-center">
                Create your account
              </h2>
              <GenerateUnverifiedUserForm onSuccess={(newStep) => setStep(newStep)} />
              <LoginFormLink onLoginClick={() => setStep("login")} />
            </>
          )}

          {step === "loading" && (
            <div className="flex justify-center items-center h-full w-full">
              <div className="w-12 h-12 border-4 border-t-[#53e3cb] border-gray-300 rounded-full animate-spin"></div>
            </div>
          )}

          {step === "verify" && (
            <VerificationForm
              onSuccess={() => setStep("success")}
              onResend={() => setStep("resend")}
            />
          )}

          {step === "resend" && (
            <ResendVerificationForm onBackToVerification={() => setStep("verify")} />
          )}

          {step === "login" && (
            <>
                    <h2 className="text-[#0e1a18] text-[28px] font-bold leading-tight pb-3 text-center">
                Login to Your Home
              </h2>
<LoginForm onSuccess={() => setStep("success")} />
              <SignUpLink onregisterClick={()=>setStep("form")}/>
            </>
          )}
        </div>

        <div className="flex-1 hidden lg:block">
          <HeroImage />
        </div>
      </div>
    </main>
  );
}
