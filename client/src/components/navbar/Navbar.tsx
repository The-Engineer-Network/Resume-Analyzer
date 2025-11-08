import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { MdAnalytics, MdClose, MdMenu } from 'react-icons/md';
import useAuth from "../../hooks/useAuth"; // to be be created by the person (Habebah) in charge of authentication
import NavLinks from './NavLinks'; 

function Navbar() {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);


  return (
    <nav className="bg-white/80 z-10 border-b-gray-100 border-b shadow-sm backdrop-blur-sm sticky top-0">
      
      {/* Main Navbar Row  */}
      <div className="h-16 w-full flex justify-between items-center py-2 px-4 md:px-8">
        
        {/* Brand Section */}
        <div className="flex items-center gap-x-3">
          <MdAnalytics size={30} />
          <span className="text-xl tracking-[-0.001em] font-bold leading-tight">Resume Analyzer</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-8">
          <div className="flex items-center space-x-4 gap-8">
             <NavLinks isAuthenticated={isAuthenticated} closeMenu={closeMenu} />
          </div>
          
          {isAuthenticated && (
            <NavLink 
              to="/profile"
              aria-label="View profile settings" 
              className="text-center rounded-full bg-center bg-cover bg-no-repeat size-10 border border-gray-500"
              style={{
                backgroundImage: 'url(https://api.dicebear.com/9.x/adventurer/svg?seed=Easton)',
              }}
            />
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-600 hover:text-blue-600"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            
            <span className="text-3xl">
              {isOpen ? <MdClose size={32} /> : <MdMenu size={32} />}
            </span>
          </button>
        </div>
        
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`md:hidden w-full ${
          isOpen ? 'block' : 'hidden'
        } bg-white/90 border-b shadow-lg p-4 transition-all duration-300 ease-in-out`}
      >
       
        <div className="flex flex-col space-y-2 pb-4">
            <NavLinks isAuthenticated={isAuthenticated} closeMenu={closeMenu} />
        </div>

        {/* Mobile Profile Section (Only visible if authenticated) */}
        {isAuthenticated && (
            <div className="flex items-center gap-x-4 pt-4 border-t">
              <div
                className="rounded-full bg-center bg-cover bg-no-repeat size-8"
                style={{
                  backgroundImage: 'url(https://api.dicebear.com/9.x/adventurer/svg?seed=Easton)',
                }}
                aria-label="Profile avatar"
              ></div>
              <NavLink
                to="/profile"
                onClick={closeMenu}
                className="text-gray-600 hover:text-blue-700"
              >
                View Profile
              </NavLink>
            </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;