import { useNavigate } from "react-router-dom";
import Input from "../../components/shared/input/input";
import { validateEmail } from "../../utils/helper";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useState } from "react";

const SignUp = (): React.JSX.Element => {
  const [emailId, setEmailId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");
  const [fullName, setFullName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsLoading(true)

    if (!validateEmail(emailId)) {
      setError("Please Enter a valid email address");
      console.log(error);
      return;
    }

    setError("");
    setIsLoading(false)

    //SignUp API Call
  };
  return (
    <AuthLayout>
      <div className="lg:w-2/5 flex flex-col justify-between items-center">
        <div>
          <h1 className="text-[48px] text-black font-semibold mt-31 leading-[62px]">
            Hello, <br/> Join Us Today!
          </h1>
          <p className="text-lg text-black font-medium mt-5 mb-10">By Creating An Account</p>
          <form className="flex flex-col gap-[24px]" onSubmit={handleSignUp}>
            <Input
                label="Name"
                type="text"
                placeholder="Full Name"
                required
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            <div className="flex flex-col gap-2">
              {error && (
                <p className="text-sm font-medium text-red-500">{error}</p>
              )}
              <Input
                label="Email ID"
                type="text"
                placeholder="ag@gmail.com"
                required
                value={emailId}
                onChange={(e) => {
                  setEmailId(e.target.value);
                }}
              />
            </div>
            <Input
              label="Password"
              type="password"
              placeholder="Min 8 Characters"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button className="btn-primary" type="submit" disabled={isLoading}>
              Sign Up
            </button>
            <p>
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-emerald-600 hover:text-emerald-700 font-semibold underline"
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
