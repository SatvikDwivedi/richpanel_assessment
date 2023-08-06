import React from "react";
import "../App.css";

function SignUp() {
  return (
    <div className="w-[60vw] max-w-[500px] bg-white rounded-3xl mx-auto container flex flex-col justify-center gap-6 items-center py-12">
      <h1 className="text-2xl">Create Account</h1>
      <form className="space-y-4 w-full px-16">
        <div className="w-[100%]">
          <label htmlFor="name" className="block font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Eg: John Doe"
            className="w-full border-gray-300 rounded-lg px-3 py-2 border-2"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Eg: example@abc.com"
            className="w-full border-2 border-gray-300 rounded-lg px-3 py-2"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Eg: 12345"
            className="w-full border-2 border-gray-300 rounded-lg px-3 py-2"
            required
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember_me"
            name="remember_me"
            className="mr-2"
          />
          <label htmlFor="remember_me" className="font-medium">
            Remember me
          </label>
        </div>

        <button className="w-full bg-[#1E4C90] text-white py-4 px-4 rounded mt-6 hover:bg-blue-600">
          <a href="/login">Sign Up</a>
        </button>
      </form>
      <div className="mt-[60px]">
        <p>
          Already have an account?{" "}
          <span style={{ color: "#1E4C90" }}>
            <a href="/login">Login</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
