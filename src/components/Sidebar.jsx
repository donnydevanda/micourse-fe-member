import { Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as IconAvatar } from "assets/images/ic-avatar.svg";

function Sidebar({ match, history }) {
  const getNavLinkClass = (path) => {
    return match.path === path
      ? "active text-white bg-blue-700"
      : "text-blue-500";
  };

  const users = useSelector((state) => state.users);

  function logout() {
    history.push("/login");
    localStorage.removeItem("MICOURSE:token");
  }

  return (
    <aside
      className="bg-indigo-900 max-h-screen h-screen overflow-y-auto"
      style={{ width: 280 }}
    >
      <div
        className="max-h-screen h-screen fixed bg-indigo-900 flex flex-col content-between"
        style={{ width: 280 }}
      >
        <div className="flex flex-col text-center mt-8">
          <div className="border border-indigo-500 mx-auto p-2 inline-flex rounded-full overflow-hidden mb-3">
            {users?.avatar ? (
              <img src={users?.avatar} alt={users?.name} />
            ) : (
              <IconAvatar
                className="fill-indigo-500"
                style={{ width: 90, height: 90 }}
              />
            )}
          </div>
          <h6 className="text-white text-xl">{users?.name ?? "User Name"}</h6>
          <span className="text-indigo-500 text-sm">
            {users?.profession ?? "Profession"}
          </span>
        </div>
        <ul className="main-menu mt-12">
          <li>
            <Link
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left",
                getNavLinkClass("/"),
              ].join(" ")}
              to="/"
            >
              My Class
            </Link>
            <a
              target="blank"
              rel="noopener noreferrer"
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left",
                getNavLinkClass("/courses"),
              ].join(" ")}
              href={`${process.env.REACT_APP_FRONTPAGE_URL}/courses`}
            >
              Library
            </a>
            <Link
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left",
                getNavLinkClass("/transactions"),
              ].join(" ")}
              to="/transactions"
            >
              Transactions
            </Link>
            <Link
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left",
                getNavLinkClass("/settings"),
              ].join(" ")}
              to="/settings"
            >
              Settings
            </Link>
          </li>
        </ul>
        <div className="my-auto">
          <ul>
            <li>
              <button
                className="nav-link relative flex items-center py-3 px-5 transition-all duration-200 
                hover:text-white active:text-white focus:outline-none w-full text-left text-blue-500"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default withRouter(Sidebar);
