import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  updateField,
  setSubmitted,
  setValidationErrors,
} from "../../../../hook/generateUnverifiedUserSlice";
import { ResendVerificationCodeService } from "../../../../api/services/resendVerificationCodeService";

export default function ResendVerificationForm({ onBackToVerification }) {
  const dispatch = useDispatch();
  const { email, error, validationErrors } = useSelector((state) => state.generateUnverifiedUser);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    dispatch(updateField({ field: "email", value: e.target.value }));
  };

  const handleResend = async () => {
    dispatch(setSubmitted(true));
    if (!email || !email.includes("@")) {
      dispatch(setValidationErrors({ email: "Enter a valid email." }));
      return;
    }

    setLoading(true);
    const result = await dispatch(ResendVerificationCodeService({ email }));

    if (ResendVerificationCodeService.fulfilled.match(result)) {
      onBackToVerification(); // Navigate back to VerificationForm
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <h2 className="text-[24px] font-bold text-[#0e1a18]">Resend Code</h2>
      <p className="text-sm text-gray-500 text-center max-w-md">
        Enter your email again to resend the verification code.
      </p>

      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Email"
        className="form-input w-full max-w-md border border-gray-300 rounded-xl px-4 py-2"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {validationErrors?.email && (
        <p className="text-red-500 text-sm">{validationErrors.email}</p>
      )}

      <button
        onClick={handleResend}
        disabled={loading}
        className="bg-[#53e3cb] text-[#0e1a18] font-bold px-6 py-2 rounded-xl"
      >
        {loading ? "Resending..." : "Resend Code"}
      </button>
    </div>
  );
}
