import bgl from '../../assets/bgl.jpg'
import Navbar from '../../components/Navbar/Navbar'
import Mis from '../../assets/Mission.jpg'
import Footer from '../../components/Footer/Footer'
import vis from '../../assets/Vission.jpg'
import values from "../../assets/values.jpg"
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
    <div className="relative bg-no-repeat h-fit bg-cover bg-center pb-24 rounded-b-xl" style={{ backgroundImage: `url(${bgl})` }}>
      <div>
        <Navbar/>
      </div>
      <div className="absolute inset-0 bg-blue-900 opacity-60"></div> 
      <div className="relative">
        <div className="w-full h-96 pt-2 md:pt-12 ">
          <div className="flex justify-center items-center mb-10 py-6">
            <motion.div  initial={{opacity:0, y:40}}
              animate={{opacity:1, y:0}}
              transition={{delay:0.2 ,duration:.5}}
              viewport={{ once:true, amount:.5}}
               className="text-blue-700 font-bold text-5xl sm:text-8xl"
                style={{
                  background: 'linear-gradient(90deg, blue, white)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>About us</motion.div>
          </div>
          <div  
               className="w-full flex justify-center items-center">
          <p className="text-center text-lg sm:text-xl text-white md:w-[900px]">
      
          Rental Agreement is Ethiopia&apos;s trusted platform for a secure and streamlined rental experience.
           We simplify the process for both renters and property owners,
           offering essential tools to manage and approve property and tenant information with ease.
                
    </p>
          </div>
        </div>
      </div>

      
    </div>

    <div className='bg-[#f6f6f6]'>
     <div
      className="flex flex-col sm:flex-row justify-center items-center p-6 sm:p-14">
  <motion.div  initial={{opacity:0, x:-50}}
              whileInView={{opacity:1,x:0, transition: {duration:0.4}}}
              viewport={{ once:true, amount:.5}}
   className="w-full sm:w-1/2 p-4">
    <h2 className="font-bold text-4xl sm:text-6xl text-blue-900 text-center mb-4">MISSION</h2>
    <p className="text-center text-lg sm:text-xl text-blue-800">
      aims to simplify and secure the rental information management in Ethiopia, fostering trust and transparency between renters and property owners.
    </p>
  </motion.div>
  <motion.div   initial={{opacity:0, x:50}}
              whileInView={{opacity:1,x:0, transition: {delay:0.1,  duration:0.4}}}
              viewport={{ once:true, amount:.5}}
               className="w-full sm:w-1/2 p-4 flex justify-center ">
    <img src={Mis} alt="Mission" className="w-full max-w-md h-auto rounded-lg shadow-lg" />
  </motion.div>
</div>



<motion.div initial={{opacity:0, x:40}}
            whileInView={{opacity:1,x:0, transition: {delay:0.1,  duration:0.5}}}
              viewport={{ margin:"-100px", once:true, amount:.5}}
 className="flex flex-col sm:flex-row justify-center items-center p-6 sm:p-14">
  
  <div className="w-full sm:w-1/2 p-4 flex justify-center">
    <img src={vis} alt="Vission" className="w-full max-w-md h-auto rounded-lg shadow-lg" />
  </div>

  <div className="w-full sm:w-1/2 p-4">
    <h2 className="font-bold text-4xl sm:text-6xl text-blue-900 text-center mb-4">VISSION</h2>
    <p className="text-center text-lg sm:text-xl">
    To be the leading platform in Ethiopia for transparent and efficient rental agreements, empowering renters and property owners through innovative and user-friendly solutions.
    </p>
  </div>


</motion.div>
<div

className="flex flex-col sm:flex-row justify-center items-center p-6 sm:p-14">
  <motion.div  initial={{opacity:0, x:-40}}
whileInView={{opacity:1,x:0, transition: {delay:0.2,  duration:0.5}}}
 viewport={{ once:true, amount:.5}} 
   className="w-full sm:w-1/2 p-4">
    <h2 className="font-bold text-4xl sm:text-6xl text-blue-900 text-center mb-4">CORE VALUES</h2>
       <ol className="list-decimal list-inside pl-6 text-blue-900 font-semibold text-base sm:text-lg">
        <li>Transparency</li>
        <li>Efficiency</li>
        <li>Innovation</li>
        <li>Empowerment</li>
        <li>Security</li>
       </ol>
  </motion.div>
  <motion.div  initial={{opacity:0, x:40}}
 whileInView={{opacity:1,x:0, transition: {delay:0.2,  duration:0.5}}}
 viewport={{ once:true, amount:.5}} 
   className="w-full sm:w-1/2 p-4 flex justify-center">
    <img src={values} alt="Core values" className="w-full max-w-md h-auto rounded-lg shadow-lg" />
  </motion.div>
</div>
     </div>
     <div>
      <Footer/>
     </div>
    </>
  )
}

export default About
