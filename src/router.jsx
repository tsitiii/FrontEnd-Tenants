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
       
      </Route>
    )
  );

  export default router;