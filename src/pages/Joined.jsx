export default function Joined({ history, match }) {
  function joining() {}

  return (
    <section className="h-screen flex flex-col items-center">
      <img src="/images/illustration-joined.jpg" alt="Success Join" />
      <h1 className="text-3xl text-gray-900 mt-12">Where Are We!?</h1>
      <p className="text-lg text-gray-600 mt-4 mb-8 lg:w-3/12 xl:w-2/12 mx-auto text-center">
        You have sucessfully joined <strong></strong> course.
      </p>
      <span
        onClick={joining}
        to="/login"
        className="bg-yellow-500 hover:bg-yellow-600 text-white transition-all duration-200 
        focus:outline-none shadow-inner text-whitepx-6 py-3 px-12"
      >
        Start Learn
      </span>
    </section>
  );
}
