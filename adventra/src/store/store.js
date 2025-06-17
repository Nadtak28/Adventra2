import { configureStore } from "@reduxjs/toolkit";
import GenerateUnverifiedUserReducer from "../features/signUp/hook/generateUnverifiedUserSlice";
import RegisterReducer from "../features/signUp//hook/registerSlice"
import  ResendVerificationCodeReducer from "../features/signUp/hook/resendVerificationCodeSlice";
import  LogInReducer  from "../features/logIn/hook/logInSlice";
export const store = configureStore({
  reducer: {
    generateUnverifiedUser: GenerateUnverifiedUserReducer,
register:RegisterReducer,
resendVerificationCode:ResendVerificationCodeReducer,
login:LogInReducer,

  },
});
