import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';


const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className='h-full'>
      <Sidebar
        //  rootStyles={{ border: '1px solid #062482', boxShadow:"5px 5px 20px black ", }}
        className="h-full"
        backgroundColor='#2a33a8'
        collapsed={isCollapsed}
        transitionDuration={500}
        rtl={false}
        
      >
        <h2 className='text-white text-center text-2xl'>
          TMS
        </h2>
        <Menu
          menuItemStyles={{
            button: ({ active }) => {
              return {
                display: 'flex', // Ensure proper alignment of icon and text
                alignItems: 'center',
                borderRadius: '12px', // Curved borders for each menu item
                transition: 'background-color 0.3s ease', // Smooth transition
                '&:hover': {
                  backgroundColor: '#4148b0', // Hover background color
                  color: 'yellow', // Keep text color white on hover

                },
              };
          }}}>

          <MenuItem icon={<HomeOutlinedIcon />}> <NavLink to='/admin/dashboard'
         
          className='text-white font-bold no-underline md:text-1xl'  exact
           >
          Dashboard
          </NavLink>
           </MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>
           <NavLink to='/admin/user'  exact
          // className={({ isActive }) =>
          //   `${isActive ? "text-blue-400 font-bold" : "text-blue-600"}text-white font-bold no-underline md:text-2xl`
          // } 
          className='text-white font-bold no-underline md:text-1xl'  
             >
          User
          </NavLink> </MenuItem>
          <MenuItem icon={<HomeWorkOutlinedIcon />}><NavLink to='/admin/houseinfo'  exact
        // className={({ isActive }) =>
        //   `${isActive ? "text-blue-400 font-bold" : "text-blue-600"}text-white font-bold no-underline md:text-2xl`
        // }  
        className='text-white font-bold no-underline md:text-1xl'  
        >
          House Info
          </NavLink> </MenuItem>
        
          <MenuItem icon={<CalendarTodayOutlinedIcon />}> 
          <NavLink to='/admin/calendar'  exact
        //  className={({ isActive }) =>
        //   `${isActive ? "text-blue-400 font-bold" : "text-blue-600"}text-white font-bold no-underline md:text-2xl`
        // } 
        className='text-white font-bold no-underline md:text-1xl'  
         >
          Calendar
          </NavLink>
          </MenuItem>
          <MenuItem icon={<LockOpenOutlinedIcon />}  >
            <NavLink to='/admin/calendar'  exact
        //  className={({ isActive }) =>
        //   `${isActive ? "text-blue-400 font-bold" : "text-blue-600"}text-white font-bold no-underline md:text-2xl`
        // } 
        className='text-white font-bold no-underline md:text-1xl'  
         >
          Reset Password
          </NavLink>
          </MenuItem> 

        </Menu>
      </Sidebar>
    </div>
  )
}

export default SideBar