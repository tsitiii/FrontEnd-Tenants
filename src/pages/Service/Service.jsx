import services from '../../assets/service-transformed.jpeg'
import Navbar from '../../components/Navbar/Navbar'
import reg from '../../assets/reg.png'

import Lottie from 'lottie-react'
import judgeHammer from '../../assets/Animation - 1723984272078.json'
import { useRef } from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";
import Content from '../../components/Readmore.jsx/Readmore'
import { MdOutlineQuestionMark } from "react-icons/md";
import ServiceItem from '../../components/Serviceitem/ServiceItem'
import GettingStarted from '../../components/Serviceitem/GettingStarted'
import Footer from '../../components/Footer/Footer'
import { motion } from 'framer-motion'
import { GrSecure } from "react-icons/gr";

const serviceData = [
  {
    icon: <GrSecure size={40} />,
    headline: 'Secure Your Rental Agreements',
    paragraph: 'We make it easy for landlords and tenants to create, verify, and register their rental agreements. Ensure your contracts are legally binding, following the latest regulations, and avoid future disputes with our guided registration process.',
  },
  {
    icon: '📚',
    headline: 'Stay Legally Compliant',
    paragraph: 'Navigate the complexities of the new rental laws with confidence. Our detailed guides help you understand and comply with legal requirements, making sure your rental agreements and practices align with the latest regulations.',
  },
  {
    icon: '⚖️',
    headline: 'Resolve Disputes Efficiently',
    paragraph: 'When conflicts arise, we’re here to help. Our platform supports you in submitting disputes to the appropriate authorities, ensuring all documentation is in order, and guiding you through the resolution process.',
  },
  {
    icon: '💹',
    headline: 'Manage Rent Prices Easily',
    paragraph: 'Keep on top of rent changes with our tools. Understand the rules around rent increases and make sure you\'re always compliant with the annual rates set by the authorities.',
  },
  {
    icon: '🏠',
    headline: 'Maximize Rental Benefits',
    paragraph: 'Unlock the potential of your rental properties with our insights on legal incentives. Learn how to benefit from tax breaks and avoid penalties, ensuring your properties are both profitable and compliant.',
  },
  {
    icon: '💳',
    headline: 'Streamlined Payments & Exits',
    paragraph: 'Simplify rent payments and understand your rights when it comes to ending a lease. Our platform ensures smooth transactions and clear guidance on terminating rental agreements according to the law.',
  },
];
const Service = () => {
  
  const hammerRef = useRef()
  return (
    <div className="bg-no-repeat  relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${services})` }}>
      <div>
        <Navbar />
      </div>
      <div className="absolute inset-0 bg-blue-900 opacity-60"></div>

      <div className="relative">
        <div className="mb-6 mt-10 ml-14 p-4 ">
          <h2 className="text-blue-700 font-bold text-5xl sm:text-8xl "
            style={{
              background: 'linear-gradient(90deg, blue, white)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}>Services</h2>

        </div>
        <div className='ml-12 '>
          <div className='h-[4px] bg-blue-900 w-20'></div>
        </div>
        <div className='flex justify-end mr-20 pt-32'>
          <div className='text-3xl md:text-6xl font-bold p-4 rounded-lg shadow-xl transition-shadow  text-white w-[300px] bg-blue-800 text-center'>
            <h2> For Ethiopian&apos;s</h2>
            <h2> By Ethiopian&apos;s</h2>
          </div>
        </div>
        <div className='bg-blue-gray-200 -mt-8'>
          <div className='flex justify-center pt-20'>
            <h2 className='text-zinc-700 font-bold text-8xl'>Our <span className='text-blue-800'>servies</span></h2>
          </div>
          <div className='flex justify-center py-8 '>
            <div className='h-[4px] bg-blue-900 w-20'></div>
          </div>
          <div>
            <div className='pt-10 ml-10'>
              <div>
                <h2 className='text-blue-800 font-bold text-2xl md:text-4xl'>Transforming Housing Rental Laws in Ethiopia</h2>
              </div>

              {/* <div className='flex justify-center my-10 '>
                              <img src={reg} alt="registration" className='w-[600px] rounded-3xl shadow-lg shadow-brown-800 hover:opacity-80 hover:scale-110'/>
                              </div> */}
            </div>
          </div>
          <div className='w-full'>
            <div className='flex flex-col md:flex-row justify-center items-center'>
              <div className='w-1/2'>
                <Lottie
                  onComplete={() => {
                    hammerRef.current.goToAndPlay(55, true)
                  }}
                  loop={false}
                  lottieRef={hammerRef} animationData={judgeHammer} />
              </div>

              <div className='mt-7 md:mr-16 text-center md:text-left'>
                <div className='py-4'>
                  <div className='h-[4px] bg-white w-40 shadow-custom-dark'></div>
                </div>
                <p className='font-medium'>
                  Welcome to our comprehensive service page dedicated to the new Housing Rent Control and Management Proclamation No. 1320/2016.
                  Our platform is designed to help both landlords and tenants navigate the recent changes in rental laws,
                  ensuring compliance and fostering a transparent rental market in Ethiopia.
                </p>
                <div className='flex flex-row'>
                    <a href="https://ebc.et/newsdetails.aspx?newsid=6376" target='_blank'
                     className='no-underline'><button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                 focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex gap-2 me-2 mb-2 w-[200px]">
                    Know more <span ><FaAngleDoubleRight size={20} /></span></button></a>
                </div>
              </div>
            </div>
            <div className='flex justify-center py-8 mt-6 '>
            <div className='h-[4px] bg-blue-900 w-44'></div>
          </div>
            <motion.div
             className="flex flex-wrap justify-center mt-6 sm:mt-10 animate-fade-right animate-delay-[2ms]">
                {serviceData.map((service, index)=>(
                  <ServiceItem 
                  key={index}
                  icon={service.icon}
                  headline={service.headline}
                  des={service.paragraph}/>
                ))}
              </motion.div>

            <div className="flex flex-col sm:flex-row justify-center items-center p-6 sm:p-14 mb-6 sm:mb-10">
  <div className="w-full sm:w-[65%] p-4">
    <h2 className="font-bold text-2xl sm:text-4xl flex text-white text-center mb-4">Purpose of the law <span className='text-red-700'><MdOutlineQuestionMark size={50} /></span></h2>
    {/* <p className="text-base sm:text-lg font-medium">
    The primary objective of this new law is to create a fairer and more balanced rental market. 
    It seeks to ensure that rental prices are reasonable and aligned with tenants' financial capabilities, 
    thereby protecting tenants from unfair practices while also encouraging landlords to rent out their properties 
    under clear and regulated terms. The law introduces mandatory registration of all housing lease agreements, 
    regulated rent pricing, and sets minimum lease durations, among other significant changes.
This overhaul of the rental housing system marks a crucial step towards creating a more equitable and transparent 
market that benefits both tenants and landlords. Whether you're a tenant looking to understand your rights or a landlord
 navigating the new requirements,
 this page provides a detailed breakdown of what you need to know.
    </p> */}
     <Content/>

  </div>
  <div className="w-full sm:w-[35%] p-4 flex justify-center ">
    <img src={reg} alt="registration photo" className="w-full max-w-md h-auto rounded-3xl shadow-lg shadow-brown-800 hover:opacity-80 hover:scale-110" />
  </div>
</div>
         <div>
          <GettingStarted/>
         </div>
          </div>
        </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Service