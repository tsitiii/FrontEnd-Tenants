import bgl from '../../assets/bgl.jpg'
import Navbar from '../../components/Navbar/Navbar'
import Mis from '../../assets/Mission.jpg'
import Footer from '../../components/Footer/Footer'
import vis from '../../assets/Vission.jpg'
import values from "../../assets/values.jpg"
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
            <h2 className="text-blue-700 font-bold text-5xl sm:text-8xl"
                style={{
                  background: 'linear-gradient(90deg, blue, white)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>About us</h2>
          </div>
          <div className="w-full flex justify-center items-center">
          <p className="text-center text-lg sm:text-xl text-white md:w-[900px]">
      
                  Rental Agreement is your trusted Ethiopian platform for a
                  secure and streamlined rental experience. We empower both
                  renters and property owners by providing a user-friendly web
                  application that simplifies the entire process. It encompasses
                  the functionalities
                  <span className="1">
                    {" "}
                    and features necessary to register, manage, and approve
                    tenure and tenant information, property details, and
                    associated responsibilities within Ethiopia.
                  </span>
                
    </p>
          </div>
        </div>
      </div>

      
    </div>
      <div className="flex flex-col sm:flex-row justify-center items-center p-6 sm:p-14">
  <div className="w-full sm:w-1/2 p-4">
    <h2 className="font-bold text-4xl sm:text-6xl text-blue-900 text-center mb-4">MISSION</h2>
    <p className="text-center text-lg sm:text-xl text-blue-800">
      aims to simplify and secure the rental information management in Ethiopia, fostering trust and transparency between renters and property owners.
    </p>
  </div>
  <div className="w-full sm:w-1/2 p-4 flex justify-center ">
    <img src={Mis} alt="Mission" className="w-full max-w-md h-auto rounded-lg shadow-lg" />
  </div>
</div>

<div className="flex flex-col sm:flex-row justify-center items-center p-6 sm:p-14"
style={{ background: 'rgb(74,74,235)',
  background: 'linear-gradient(46deg, rgba(74,74,235,1) 0%, rgba(11,11,213,1) 24%, rgba(231,243,245,1) 46%, rgba(4,1,234,1) 74%, rgba(9,9,121,1) 84%, rgba(192,222,228,1) 93%, rgba(68,69,219,1) 100%)'
  }}>
  
  <div className="w-full sm:w-1/2 p-4 flex justify-center">
    <img src={vis} alt="Vission" className="w-full max-w-md h-auto rounded-lg shadow-lg" />
  </div>

  <div className="w-full sm:w-1/2 p-4">
    <h2 className="font-bold text-4xl sm:text-6xl text-blue-900 text-center mb-4">VISSION</h2>
    <p className="text-center text-lg sm:text-xl text-white">
    To be the leading platform in Ethiopia for transparent and efficient rental agreements, empowering renters and property owners through innovative and user-friendly solutions.
    </p>
  </div>
</div>
<div className="flex flex-col sm:flex-row justify-center items-center p-6 sm:p-14">
  <div className="w-full sm:w-1/2 p-4">
    <h2 className="font-bold text-4xl sm:text-6xl text-blue-900 text-center mb-4">CORE VALUES</h2>
       <ol className="list-decimal list-inside pl-6 text-blue-900 font-semibold text-base sm:text-lg">
        <li>Transparency</li>
        <li>Efficiency</li>
        <li>Innovation</li>
        <li>Empowerment</li>
        <li>Security</li>
       </ol>
  </div>
  <div className="w-full sm:w-1/2 p-4 flex justify-center">
    <img src={values} alt="Core values" className="w-full max-w-md h-auto rounded-lg shadow-lg" />
  </div>
</div>
     <div>
      <Footer/>
     </div>
    </>
  )
}

export default About
