import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { Newspaper } from "lucide-react";
import { useEffect, useState } from 'react';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';


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
            button: () => {
              return {
                display: 'flex', 
                alignItems: 'center',
                borderRadius: '12px', 
                transition: 'background-color 0.3s ease', 
                '&:hover': {
                  backgroundColor: '#4148b0', 
                  color: 'yellow', 

                },
              };
          }}}>

          <MenuItem icon={<HomeOutlinedIcon />}> <NavLink to='/admin/dashboard'
          className='text-white font-bold no-underline md:text-1xl'  >
          Dashboard
          </NavLink>
           </MenuItem>

          <MenuItem icon={<PeopleOutlinedIcon />}>
           <NavLink to='/admin/user'
          className='text-white font-bold no-underline md:text-1xl'  >
          User
          </NavLink> </MenuItem>


          <MenuItem icon={<HomeWorkOutlinedIcon />}><NavLink to='/admin/houseinfo'
          className='text-white font-bold no-underline md:text-1xl'  >
          House Info
          </NavLink> </MenuItem>


          <MenuItem icon={<CalendarTodayOutlinedIcon />}> 
          <NavLink to='/admin/calendar'
            className='text-white font-bold no-underline md:text-1xl'  >
            Calendar </NavLink>
          </MenuItem>


          <MenuItem icon={<Newspaper size={20} />}>
              <NavLink to='/news'
              className='text-white font-bold no-underline md:text-1xl' > 
              News </NavLink>
          </MenuItem>


          <MenuItem icon={<LockOpenOutlinedIcon />}  >
            <NavLink to='/admin/calendar'
              className='text-white font-bold no-underline md:text-1xl'  >
              Reset Password
          </NavLink>
          </MenuItem> 

        </Menu>
      </Sidebar>
    </div>
  )
}

export default SideBar