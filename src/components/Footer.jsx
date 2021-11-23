import { useState } from "react";
import Link from "next/link";
import FormEmail from "./FormEmail";

export default function Footer() {
  return (
    <footer className=" bg-indigo-900 mt-24 px-4 py-12">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/6 mb-8 md:mb-0">
          <h6 className="text-white">Company</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link href="#">
                <a className="text-gray-400 hover:text-indigo-500 hover:underline">
                  API References
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-gray-400 hover:text-indigo-500 hover:underline">
                  Career & Support
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-gray-400 hover:text-indigo-500 hover:underline">
                  Story
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-gray-400 hover:text-indigo-500 hover:underline">
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/6 mb-8 md:mb-0">
          <h6 className="text-white">Student</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link href="#">
                <a className="text-gray-400 hover:text-indigo-500 hover:underline">
                  Scholarship
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-gray-400 hover:text-indigo-500 hover:underline">
                  Skills Path
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-gray-400 hover:text-indigo-500 hover:underline">
                  Features
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-gray-400 hover:text-indigo-500 hover:underline">
                  Refund Policy
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/6 mb-8 md:mb-0">
          <h6 className="text-white">Our Address</h6>
          <p className="mt-4 text-gray-400 leading-loose">
            Micourse HQ <br />
            Jovalley Block X No.8 <br />
            South Jakarta, Indonesia <br />
            12630
          </p>
        </div>
        <div className="w-full md:w-2/6 mb-8 md:mb-0">
          <h6 className="text-white">Touch Us</h6>
          <p className="my-2 text-gray-400">
            Submit your email to get special offers
          </p>
          <FormEmail />
        </div>
      </div>
      <div className="border-t pt-10 mt-8 -mb-2 border-gray-800 text-center text-lg">
        <p className="text-gray-400">Micourse • All Right Reserved • 2021</p>
      </div>
    </footer>
  );
}
