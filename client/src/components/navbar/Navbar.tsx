import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = (
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
  );

  return (
    <nav className="bg-white/80 z-10 border-b-gray-100 border-b shadow-sm backdrop-blur-sm sticky top-0">
      
      {/* Main Navbar Row (The H-16 bar) */}
      <div className="h-16 w-full flex justify-between items-center py-2 px-4 md:px-8">
        
        {/* Brand Section */}
        <div className="flex items-center gap-x-3">
          <span className="material-symbols-outlined text-blue-600 text-3xl">analytics</span>
          <span className="text-xl tracking-[-0.001em] font-bold leading-tight">Resume Analyzer</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-8">
          <div className="flex items-center space-x-4 gap-8">{navLinks}</div>
          <NavLink 
            to="/profile"
            className="text-center rounded-full bg-center bg-cover bg-no-repeat size-10 border border-gray-500"
            style={{
              backgroundImage: 'url(https://api.dicebear.com/9.x/adventurer/svg?seed=Easton)',
            }}
            aria-label="Profile avatar"
            role="img"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-600 hover:text-blue-600"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
        
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        id="mobile-menu"
        // Key Fix: Removed 'absolute' and added 'w-full' for correct vertical flow
        className={`md:hidden w-full ${
          isOpen ? 'block' : 'hidden'
        } bg-white/90 border-b shadow-lg p-4 transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col space-y-2 pb-4">{navLinks}</div>

        {/* Mobile Profile Section */}
        <div className="flex items-center gap-x-4 pt-4 border-t">
          <div
            className="rounded-full bg-center bg-cover bg-no-repeat size-8"
            style={{
              backgroundImage: 'url(https://api.dicebear.com/9.x/adventurer/svg?seed=Easton)',
            }}
            aria-label="Profile avatar"
            role="img"
          ></div>
          <NavLink
            to="/profile"
            onClick={closeMenu}
            className="text-gray-600 hover:text-blue-700"
          >
            View Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;