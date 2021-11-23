import { useState } from "react";
// import imgHero from "../../public/assets/images/hero-login.jpg";

export default function LoginForm() {
  const [Email, setEmail] = useState(() => "");
  const [Password, setPassword] = useState(() => "");

  function submit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center items-center pb-24">
      <div className="w-3/12">
        <h1 className="text-4xl text-gray-900 mb-6">
          <span className="font-bold">Continue </span>Study, Finish Your{" "}
          <span className="font-bold">Goals.</span>
        </h1>
        <form onSubmit={submit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-lg mb-2">
              Email Address
            </label>
            <input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              className="bg-white focus:outline-none border py-3 px-3 w-full border-gray-600 focus:border-blue-500"
              value={Email}
              placeholder="Your Email Address"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-lg mb-2">
              Password
            </label>
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              className="bg-white focus:outline-none border py-3 px-3 w-full border-gray-600 focus:border-blue-500"
              value={Password}
              placeholder="Your Password"
            />
          </div>
          <button
            className="bg-yellow-600 hover:bg-yellow-500 text-white transition-all duration-200 
          focus:outline-none shadow-inner text-whitepx-6 py-3 mt-4 w-full"
          >
            Register
          </button>
        </form>
      </div>

      <div className="w-1/12"></div>

      <div className="hidden w-5/12 md:flex justify-end pt-24 pr-16">
        <div className="relative" style={{ width: 369, height: 440 }}>
          <div
            className="absolute border-indigo-700 border-2 -mt-8 -ml-16 left-0"
            style={{ width: 324, height: 374 }}
          />
          <div className="absolute w-full h-full -mb-8 -ml-8">
            <img src="/assets/images/hero-login.jpg" alt="Login Hero" />
          </div>
          <div className="absolute z-10 bg-white bottom-0 right-0 py-3 px-4 -mr-12">
            <p className="text-gray-900 text-base">
              Learning was never been so fun!
            </p>
            <p className="text-gray-600 text-sm">Anna, Web Developer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}