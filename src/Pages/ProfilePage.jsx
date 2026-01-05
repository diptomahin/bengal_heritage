import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider"; // Adjust path if needed
import { useNavigate } from "react-router";
import { User, Mail, LogOut, Calendar, Shield } from "lucide-react";

const ProfilePage = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      // Redirect to login after successful logout
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  // 1. Loading State Handler
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <span className="loading loading-spinner text-amber-600 loading-lg"></span>
      </div>
    );
  }

  // 2. Auth Protection (Optional: if not handled by router)
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 text-stone-600">
        <p className="mb-4">You must be logged in to view this page.</p>
        <button
          onClick={() => navigate("/login")}
          className="text-amber-700 font-bold hover:underline"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-start">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden mt-10">
        {/* --- Header / Color Banner --- */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 h-32 relative">
          <div className="absolute top-4 right-4 text-white/20">
            <Shield size={64} />
          </div>
        </div>

        {/* --- Profile Content --- */}
        <div className="px-8 pb-8">
          {/* Avatar (Overlapping the banner) */}
          <div className="relative -mt-16 mb-6 flex justify-center">
            <div className="h-32 w-32 rounded-full border-4 border-white bg-stone-200 flex items-center justify-center shadow-md overflow-hidden text-stone-500">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                // Fallback if no photo: Show first letter of Name
                <span className="text-4xl font-bold">
                  {user.displayName?.charAt(0)?.toUpperCase() || (
                    <User size={40} />
                  )}
                </span>
              )}
            </div>
          </div>

          {/* User Name & Role */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-stone-800">
              {user.displayName || "Valued User"}
            </h2>
            <p className="text-stone-500 text-sm mt-1">Heritage Enthusiast</p>
          </div>

          {/* User Details Cards */}
          <div className="space-y-4">
            {/* Email Field */}
            <div className="flex items-center p-4 bg-stone-50 rounded-xl border border-stone-100 hover:border-amber-200 transition-colors">
              <div className="bg-white p-2 rounded-lg shadow-sm mr-4 text-amber-600">
                <Mail size={20} />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">
                  Email Address
                </p>
                <p className="text-stone-700 font-medium truncate">
                  {user.email}
                </p>
              </div>
            </div>

            {/* Join Date Field */}
            <div className="flex items-center p-4 bg-stone-50 rounded-xl border border-stone-100 hover:border-amber-200 transition-colors">
              <div className="bg-white p-2 rounded-lg shadow-sm mr-4 text-amber-600">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">
                  Member Since
                </p>
                <p className="text-stone-700 font-medium">
                  {/* Using Firebase metadata for creation time */}
                  {user.metadata?.creationTime
                    ? new Date(user.metadata.creationTime).toDateString()
                    : "Unknown"}
                </p>
              </div>
            </div>
          </div>

          {/* --- Logout Button --- */}
          <button
            onClick={handleLogout}
            className="w-full mt-8 flex items-center justify-center gap-2 bg-red-50 text-red-600 font-bold py-3.5 rounded-xl border border-red-100 hover:bg-red-600 hover:text-white hover:shadow-lg transition-all duration-200"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
