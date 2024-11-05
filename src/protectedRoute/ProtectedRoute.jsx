import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';
// import { Navigate } from 'react-router-dom';

import {  useNavigate} from 'react-router-dom';


const ProtectedRoute = ({children, role }) => {

    const user= useAuth();
    console.log("user detail from protected route", user)
    const navigate= useNavigate();

    useEffect(()=>{
        if (!user){
            navigate('/login', {replace:true})
          }
          
          if ( role && !role.includes(user.role)){
              navigate('/', {replace:true})
          }
          
    }, [navigate, user, role])
    

  return children;
  
}

export default ProtectedRoute