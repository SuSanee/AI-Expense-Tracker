import type { ReactNode } from "react";
import { LuTrendingUpDown } from "react-icons/lu";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }:AuthLayoutProps) : React.JSX.Element => {

  return (
    <div className="lg:w-screen lg:h-screen md:w-[60vw] flex ">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-3/5 bg-gradient-to-br from-emerald-600 to-teal-700 p-12 flex-col justify-center items-center text-white">
        <div className="max-w-md text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-[#1d5652] rounded-full flex items-center justify-center mb-6 mx-auto">
              <LuTrendingUpDown className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Expense Tracker!</h1>
            <p className="text-lg text-emerald-100">
              Track your expenses, manage your budget, and achieve your
              financial goals with our AI-powered expense tracker.
            </p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
