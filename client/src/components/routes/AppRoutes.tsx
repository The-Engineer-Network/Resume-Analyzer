import '../../index.css'
import { Route, createRoutesFromElements } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';
import Settings from "../../pages/Settings";
import History from '../../pages/History';
import Login from '../../pages/auth/Login';
import Register from '../../pages/auth/Register';

const AppRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
       {/* Main layout routes (with Navbar) */}
        <Route path='/' element={<App />}> 
          <Route index element={<Home />} /> 
          <Route path='dashboard' element={<Dashboard />} /> {/* Path is relative: /dashboard */}
          <Route path='history' element={<History />} /> 
          <Route path='settings' element={<Settings />} /> 
        </Route>
        
         {/* Auth Routes  */}
         <Route path='/login' element={<Login />} />
         <Route path='/register' element={<Register />} />
      </>

    )
  )
  return (
    router
  );
};

export default AppRoutes;