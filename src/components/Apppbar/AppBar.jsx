import { Button } from "@/components/UI/button"
// import { Input } from "@/components/UI/input"
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/UI/avatar"


const AppBar = () => {
  return (
    <div className="">
      <div className="flex justify-between px-4 py-2">

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="w-32 md:w-48 lg:w-64 focus:bg-blue-50 p-2 outline-none border-2 rounded-md hover:scale-105 transition-transform"
          />
          <Button type="submit" className="p-1 md:p-2">
            <SearchOutlinedIcon className="text-sm md:text-base lg:text-lg" />
          </Button>
        </div>

        <div className="flex gap-1 md:gap-2">
          <Button className="p-1 md:p-2 group">
            <NotificationsActiveOutlinedIcon
              className="text-sm md:text-base lg:text-lg group-hover:animate-bell transition-transform duration-300"
            />
          </Button>

           <div className="cursor-pointer">
           <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
           </div>

          <Button className="flex items-center p-1 md:p-2">
            <LogoutOutlinedIcon className="text-sm md:text-base lg:text-lg" />
            <span className="hidden md:inline text-sm md:text-base lg:text-lg">Logout</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AppBar;
