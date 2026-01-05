import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const result = await createUser(email, password);
      const user = result.user;
      await updateProfile(user, { displayName: name });
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await loginWithGoogle();
      // Note: Google automatically handles name/photo, so we just redirect
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Google sign-up failed. Please try again.");
    }
  };

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
          <div className="absolute inset-0 bg-linear-to-t from-amber-900/80 to-transparent flex flex-col justify-end p-8 text-white">
            <h3 className="text-3xl font-bold mb-2">Join Our Community</h3>
            <p className="text-amber-100">
              Support artisans and preserve tradition.
            </p>
          </div>
        </div>

        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-900 mb-2">
              Create Account
            </h2>
            <p className="text-stone-500">Start your heritage journey today</p>
          </div>

          {/* Google Register Button */}
          <button
            onClick={handleGoogleRegister}
            className="w-full flex items-center justify-center gap-3 bg-white border border-stone-200 text-stone-700 font-bold py-3 rounded-xl hover:bg-stone-50 hover:shadow-md transition-all duration-200 mb-6"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Sign up with Google
          </button>

          <div className="relative flex py-2 items-center mb-6">
            <div className="grow border-t border-stone-200"></div>
            <span className="shrink-0 mx-4 text-stone-400 text-sm">OR</span>
            <div className="grow border-t border-stone-200"></div>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
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
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center font-medium">
                {error}
              </div>
            )}

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

            <button
              type="submit"
              className="w-full bg-linear-to-r from-amber-600 to-orange-600 text-white font-bold py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
            >
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
