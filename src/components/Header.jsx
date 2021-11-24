import { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../assets/images/logo.svg";

function Header({ onLight, location }) {
  const [ToggleMenu, setToggleMenu] = useState(false);

  const linkColor = onLight ? "text-gray-900" : "text-white";

  const linkCTA =
    location.pathname.indexOf("/login") > -1 ? `/register` : `/login`;

  const textCTA =
    location.pathname.indexOf("/login") > -1 ? "Register" : "Login";

  return (
    <header
      className={[
        "container mx-auto flex justify-between items-center px-4",
        ToggleMenu ? "fixed w-full px-4" : "",
      ].join(" ")}
    >
      <div style={{ zIndex: 50 }}>
        <img src={Logo} alt="Micourse Logo" />
      </div>

      <div className="flex md:hidden px-4">
        <button
          onClick={() => setToggleMenu((prev) => !prev)}
          className={["toggle z-50", ToggleMenu ? "active" : ""].join(" ")}
        />
      </div>

      <ul
        className={[
          "transition-all duration-200 items-center fixed inset-0 bg-indigo-900 pt-24 md:pt-0 md:bg-transparent md:relative md:flex md:opacity-100 md:visible",
          ToggleMenu ? "opacity-100 visible z-20" : "opacity-0 invisible",
        ].join(" ")}
      >
        <li className="my-4 md:my-0">
          <Link
            to="/"
            className={[
              linkColor,
              "text-white hover:text-blue-500 text-lg px-6 py-3",
            ].join(" ")}
          >
            Home
          </Link>
        </li>
        <li className="my-4 md:my-0">
          <Link
            to="/courses"
            className={[
              linkColor,
              "text-white hover:text-blue-500 text-lg px-6 py-3",
            ].join(" ")}
          >
            Explore
          </Link>
        </li>
        <li className="my-4 md:my-0">
          <Link
            to="/"
            className={[
              linkColor,
              "text-white hover:text-blue-500 text-lg px-6 py-3",
            ].join(" ")}
          >
            Features
          </Link>
        </li>
        <li className="my-4 md:my-0">
          <Link
            to="/"
            className={[
              linkColor,
              "text-white hover:text-blue-500 text-lg px-6 py-3",
            ].join(" ")}
          >
            Blog
          </Link>
        </li>
        <li className="mt-8 md:mt-0">
          <Link
            to={linkCTA}
            className="bg-indigo-700 hover:bg-indigo-900 transition-all duration-200 text-white 
            hover:text-blue-500 text-lg px-6 py-3 ml-6"
          >
            {textCTA}
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default withRouter(Header);
