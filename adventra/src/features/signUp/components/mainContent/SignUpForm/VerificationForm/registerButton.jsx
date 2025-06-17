import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  setSubmitted,
  setValidationErrors,
} from "../../../../hook/registerSlice";
import { RegisterService } from "../../../../api/services/registerService";
import { tokenStore } from "../../../../../../utils/dataStore";

export default function RegisterButton({ onSuccess }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const formData = useSelector((state) => state.register);
  const { email, code, error, validationErrors } = formData;

  const handleSubmit = async () => {
    dispatch(setSubmitted(true));

    if (!email || !email.includes("@")) {
      dispatch(setValidationErrors({ email: "Enter a valid email." }));
      return;
    }

    if (!code || code.length !== 6) {
      dispatch(setValidationErrors({ code: "Enter a valid 6-digit code." }));
      return;
    }

    dispatch(setValidationErrors({}));
    setLoading(true);

    const result = await dispatch(RegisterService({ email, code }));

    if (RegisterService.fulfilled.match(result)) {
      const token = result.payload.token;
      tokenStore.saveToken(token);

      // 🔥 Trigger the success flow
      if (onSuccess) {
        onSuccess("success");
      } else {
        // fallback: navigate manually
{/* <Link to="/home"/> */}
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-4 py-3">
      {error && !Object.keys(validationErrors || {}).length && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <div className="flex">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="flex h-10 min-w-[84px] max-w-[480px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-3xl px-4 bg-[#53e3cb] text-[#0e1a18] text-sm font-bold leading-normal tracking-[0.015em]"
          type="button"
        >
          {loading ? (
            <div className="w-6 h-6 border-2 border-white border-t-[#0e1a18] rounded-full animate-spin"></div>
          ) : (
            <span className="truncate">Register</span>
          )}
        </button>
      </div>
    </div>
  );
}
