import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Login
          <span className="text-blue-600">ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label">
              <span className="text-base label-text ">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 bg-slate-100"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-slate-100"
            />
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 text-gray-200 bg-blue-600 border-blue-600 hover:bg-blue-800 hover:border-blue-800">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


