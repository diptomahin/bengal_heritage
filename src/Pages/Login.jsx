import React from "react";
import { Link } from "react-router"; // or react-router-dom
import { Mail, Lock, ArrowRight } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 py-24 px-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left Side - Image & Decor */}
        <div className="w-full md:w-1/2 relative hidden md:block">
          <img
            src="https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2021/11/16/1_4.jpg"
            alt="Terracotta Art"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent flex flex-col justify-end p-8 text-white">
            <h3 className="text-3xl font-bold mb-2">Welcome Back</h3>
            <p className="text-amber-100">
              Continue your journey through the heritage of Bengal.
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-amber-900 mb-2">Sign In</h2>
            <p className="text-stone-500">Please enter your details</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-stone-50"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400"
                  size={20}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-stone-50"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-stone-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 border-gray-300 mr-2"
                />
                Remember me
              </label>
              <a
                href="#"
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                Forgot Password?
              </a>
            </div>

            <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
              Sign In <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-8 text-center text-stone-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-amber-700 font-bold hover:underline"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
