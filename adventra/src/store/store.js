import { configureStore } from "@reduxjs/toolkit";
import GenerateUnverifiedUserReducer from "../features/auth/signUp/hook/generateUnverifiedUserSlice";
import RegisterReducer from "../features/auth/signUp/hook/registerSlice"
import  ResendVerificationCodeReducer from "../features/auth/signUp/hook/resendVerificationCodeSlice";
import  LogInReducer  from "../features/auth/login/hook/logInSlice";
import  ForgetPasswordReducer  from "../features/auth/forgetPassword/hook/forgetPasswordSlice";
import  CheckCodeReducer  from "../features/auth/forgetPassword/hook/checkCodeSlice";
import ResetPasswordReducer from "../features/auth/forgetPassword/hook/resetPasswordSlice"
import HomeReducer from "../features/home/hook/homeSlice"
export const store = configureStore({
  reducer: {
    generateUnverifiedUser: GenerateUnverifiedUserReducer,
register:RegisterReducer,
resendVerificationCode:ResendVerificationCodeReducer,
login:LogInReducer,
forgetPassword:ForgetPasswordReducer,
checkCode:CheckCodeReducer,
resetPassword:ResetPasswordReducer,
home:HomeReducer,
  },
});
