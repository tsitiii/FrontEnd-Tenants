import { useAuth } from '@/context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/UI/button"
// import { Input } from "@/components/UI/input"

import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Logout = () => {
  const navigate= useNavigate();
    const {Logout} = useAuth()

   const handleLogout = e => {
       e.preventDefault()
        Logout()
        navigate('/login', { replace: true });
    }

  return (
    <>
        <Button className="flex items-center p-1 md:p-2 " onClick={handleLogout}>
            <LogoutOutlinedIcon className="text-tiny  md:text-base lg:text-lg" />
            <span className="hidden sm:inline text-sm md:text-base lg:text-lg">Logout</span>
          </Button>
    </>
  )
}

export default Logout