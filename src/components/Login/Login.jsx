import { useEffect, useRef, useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import bgl from '../../assets/bgl.jpg';
// import { useAuth } from '@/context/AuthContext';
import { useAuth } from "@/context/useAuth";


const Login = () => {
  const { login } = useAuth();

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
      await login(phone, password);
      console.log("Logging in with:", phone, password);
      setSuccess(true);
    } catch (err) {
      setError('Failed to log in. Please check your credentials.');
      console.error(err);
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
    <section className='flex justify-center h-screen items-center bg-no-repeat bg-cover bg-center' 
      style={{ backgroundImage: `url(${bgl})` }}>
      
      <div className='bg-gradient-to-tr from-custom-dark to-blue-gray-300  
        w-[700px] h-96 rounded-3xl relative p-10'
        style={{ background: "rgb(1,1,17)" }}>
        
        <div className='flex justify-center'>
          <h2 className='transform rotate-45 absolute top-2 right-10 py-7 text-white'>Login</h2>
        </div>

        <div className='mt-16'>
          <form onSubmit={handleSubmit}>
            
            {/* Phone Number Field */}
            <div className='flex border-b-2 border-white w-[80%] mb-6 text-white'>
              <input 
                type='text'
                value={phone}
                ref={userRef}
                autoComplete='off'
                required
                placeholder="Phone Number"
                onChange={(ev) => setPhone(ev.target.value)}
                className='placeholder:font-semibold px-4 py-2 placeholder:text-xl placeholder:text-white 
                focus:outline-none focus:placeholder-transparent focus:scale-105 focus:text-white transition-all duration-300 border-none bg-transparent w-full'
              />
              <span className='text-white font-bold'><FaRegUser size={25} /></span>
            </div>

            {/* Password Field */}
            <div className='flex border-b-2 border-white w-[80%] mb-6 text-white'>
              <input
                type='password'
                value={password}
                required
                placeholder="Password"
                onChange={(ev) => setPassword(ev.target.value)}
                className='placeholder:font-semibold px-4 py-2 placeholder:text-xl placeholder:text-white 
                focus:outline-none focus:placeholder-transparent focus:scale-105 focus:text-white transition-all duration-300 border-none bg-transparent w-full'
              />
              <span className='text-white font-bold'><RiLockPasswordFill size={25} /></span>
            </div>

            {/* Error Message */}
            {error && (
              <p ref={errRef} className="text-red-500 text-xl font-bold text-center mb-3" aria-live="assertive">
                {error}
              </p>
            )}

            {/* Forgot Password Link */}
            <div className='text-right w-[80%]'>
              <a href="#" className='text-white'>Forgot password?</a>
            </div>

            {/* Submit Button */}
            <div className='mt-6 mb-5 w-[80%]'>
            {success && (
      <p className="text-green-500 text-xl font-bold text-center mb-3">
          Login successful! Redirecting...
        </p>
      )}

              <button
                className={`bg-blue-500 text-white py-2 px-4 rounded-lg w-full transition duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                }`}
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log In"}
              </button>

            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
