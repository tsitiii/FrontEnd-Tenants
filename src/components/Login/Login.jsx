import { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import bgl from '../../assets/bgl.jpg';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='flex justify-center h-screen items-center bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${bgl})` }}>
      <div className='bg-gradient-to-tr from-#222831 to-blue-gray-300  
      w-[700px] h-96 rounded-3xl relative p-10'
        style={{
          background: "rgb(1,1,17)",
          background: "linear-gradient(46deg,rgba(0, 0, 0, 0.59) 82%, rgba(1,181,234,1) 82%, #3E4645 82%, #3E4645 93%, rgba(0, 0, 0, 0.59) 94%)"
        }}>

        <div className='flex justify-center'>
          <h2 className='transform rotate-45 absolute top-2 right-10 py-7 text-white'>Login</h2>
        </div>

        <div className='mt-16'>
          <div className='flex border-b-2 border-white w-[80%] mb-6 text-white'>
            <input 
              value={phone}
              placeholder="Phone_Number"
              onChange={(ev) => setPhone(ev.target.value)}
              className='placeholder:font-semibold px-4 py-2 placeholder:text-xl placeholder:text-white 
              focus:outline-none focus:placeholder-transparent focues:scale-105 focus:text-white transition-all duration-300 border-none bg-transparent w-full'
            />
            <span className='text-white font-bold'><FaRegUser size={25} /></span>
          </div>
          <div className='flex border-b-2 border-white w-[80%] mb-6 text-white'>
            <input
              value={password}
              placeholder="Password"
              onChange={(ev) => setPassword(ev.target.value)}
               className='placeholder:font-semibold px-4 py-2 placeholder:text-xl placeholder:text-white 
              focus:outline-none focus:placeholder-transparent focues:scale-105 focus:text-white transition-all duration-300 border-none bg-transparent w-full'
            />
            <span className='text-white font-bold'><RiLockPasswordFill size={25} /></span>
          </div>
          <div className='text-right w-[80%]'>
            <a href="#" className='text-white'>Forget password?</a>
          </div>
          <div className='mt-6 w-[80%]'>
            <input
              className='bg-blue-500 text-white py-2 px-4 rounded-lg w-full cursor-pointer hover:bg-blue-600 transition duration-300'
              type="button"
              value='Log In'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
