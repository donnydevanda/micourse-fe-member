import React from "react";

export default function EmptyState() {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative z-50 bg-white">
      <div className="w-full sm:w-5/12 text-center py-12 mx-auto">
        <img src="/images/illustration-myclass-empty.jpg" alt="Success Join" />
        <h1 className="text-3xl text-gray-900 mt-12">Time to Invest</h1>
        <p className="text-lg text-gray-600 mt-4 mb-8 mx-auto text-center">
          You don't have any class yet.
        </p>
        <a
          href={`${process.env.REACT_APP_FRONTPAGE_URL}/courses`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-600 text-white transition-all duration-200 
        focus:outline-none shadow-inner text-whitepx-6 py-3 px-12"
        >
          Find Class
        </a>
      </div>
    </section>
  );
}
