import { useState } from "react";

export default function FormEmail() {
  const [state, setState] = useState(() => "");

  function submit() {
    window.open(
      `${process.env.NEXT_PUBLIC_MEMBER_PAGE_URL}/register?email=${state}`
    );
  }

  return (
    <form onSubmit={submit} className="flex">
      <input
        type="email"
        onChange={(event) => setState(event.target.value)}
        className="bg-white focus:outline-none border-0 px-4 md:px-6 py-3 w-full md:w-1/2"
        placeholder="Your Email Address"
      />
      <button
        className="bg-yellow-600 hover:bg-yellow-500 transition-all duration-200 
          focus:outline-none shadow-inner text-white px-4 md:px-6 py-3"
      >
        Register
      </button>
    </form>
  );
}
