import { Link } from "react-router-dom";

export default function NotFound({ history }) {
  return (
    <section className="h-screen flex flex-col items-center pt-24">
      <img src="/images/illustration-notfound.jpg" alt="Error 404" />
      <h1 className="text-3xl text-gray-900 mt-12">Where Are We!?</h1>
      <p className="text-lg text-gray-600 mt-4 mb-8 lg:w-3/12 xl:w-2/12 mx-auto text-center">
        We can't found that page on our system. Sorry.
      </p>
      <Link
        to="/login"
        className="bg-yellow-500 hover:bg-yellow-600 text-white transition-all duration-200 
        focus:outline-none shadow-inner text-whitepx-6 py-3 px-12"
      >
        Back to Home
      </Link>
    </section>
  );
}
