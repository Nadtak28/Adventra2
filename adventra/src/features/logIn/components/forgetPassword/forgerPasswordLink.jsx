export default function ForgetPasswordLink({ onForgetPasswordClick }) {
  return (
    <p className="text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center  ">
      Did You Forgot Your Password?{' '}
      <button
        className="text-[#519489] font-semibold underline hover:cursor-pointer"
        onClick={onForgetPasswordClick}
      >
Forget Password      </button>
    </p>
  );
}
