import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';



function Layout() {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50 text-gray-800'>
      <Navbar/>
        <main className='flex-1 p-4 md:p-8 lg:p-12'>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout
