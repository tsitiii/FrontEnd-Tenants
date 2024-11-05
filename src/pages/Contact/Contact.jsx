import help from '../../assets/helpman.jpg'
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { IoIosContact } from "react-icons/io";
import contact from '../../assets/contactus.png'
import { MdMarkEmailRead } from "react-icons/md";
import { MdPlace } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="relative bg-no-repeat h-fit bg-cover bg-center pb-24 rounded-b-xl" style={{ backgroundImage: `url(${help})` }}>
        <div>
          <Navbar />
        </div>
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        <div className="relative"></div>
        <div className="flex flex-col justify-center items-center mb-10 py-8">
          <h1 className="text-blue-700 font-bold text-5xl sm:text-8xl"
            style={{
              background: 'linear-gradient(90deg, blue, white)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}>Get in touch</h1>
          <h2 className='mt-8 text-white font-bold'>We&apos;d love to hear from you</h2>

        </div>
      </div>


      <div className='bg-[#f6f6f6]'>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-5 '>
          <div className='w-full sm:w-[500px] flex flex-col justify-center ml-20 mt-10 sm:-mt-20'>
             <div className='ml-5 sm:ml-0'>
             <h2 className='font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center text-blue-900'>Get in touch with us</h2>
            <p className='font-semibold text-lg sm:text-2xl'>For any questions or comments</p>
            <p>feel free to contact us</p>
            <p className='font-bold'>Help and support</p>
            <a href=""><p className='text-base flex '><span><MdMarkEmailRead className='text-2xl mr-[2px]' /></span>support@govt.et</p></a>
            <p className='text-base font-semibold flex gap-1'><span><MdPlace className='text-4xl text-blue-900' /></span>4 kilo, Addis Ababa , Ethiopia</p>
            <img src={contact} alt="" className='w-full sm:w-[250px]' />
             </div>
          </div>

          <div className="bg-white mx-auto w-full max-w-[540px] md:w-[450px] py-16 px-8 rounded-2xl shadow-custom-dark -mt-20 z-10">
            <p className='text-center text-base sm:text-lg font-semibold'>Please fill out the form below to <span className='text-blue-900 font-extrabold'>get in touch with us</span>.</p>
            <IoIosContact className='mx-auto text-6xl text-blue-900' />
            <form className='flex flex-col'>
              <div className='mb-4'>
                <label htmlFor="name
          " className="mb-3 block text-base font-medium text-[#07074D]">Name:</label>
                <input type="text" id="name" name="name" placeholder='Full Name'
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div className='mb-4'>

                <label htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]">Email:</label>
                <input type="email" id="email" name="email" placeholder="example@domain.com" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#3b33e2] focus:shadow-md" />
              </div>

              <div className='mb-4'>
                <label htmlFor="message"
                  className="mb-3 block text-base font-medium text-[#07074D]">Message:</label>
                <textarea id="message" name="message" rows="4"
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>

              <button type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
