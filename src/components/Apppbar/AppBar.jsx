// src/components/AppBar.jsx
import axiosInstance from "@/Api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import { Button } from "@/components/UI/button";
import { useAuth } from "@/context/useAuth";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { useEffect } from "react";
import Logout from "../Login/Logout";

const AppBar = () => {
  const { user, setUser } = useAuth();
  const cloudinaryBaseUrl = "https://res.cloudinary.com/dolvppffs/";

  const getUserProfile = async () => {
    try {
      const userResponse = await axiosInstance.get("/api/register/");
      if (userResponse.data) {
        const usersWithProfiles = userResponse.data.map((user) => {
          const profilePicture = user.profile_picture
            ? `${cloudinaryBaseUrl}${user.profile_picture}`
            : null;
          return {
            ...user,
            profile_picture: profilePicture,
          };
        });

        if (usersWithProfiles.length > 0) {
          setUser(usersWithProfiles[0]);
        }
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className="h-[70px] p-3 bg-white shadow-md">
      <div className="flex w-full justify-between items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-24 sm:w-28 md:w-48 lg:w-64 p-2 border-2 rounded-md focus:bg-blue-50 outline-none hover:scale-105 transition-transform"
        />

        <div className="flex items-center gap-2">
          <Button className="p-2 group">
            <NotificationsActiveOutlinedIcon className="text-lg group-hover:animate-bell transition-transform duration-300" />
          </Button>

          {user ? (
            <Avatar className="cursor-pointer">
              <AvatarImage src={user.profile_picture || "/default-avatar.png"} alt="Profile" />
              <AvatarFallback>{user.first_name?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>
          ) : (
            <p className="text-sm">Loading...</p>
          )}

          <Logout />
        </div>
      </div>
    </div>
  );
};

export default AppBar;