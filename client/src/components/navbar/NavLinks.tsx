import { NavLink } from 'react-router-dom';

interface NavLinksProps {
  isAuthenticated: boolean;
  closeMenu: () => void;
}

function NavLinks({ isAuthenticated, closeMenu }: NavLinksProps) {
  return (
    <>
      {/* Navigation links visible only if a user is logged in (Protected Routes) */}
      {
        isAuthenticated && (
          <>
            <NavLink
              to="/dashboard"
              onClick={closeMenu}
              className="hover:text-blue-700 font-bold text-gray-600 transition duration-150 block py-2 md:inline md:p-0"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/history"
              onClick={closeMenu}
              className="hover:text-blue-700 font-bold text-gray-600 transition duration-150 block py-2 md:inline md:p-0"
            >
              History
            </NavLink>
            <NavLink
              to="/settings"
              onClick={closeMenu}
              className="hover:text-blue-700 font-bold text-gray-600 transition duration-150 block py-2 md:inline md:p-0"
            >
              Settings
            </NavLink>
          </>
        )
      }

      {/* Navigation links visible when user is not authenticated (Public Auth Links) */}
      {!isAuthenticated && (
        <>
          <NavLink
            to="/signup"
            onClick={closeMenu}
            className='flex min-w[84px] max-w-[480px] cursor-pointer
            items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-blue-600 
            text-white text-sm font-bold leading-normal tracking-[0.00156m] transition-opacity
            hover:opacity-80'
          >
            <span className='truncate'>Sign Up</span>
          </NavLink>
          <NavLink
            to="/login"
            onClick={closeMenu}
            className='flex min-w[84px] max-w-[480px] cursor-pointer
            items-center justify-center overflow-hidden rounded-lg h-10 px-4 bgr-gray-200/50 
            text-gray-900 text-sm font-bold leading-normal tracking-[0.00156m] transition-colors
            hover:bg-gray-200'
          >
            <span className='truncate'>Log In</span>
          </NavLink>
        </>
      )}
    </>
  );
}

export default NavLinks;