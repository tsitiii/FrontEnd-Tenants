// import { RouterProvider} from 'react-router-dom';
// import router from './router';
// import User from './pages/Admin_side/user/User'
// import Adduser from './pages/Admin_side/user/AddUser';
// import { AddBoxOutlined } from '@mui/icons-material';
// import SideBar from './components/Sidebar//Sidebar.jsx'
// import Dashboard from './pages/Admin_side/dashboard/Dashboard.jsx'
// import House_info from './pages/Admin_side/House_Info/House_info';
// import AddHouseInfo from './pages/Admin_side/House_Info/AddHouseInfo';

// import Demographics_info from './pages/Admin_side/Piechart/Demographics_info';


import Home from "./pages/Home";
import Login from "./components/Login/Login";
import Register from "./components/register/Register";
import Notfound from "./pages/Notfound/Notfound";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";
import User from "./pages/Admin_side/user/User";
import AddUser from "./pages/Admin_side/user/AddUser";
import HouseInfo from "./pages/Admin_side/House_Info/House_info";
import AddHouseInfo from "./pages/Admin_side/House_Info/AddHouseInfo";
import Dashboard from "./pages/Admin_side/dashboard/Dashboard";
import Calendar from "./pages/Admin_side/Calender/Calendar.jsx";
import Demographics_info from "./pages/Admin_side/Piechart/Demographics_info";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
import UserHome from "./pages/userHome/UserHome";
import Logout from "./components/Login/Logout";
import { Route, Routes } from "react-router-dom";
import NewsPost from "./pages/Admin_side/news/NewsPost";


export default function App() {
  return (
    <>
      {/* <SideBar />
    <h1>Dashboard</h1> */}
      {/* <Dashboard/> */}
      {/* <House_info/> */}
      {/* <AddHouseInfo/> */}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Notfound />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/unauthorized" element={<Unauthorized />} /> */}


        <Route
          path="/admin/adduser"
          element={
            <ProtectedRoute role={['is_admin']}>
              <AddUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/user"
          element={
            <ProtectedRoute role={['is_admin']}>
              <User />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/admin/userdetail" element={<UserDetail />} /> */}
        <Route path="/user/userhome" element={
          <ProtectedRoute role={['is_landloard', 'is_tenant']}><UserHome /></ProtectedRoute>} />

        <Route
          path="/admin/Houseinfo"
          element={
            <ProtectedRoute role={['is_admin']}>
              <HouseInfo />
            </ProtectedRoute>
          }
        />

<Route
          path="/news"
          element={
            <ProtectedRoute role={['is_admin']}>
              <NewsPost />
            </ProtectedRoute>
          }
        />
        <Route path="/admin/addhouseinfo" element={

          <AddHouseInfo />} />

        <Route path="/admin/dashboard" element={<ProtectedRoute role={['is_admin']}><Dashboard /></ProtectedRoute>} />
        <Route
          path="/admin/calendar"
          element={
            <ProtectedRoute role={['is_admin']}>
              <Calendar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/chart"
          element={
            <ProtectedRoute role={['is_admin']}>
              <Demographics_info />
            </ProtectedRoute>
          }
        />

      </Routes>


      {/* <RouterProvider router={router} />  */}

      {/* <User/>  */}
      {/* <Adduser/> */}
      {/* <Demographics_info/> */}

    </>
  )
}