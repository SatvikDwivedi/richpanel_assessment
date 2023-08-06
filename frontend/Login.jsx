import React from "react";
// import "../App.css";

function Login() {
  return (
    <div className="w-[60vw] max-w-[500px] bg-white rounded-3xl mx-auto container flex flex-col justify-center gap-6 items-center py-12">
      <h1 className="text-2xl py-4">Login to your Account</h1>
      <form className="space-y-4 w-full px-16">
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
      </form>
      <div>
        <button className="w-full bg-[#1E4C90] text-white py-4 px-4 rounded hover:bg-blue-600">
          <a href="monthly">Login</a>
        </button>
      </div>
      <div className="mt-[60px]">
        <p>
          New to MyApp?{" "}
          <span style={{ color: "#1E4C90" }}>
            <a href="/">Sign Up</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
