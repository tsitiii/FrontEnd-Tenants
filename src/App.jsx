
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import Register from "./components/register/Register";
import About from "./pages/About/About";
import Calendar from "./pages/Admin_side/Calender/Calendar.jsx";
import AddHouseInfo from "./pages/Admin_side/House_Info/AddHouseInfo";
import HouseInfo from "./pages/Admin_side/House_Info/House_info";
import Demographics_info from "./pages/Admin_side/Piechart/Demographics_info";
import Dashboard from "./pages/Admin_side/dashboard/Dashboard";
import NewsPost from "./pages/Admin_side/news/NewsPost";
import AddUser from "./pages/Admin_side/user/AddUser";
import User from "./pages/Admin_side/user/User";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound/Notfound";
import Service from "./pages/Service/Service";
import UserHome from "./pages/userHome/UserHome";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";


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


        <Route path="/user/userhome" element={
          <ProtectedRoute role={['is_landloard']}><UserHome /></ProtectedRoute>} />

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


        <Route path="/admin/addhouseinfo" element={ <AddHouseInfo />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute role={['is_admin']}><Dashboard /></ProtectedRoute>} />
        

        <Route
            path="/admin/calendar"
            element={
              <ProtectedRoute role={['is_admin', 'is_tenant', 'is_landlord', 'is_witness']}>
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
    </>
  )
}