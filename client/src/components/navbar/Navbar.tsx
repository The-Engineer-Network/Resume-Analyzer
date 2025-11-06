import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className=" bg-white/80 z-10 border-b-gray-100 border-b shadow-sm backdrop-blur-sm">
      <div className="h-16 w-full flex justify-between items-center py-2 px-4 border-b-gray-400" >
      <div className="flex items-center gap-x-4">
        <span className="material-symbols-outlined text-blue-600 text-3xl">analytics</span>
        <span className='text-xl tracking-[-0.001em] font-bold leading-tight'>Resume Analyzer</span> 
        </div>

        <div className="flex items-center gap-x-8">
          <div className="flex items-center space-x-4 gap-8">
          <NavLink to='/dashboard' className="hover:text-blue-700 font-bold text-gray-600">Dashboard</NavLink>
          <NavLink to='/history'  className="hover:text-blue-700 font-bold text-gray-600" >History</NavLink>
          <NavLink to='/settings'  className="hover:text-blue-700 font-bold text-gray-600">Settings</NavLink>
          </div>
          <div className=" rounded-full bg-center bg-cover bg-no-repeat size-10" 
          style={{backgroundImage:'url(https://placehold.co/800@3x.png)'}} aria-label="Profile avatar"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
