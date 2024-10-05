import { RouterProvider} from 'react-router-dom';
import router from './router';
// import User from './pages/Admin_side/user/User'
// import Adduser from './pages/Admin_side/user/AddUser';
// import { AddBoxOutlined } from '@mui/icons-material';
// import SideBar from './components/Sidebar//Sidebar.jsx'
// import Dashboard from './pages/Admin_side/dashboard/Dashboard.jsx'
// import House_info from './pages/Admin_side/House_Info/House_info';
// import AddHouseInfo from './pages/Admin_side/House_Info/AddHouseInfo';

// import Demographics_info from './pages/Admin_side/Piechart/Demographics_info';

export default function App() {
  return (
   <>
    {/* <SideBar />
    <h1>Dashboard</h1> */}
       {/* <Dashboard/> */}
       {/* <House_info/> */}
       {/* <AddHouseInfo/> */}
      <RouterProvider router={router} /> 
      {/* <User/>  */}
      {/* <Adduser/> */}
      {/* <Demographics_info/> */}

   </>
  )
}