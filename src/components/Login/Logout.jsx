import { Button } from "@/components/UI/button";
import { useAuth } from "@/context/useAuth";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Logout = () => {
  const { logout } = useAuth(); // Use lowercase "logout"

  const handleLogout = (e) => {
    e.preventDefault();
    logout(); // Call the logout function from useAuth()
  };

  return (
    <Button className="flex items-center p-1 md:p-2" onClick={handleLogout}>
      <LogoutOutlinedIcon className="text-tiny md:text-base lg:text-lg" />
      <span className="hidden sm:inline text-sm md:text-base lg:text-lg">
        Logout
      </span>
    </Button>
  );
};

export default Logout;
