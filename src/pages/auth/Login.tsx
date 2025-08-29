import { useState } from "react";
// import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Input from "../../components/shared/input/input";
import { validateEmail } from "../../utils/helper";
import AuthLayout from "../../components/layouts/AuthLayout";

const Login = (): React.JSX.Element => {
  const [emailId, setEmailId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (!validateEmail(emailId)) {
      setError("Please Enter a valid email address");
      console.log(error);
      return;
    }

    setError("");

    //Login API Call
  };

  return (
    <AuthLayout>
      {/* Right Section */}
      <div className="lg:w-2/5 flex flex-col justify-between items-center">
        <div>
          <h1 className="text-[48px] text-black font-semibold mt-31 mb-11 leading-[62px]">
            Hello, <br /> Welcome Back!
          </h1>
          <form className="flex flex-col gap-[24px]" onSubmit={handleLogin}>
            <div className="flex flex-col gap-2">
              {error && (
                <p className="text-sm font-medium text-red-500">
                  Oops! Wrong email or password
                  {/* {error} */}
                </p>
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
              // className="w-full border-1 border-black px-3 py-2 rounded-md"
            />
            <div className="flex justify-between px-2">
              <label className="flex items-center text-sm text-black">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 border border-[#1d5652] rounded-xs bg-[var(--background-secondary)] checked:bg-primary"
                />
                Remember me
              </label>
              <a
                href="#"
                className="text-[var(--primary-text)] font-semibold text-sm"
              >
                Forgot Password
              </a>
            </div>
            <button className="btn-primary" type="submit">
              Login
            </button>
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-emerald-600 hover:text-emerald-700 font-semibold underline"
              >
                Sign up
              </span>
            </p>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
