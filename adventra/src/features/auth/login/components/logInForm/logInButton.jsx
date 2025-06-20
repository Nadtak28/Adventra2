// src/components/mainContent/LoginForm/logInButton.jsx
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  setSubmitted,
  setValidationErrors,
} from "../../hook/logInSlice";
import { LogInService } from "../../api/loginservice";
import { tokenStore } from "../../../../../utils/dataStore";

export default function LogInButton({ onSuccess }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { email, password, error, validationErrors } = useSelector((state) => state.login);

  const handleSubmit = async () => {
    dispatch(setSubmitted(true));
    dispatch(setValidationErrors({}));
    setLoading(true);

    try {
      const result = await dispatch(LogInService({ email, password }));

      if (result.type === "login/fulfilled") {
        const token = result.payload.token;
        tokenStore.saveToken(token);
        console.log("✅ Token received:", token);

        if (onSuccess) {
          onSuccess("success");
        }
      } else {
        console.warn("❌ Login failed:", result);
      }
    } catch (err) {
      console.error("🔥 Error in login:", err);
    } finally {
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
          className="flex h-10 min-w-[84px] max-w-[480px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-3xl px-4 bg-[#53e3cb] text-[#0e1a18] text-sm font-bold"
          type="button"
        >
          {loading ? (
            <div className="w-6 h-6 border-2 border-white border-t-[#0e1a18] rounded-full animate-spin"></div>
          ) : (
            <span className="truncate">Log In</span>
          )}
        </button>
      </div>
    </div>
  );
}
