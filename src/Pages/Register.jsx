import React from "react";
import { Link } from "react-router";
import { User, Mail, Lock, ArrowRight } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 py-24 px-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row-reverse">
        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 relative hidden md:block">
          <img
            src="https://cdn.shopify.com/s/files/1/0281/8729/5828/files/image00011_600x600.jpg?v=1714039440"
            alt="Nakshi Kantha"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent flex flex-col justify-end p-8 text-white">
            <h3 className="text-3xl font-bold mb-2">Join Our Community</h3>
            <p className="text-amber-100">
              Support artisans and preserve tradition.
            </p>
          </div>
        </div>

        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-amber-900 mb-2">
              Create Account
            </h2>
            <p className="text-stone-500">Start your heritage journey today</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-stone-50"
                />
              </div>
            </div>

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
                  placeholder="Create a password"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-stone-50"
                />
              </div>
            </div>

            <div className="text-xs text-stone-500 leading-relaxed">
              By creating an account, you agree to our{" "}
              <span className="text-amber-700 font-bold cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-amber-700 font-bold cursor-pointer">
                Privacy Policy
              </span>
              .
            </div>

            <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
              Sign Up <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-8 text-center text-stone-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-amber-700 font-bold hover:underline"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
