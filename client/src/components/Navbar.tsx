
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const user = false;

    const location = useLocation();
  const { pathname } = location;

  const isActive = (path: string) => {
    return pathname === path
      ? "text-blue-600 font-bold"
      : "text-gray-600 hover:text-blue-700 font-bold";
  };

  return (
    <div className=" bg-white/80 z-10 border-b-gray-100 border-b shadow-sm backdrop-blur-sm">
      <div className="h-16 w-full flex justify-between items-center py-2 px-4 border-b-gray-400">
        <div className="flex items-center gap-x-4">
          <span className="material-symbols-outlined text-blue-600 text-3xl">
            analytics
          </span>
          <span className="text-xl tracking-[-0.001em] font-bold leading-tight">
            Resume Analyzer
          </span>
        </div>

        {user ? (
          <div className="flex items-center gap-x-8">
            <div className="flex items-center space-x-4 gap-8">
              <Link
                to={"/dashboard"}
                // className="hover:text-blue-700 font-bold text-gray-600"
                className={isActive("/dashboard")}

              >
                Dashboard
              </Link>
              <NavLink
                to={"/history"}
                // className="hover:text-blue-700 font-bold text-gray-600"
                className={isActive("/history")}
              >
                History
              </NavLink>
              <Link
                to={"/settings"}
                // className="hover:text-blue-700 font-bold text-gray-600"
                className={isActive("/settings")}
              >
                Settings
              </Link>
            </div>
            <div
              className=" rounded-full bg-center bg-cover bg-no-repeat size-10"
              style={{
                backgroundImage: "url(https://placehold.co/800@3x.png)",
              }}
              aria-label="Profile avatar"
            ></div>
          </div>
        ) : (
          <div className="flex items-center gap-x-6">
            <Link
              to={"/signup"}
            
            >
              <button className="outline-none border-none bg-blue-500 py-1.5 px-4 rounded-lg text-white">Sign Up</button>
            </Link>

            <Link
              to={"/login"}
            
            >
              <button className="outline-none border border-gray-500 py-1.5 px-4 rounded-lg text-black ">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
