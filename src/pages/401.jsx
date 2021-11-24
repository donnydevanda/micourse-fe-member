import { Link } from "react-router-dom";

export default function Unauthenticated({
  fallbackUrl,
  fallbackText,
  external,
}) {
  return (
    <section className="h-screen flex flex-col items-center">
      <img src="/images/illustration-private.jpg" alt="Error 401" />
      <h1 className="text-3xl text-gray-900 mt-12">What Are You Doing!?</h1>
      <p className="text-lg text-gray-600 mt-4 mb-8 lg:w-3/12 xl:w-2/12 mx-auto text-center">
        It look like you don't have access to this page. Sorry.
      </p>
      {external ? (
        <a
          href={fallbackUrl}
          className="bg-yellow-500 hover:bg-yellow-600 text-white transition-all duration-200 
        focus:outline-none shadow-inner text-whitepx-6 py-3 px-12"
        >
          {fallbackText || "Login"}
        </a>
      ) : (
        <Link
          to={fallbackUrl || "/login"}
          className="bg-yellow-500 hover:bg-yellow-600 text-white transition-all duration-200 
        focus:outline-none shadow-inner text-whitepx-6 py-3 px-12"
        >
          {fallbackText || "Login"}
        </Link>
      )}
    </section>
  );
}
