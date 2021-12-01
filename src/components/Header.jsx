import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

function Header({ onLight, location }) {
  const [ToggleMenu, setToggleMenu] = useState(false);

  const linkColor = onLight ? "text-white sm:text-gray-900" : "text-white";

  const linkCTA =
    location.pathname.indexOf("/login") > -1 ? `/register` : `/login`;

  const textCTA =
    location.pathname.indexOf("/login") > -1 ? "Register" : "Login";

  const classNameLogo = onLight
    ? ToggleMenu
      ? "on-dark"
      : "on-light"
    : "on-dark";

  return (
    <header
      className={[
        "flex justify-between items-center",
        ToggleMenu ? "fixed w-full px-4 -ml-4" : "",
      ].join(" ")}
    >
      <div style={{ height: 54 }} className="z-50">
        <Logo className={{ classNameLogo }} />
      </div>

      <div className="flex sm:hidden ">
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
          <a
            href={`${process.env.REACT_APP_FRONTPAGE_URL}/`}
            className={[
              linkColor,
              "text-white hover:text-blue-500 text-lg px-6 py-3 my-4 sm:my-0 font-medium",
            ].join(" ")}
          >
            Home
          </a>
        </li>
        <li className="my-4 md:my-0">
          <a
            href={`${process.env.REACT_APP_FRONTPAGE_URL}/courses`}
            className={[
              linkColor,
              "text-white hover:text-blue-500 text-lg px-6 py-3 my-4 sm:my-0 font-medium",
            ].join(" ")}
          >
            Explore
          </a>
        </li>
        <li className="my-4 md:my-0">
          <a
            href={`${process.env.REACT_APP_FRONTPAGE_URL}/`}
            className={[
              linkColor,
              "text-white hover:text-blue-500 text-lg px-6 py-3 my-4 sm:my-0 font-medium",
            ].join(" ")}
          >
            Features
          </a>
        </li>
        <li className="my-4 md:my-0">
          <a
            href={`${process.env.REACT_APP_FRONTPAGE_URL}/`}
            className={[
              linkColor,
              "text-white hover:text-blue-500 text-lg px-6 py-3 my-4 sm:my-0 font-medium",
            ].join(" ")}
          >
            Blog
          </a>
        </li>
        <li className="mt-8 md:mt-0">
          <Link
            to={linkCTA}
            className="bg-indigo-700 hover:bg-indigo-900 text-white text-lg transition-all duration-200 px-6 py-3 my-4 sm:my-0 font-medium ml-6"
          >
            {textCTA}
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default withRouter(Header);
