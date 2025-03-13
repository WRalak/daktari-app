


'use client';

import { useState } from "react";

const AuthForms = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [role, setRole] = useState<"patient" | "doctor" | "admin">("patient"); // Default role

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission based on isLogin state
    if (isLogin) {
      // Handle login logic
      console.log("Logging in...");
    } else {
      // Handle sign-up logic
      console.log("Signing up as:", role);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Toggle between Create Account and Login */}
        {isLogin ? (
          <>
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <p className="text-gray-600 text-center mt-2">
              Please log in to access your account.
            </p>
            <form className="mt-6" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Login
              </button>
            </form>
            <p className="text-center mt-4">
              Don't have an account?{" "}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => setIsLogin(false)}
              >
                Sign up here.
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center">Create Account</h2>
            <p className="text-gray-600 text-center mt-2">
              Please sign up to book an appointment.
            </p>
            <form className="mt-6" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <select
                value={role}
                onChange={(e) =>
                  setRole(e.target.value as "patient" | "doctor" | "admin")
                }
                className="w-full px-4 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Create Account
              </button>
            </form>
            <p className="text-center mt-4">
              Already have an account?{" "}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Login here.
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthForms;