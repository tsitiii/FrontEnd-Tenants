import { Link } from "react-router-dom";
import HomePage from "../assets/Home-page.png";
import centerImage from "../assets/middle.png";
import service from "../assets/servicebg.png";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { motion } from 'framer-motion'

// import "../custom/Anime.css";

const Home = () => {
  return (
    <>
      <div className="w-full rounded-t-2xl mt-1 scroll-smooth">
        <header
          id="Home"
          className="relative bg-cover bg-center bg-no-repeat w-full h-fit"
          style={{ backgroundImage: `url(${HomePage})` }}
        >
          <div className="">
            <Navbar />
          </div>
          <div className="absolute inset-0 bg-blue-800 opacity-60 z-10"></div>
          <div className="relative flex flex-col lg:flex-row sm:ml-10 z-20">
            <div className="relative z-10 p-8 rounded-lg ml-6 w-full lg:w-[500px]">
              <motion.h1 initial={{opacity:0, y:40}}
              animate={{opacity:1, y:0}}
              transition={{delay:0.2 ,duration:.5}}
              viewport={{ once:true, amount:.5}}

               className="text-4xl md:text-6xl font-bold text-white text-left">
                ETHIOPIA&apos;S RENTAL AGREEMENT SYSTEM
              </motion.h1>
              <motion.div
              initial={{opacity:0, y:40}}
              animate={{opacity:1, y:0}}
              transition={{delay:0.4 ,duration:.5}}
              viewport={{ once:true, amount:.5}}
              
               className="w-full md:w-[481px] text-left mt-10">
                <p className="mt-4 text-white p-0">
                  Ethiopia's trusted platform for secure and efficient rentals
                  system that gives an access for both tenures and tenants a
                  place for rental agreements electronically.
                </p>
              </motion.div>
              <motion.div
              initial={{opacity:0, y:40}}
              animate={{opacity:1, y:0}}
              transition={{delay:0.6 ,duration:.5}}
              viewport={{ once:true, amount:.5}}
               className="mt-6 py-10 m-2 flex flex-col sm:flex-row gap-4 sm:gap-10 w-full justify-center items-center">
                <Link to="/register">
                  <button
                    type="button"
                    className="inline-block w-48 rounded-full bg-[#031E3A] text-white px-6 pb-2 pt-2.5 text-base font-medium uppercase leading-normal shadow-light-3 border border-black h-14 transition duration-150 ease-in-out hover:scale-105 hover:shadow-light-blue-900 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong -ml-10 sm:ml-0 dark:active:shadow-dark-strong"
                  >
                    Register
                  </button>
                </Link>
                <Link to="/login">
                  <button
                    type="button"
                    className="inline-block w-48 rounded-full bg-transparent text-white px-6 pb-2 pt-2.5 text-base -ml-10 sm:ml-0 font-medium uppercase leading-normal shadow-light-3 border border-black h-12 transition duration-150 ease-in-out hover:scale-105 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  >
                    Login
                  </button>
                </Link>
              </motion.div>
            </div>
            <div className="bg-opacity-95 opacity-30 mt-8 lg:mt-0 hidden md:block">
              <img src={centerImage} alt="Center" className="w-auto h-auto" />
            </div>
          </div>
        </header>

        {/* About us section */}
        <motion.section
        
        initial={{opacity:0, y:40}}
        whileInView={{opacity:1,y:0, transition: {delay:0.2,  duration:0.5}}}
        viewport={{ once:true, amount:.5}}
         className="h-auto bg-blue-gray-100 pt-4 pb-28" id="About">
          <div className="flex w-full justify-center px-4 sm:px-0">
            <div className="max-w-3xl">
              <h2 className="font-bold text-3xl sm:text-4xl md:text-6xl drop-shadow-lg text-[#0B3055] text-center p-4 mt-3">
                ABOUT US
              </h2>
              <div className="text-center mt-8 sm:mt-8">
                <p className="text-md md:text-lg md:w-[700px]">
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
        </motion.section>

        {/* Services section */}
        <section
          
          className="relative bg-cover bg-center bg-no-repeat h-auto text-white pt-8 pb-14"
          style={{ backgroundImage: `url(${service})` }}
        >
          <div className="absolute inset-0 bg-blue-800 opacity-55 z-10"></div>
          <div className="relative z-20 rounded-lg px-4 sm:px-0">
            <h2 className="font-bold text-4xl sm:text-6xl md:text-8xl drop-shadow-lg text-[#0B3055] text-center p-2 mt-3">
              OUR SERVICES
            </h2>
            <div className="flex flex-col lg:flex-row h-full w-full justify-around mt-8 lg:mt-16 gap-8 lg:gap-0">
              <div className="flex justify-center lg:justify-start">
                <motion.div initial={{opacity:0, y:40}}
        whileInView={{opacity:1,y:0, transition: {delay:0.4,  duration:0.5}}}
        viewport={{ once:true, amount:.5}}
                 className="text-center lg:text-left">
                  <div className="border-l-2 border-white p-2 md:w-auto md:ml-24 inline-block">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                      TENANTS
                    </h2>
                  </div>
                  <div className="w-[325px] sm:w-[373px] md:w-[460px] p-6 md:p-10 text-center rounded-[40px] text-white bg-blue-900 mt-4 hover:scale-105 hover:border-2 border-white">
                    <p className="text-base sm:text-lg md:text-xl">
                      Rental Agreement streamlines the process for tenants by
                      offering a user-friendly web application. Browse a diverse
                      range of rental listings, from cozy apartments to spacious
                      family homes, and find one that perfectly suits your
                      needs. Submit applications electronically, eliminating the
                      need for piles of paperwork, and review and sign secure
                      pre-defined leases drafted by legal professionals.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="flex justify-center lg:justify-start">
                <motion.div  initial={{opacity:0, y:40}}
        whileInView={{opacity:1,y:0, transition: {delay:0.4,  duration:0.5}}}
        viewport={{ once:true, amount:.5}}
                 className="text-center lg:text-left">
                  <div className="border-l-2 border-white p-2 md:w-auto md:ml-24 inline-block">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                      TENURES
                    </h2>
                  </div>
                  <div className="w-[325px] sm:w-[373px] md:w-[460px] p-6 md:p-10 text-center rounded-[40px] text-white bg-blue-900 mt-4 hover:scale-105 hover:border-2 border-white">
                    <p className="text-base sm:text-lg md:text-xl">
                      Rental Agreement simplifies the process for property
                      owners, offering a platform designed for your success.
                      Utilize pre-defined lease agreements with electronic
                      signatures for secure and legally sound contracts. Access
                      important tenant information, including rental history and
                      communication records (subject to privacy regulations),
                      all within a centralized platform.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* footer section */}
        <section className="sticky w-full h-auto" id="Contact">
          <div className="bg-blue-900 h-[450px]">
            <Footer />
          </div>
          <div className="bg-[#031E3A] h-10"></div>
        </section>
      </div>
    </>
  );
};

export default Home;
