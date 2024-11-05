import { Button } from "@/components/UI/button"
// import { Input } from "@/components/UI/input"
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/UI/avatar"
import Logout from "../Login/Logout";
import { useAuth } from "@/context/AuthContext";


const AppBar = () => {
  const {user}= useAuth();

  return (
    <div className="h-[70px] p-3">
      <div className="flex w-full justify-between gap-1 sm:gap-2   ">

        <div className="flex gap-2  ">
          <input
            type="text"
            placeholder="Search"
            className="w-24 sm:w-28 md:w-48 lg:w-64 focus:bg-blue-50 p-2 outline-none border-2 rounded-md hover:scale-105 transition-transform"
          />
        
        </div>

        <div className="flex gap-1 md:gap-2">
          <Button className="p-1 md:p-2 group">
            <NotificationsActiveOutlinedIcon 
              className="text-xs  md:text-base lg:text-lg group-hover:animate-bell transition-transform duration-300"
            />
          </Button>

           <div className="cursor-pointer">
           <Avatar>
            <AvatarImage src={user.profilePicture} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
           </div>

           
           {/* logout component implementation */}

             <Logout />
         
        </div>
      </div>
    </div>
  )
}

export default AppBar;
