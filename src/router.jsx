import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
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

  // You can do this:
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/*" element={<Notfound />} />
         <Route path="/about" element={<About />} />
         <Route path="/service" element={<Service />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/admin/adduser" element={<AddUser />} />
         <Route path="/admin/user" element={<User />} />
         <Route path="/admin/houseinfo" element={<HouseInfo />} />
         <Route path="/admin/addhouseinfo" element={<AddHouseInfo />} />
         <Route path="/admin/dashboard" element={<Dashboard />} />
         <Route path="/admin/calendar" element={<Calendar />} />
         <Route path="/admin/chart" element={<Demographics_info />} />


         
      </Route>
    )
  );

  export default router;