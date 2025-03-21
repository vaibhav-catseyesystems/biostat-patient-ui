import React, { useState } from "react";
import LoginForm from "../components/AuthPage/LoginForm";
import RegisterForm from "../components/AuthPage/RegisterForm";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="font-[Comfortaa] min-h-screen bg-[#F8F9FA]">
      <header>
        <nav className="fixed w-full bg-[#fff] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] z-50">
          <div className="max-w-[1272px] mx-auto px-6 py-4">
            <a href="/" className="text-[24px] font-bold text-[#4318D1]">
            <span className="text-green-500 font-bold">Bio</span>
            <span className="text-blue-500 font-bold">Stat</span>
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-[100px] pb-[60px]">
        <div className="max-w-[480px] mx-auto px-6">
          <div className="bg-white rounded-[13px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] p-[32px]">
            <div className="flex gap-[32px] mb-[32px]">
              <button
                onClick={() => setIsLogin(true)}
                style={{
                  color: isLogin ? "#4318D1" : "#64748B",
                  borderBottom: isLogin ? "2px solid #4318D1" : "none",
                }}
                className="flex-1 pb-[8px] text-[16px] font-medium"
              >
                Log In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                style={{
                  color: !isLogin ? "#4318D1" : "#64748B",
                  borderBottom: !isLogin ? "2px solid #4318D1" : "none",
                }}
                className="flex-1 pb-[8px] text-[16px] font-medium"
              >
                Register
              </button>
            </div>

            {isLogin ? <LoginForm /> : <RegisterForm />}
          </div>

          <p className="text-center text-[14px] text-[#64748B] mt-[24px]">
            <span>By continuing, you agree to our </span>
            <a href="#" className="text-[#4318D1]">
              Terms of Service
            </a>
            <span> and </span>
            <a href="#" className="text-[#4318D1]">
              Privacy Policy
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default AuthPage;
