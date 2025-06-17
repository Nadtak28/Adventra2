import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../../../../hook/registerSlice";
import OtpField from "./otpField";
import EmailVerifyInput from "./emailVerifyInput";
import RegisterButton from "./registerButton";

export default function VerificationForm({ onSuccess, onResend }) {
  const dispatch = useDispatch();
  const { code, error } = useSelector((state) => state.register);

  const handleOtpChange = (otpValue) => {
    dispatch(updateField({ field: "code", value: otpValue }));
  };

  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <h2 className="text-[24px] font-bold text-[#0e1a18]">Verification Code</h2>
      <p className="text-sm text-gray-500 text-center max-w-md">
        A verification code was sent to your email. Please enter your email and the 6-digit code.
      </p>

      <EmailVerifyInput />
      <OtpField value={code} onChange={handleOtpChange} />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex px-4 py-3">
        <RegisterButton onSuccess={onSuccess} />
      </div>

      <button
        onClick={onResend}
        className="text-sm text-blue-500 hover:underline mt-2"
      >
        Resend verification code
      </button>
    </div>
  );
}
