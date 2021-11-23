import Image from "next/image";
import FormEmail from "./FormEmail";
import imgHero from "../public/images/img-hero.jpg";

export default function Hero() {
  return (
    <div className="container mx-auto flex items-center px-4">
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <h1 className="text-5xl text-white font-semibold mb-5 leading-normal">
          <span className="text-blue-300">The New</span> Way to
          <br className="hidden md:block" /> Achieve Your{" "}
          <span className="text-blue-300">Dreams.</span>
        </h1>
        <p className="text-white font-light text-lg mb-8">
          We provide the best courses to help you achieve your dreams.
        </p>
        <FormEmail />
      </div>
      <div className="hidden w-1/2 md:flex justify-end pt-24 pr-16">
        <div className="relative" style={{ width: 369, height: 440 }}>
          <div
            className="absolute border-indigo-700 border-2 -mt-12 -mr-6 right-0"
            style={{ width: 324, height: 374 }}
          />
          <div className="absolute w-full h-full -mb-8 -ml-8">
            <Image src={imgHero} alt="Image Hero" />
          </div>
          <div
            className="absolute z-10 bg-white py-3 px-4 mt-24"
            style={{ transform: "translateX(-50%)", width: 290 }}
          >
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
