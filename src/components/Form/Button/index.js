export default function Button({ text }) {
  return (
    <button
      className="bg-yellow-600 hover:bg-yellow-500 text-white transition-all duration-200 
          focus:outline-none shadow-inner text-whitepx-6 py-3 mt-4 w-full"
    >
      {text}
    </button>
  );
}
