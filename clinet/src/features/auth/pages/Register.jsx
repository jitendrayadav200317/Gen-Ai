import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-neutral-900 text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form className="flex flex-col gap-4 w-1/3  p-4 rounded-2xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Username"
            className="w-full p-2 rounded-2xl bg-neutral-800 border border-neutral-700 text-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            className="w-full p-2 rounded-2xl bg-neutral-800 border border-neutral-700 text-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            className="w-full p-2 rounded-2xl bg-neutral-800 border border-neutral-700 text-white"
          />
        </div>
        <button className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-2xl cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
          Register
        </button>
      </form>
      <p className="text-sm text-gray-500">
        Already have an account? <button className="text-red-500 hover:underline" onClick={() => navigate("/login")}>Login</button>
      </p>
    </div>
  );
}

export default Register;
