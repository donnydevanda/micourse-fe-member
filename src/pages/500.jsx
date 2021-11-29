import { Link } from "react-router-dom";

export default function ServerError({ history }) {
  return (
    <section className="h-screen flex flex-col items-center pt-24">
      <img src="/images/illustration-notfound.jpg" alt="Error 500" />
      <h1 className="text-3xl text-gray-900 mt-12">Server Error</h1>
      <p className="text-lg text-gray-600 mt-4 mb-8 lg:w-3/12 xl:w-2/12 mx-auto text-center">
        Mostly this caused by the busy server. Sorry.
      </p>
      <Link
        to="/"
        className="bg-yellow-500 hover:bg-yellow-600 text-white transition-all duration-200 
        focus:outline-none shadow-inner text-whitepx-6 py-3 px-12"
      >
        Back to Home
      </Link>
    </section>
  );
}
