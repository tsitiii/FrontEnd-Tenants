import { useState, useRef, useEffect } from 'react';
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import bgl from '../../assets/bgl.jpg';
import { useAuth } from '@/context/AuthContext';

const Login = () => {
  const {Login} = useAuth();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const userRef = useRef();
  const errRef = useRef();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      
      await Login(phone, password);
      console.log(phone, password)
     
      setSuccess(true);
    } catch(err) {
      setError('Failed to log in');
    }
    setLoading(false);
    
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setError('');
  }, [phone, password]);




  return (
    <section className='flex justify-center h-screen items-center bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${bgl})` }}>
      <div className='bg-gradient-to-tr from-custom-dark to-blue-gray-300  
      w-[700px] h-96 rounded-3xl relative p-10'
        style={{
          background: "rgb(1,1,17)",
          background: "linear-gradient(46deg,rgba(0, 0, 0, 0.59) 82%, rgba(1,181,234,1) 82%, #3E4645 82%, #3E4645 93%, rgba(0, 0, 0, 0.59) 94%)"
        }}>

        <div className='flex justify-center'>
          <h2 className='transform rotate-45 absolute top-2 right-10 py-7 text-white'>Login</h2>
        </div>

        <div className='mt-16'>
          <form action="" onSubmit={handleSubmit}>
          <div className='flex border-b-2 border-white w-[80%] mb-6 text-white'>
            <input 
              type='text'
              value={phone}
              ref={userRef}
              autoComplete='off'
              required
              placeholder="Phone_Number"
              onChange={(ev) => setPhone(ev.target.value)}
              className='placeholder:font-semibold px-4 py-2 placeholder:text-xl placeholder:text-white 
              focus:outline-none focus:placeholder-transparent focues:scale-105 focus:text-white transition-all duration-300 border-none bg-transparent w-full'
            />
            <span className='text-white font-bold'><FaRegUser size={25} /></span>
          </div>
          <div className='flex border-b-2 border-white w-[80%] mb-6 text-white'>
            <input
            type='password'
              value={password}
              ref={userRef}
              placeholder="Password"
              onChange={(ev) => setPassword(ev.target.value)}
               className='placeholder:font-semibold px-4 py-2 placeholder:text-xl placeholder:text-white 
              focus:outline-none focus:placeholder-transparent focues:scale-105 focus:text-white transition-all duration-300 border-none bg-transparent w-full'
            />
            <span className='text-white font-bold'><RiLockPasswordFill size={25} /></span>
          </div>
          <p ref={errRef} className={error ? "text-red-900 text-xl font-bold  ": "absolute -l-[9999px"} aria-live="assertive">{error} </p>

          <div className='text-right w-[80%]'>
            
            <a href="#" className='text-white'>Forget password?</a>
          </div>
          <div className='mt-6 mb-5 w-[80%]'>
            <input
              className='bg-blue-500 text-white py-2 px-4  rounded-lg w-full cursor-pointer hover:bg-blue-600 transition duration-300'
              type="submit"
              value='Log In'
            />
          </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
