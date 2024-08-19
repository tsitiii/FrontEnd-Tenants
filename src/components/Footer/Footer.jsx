import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaTelegram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center pt-10 pb-12  text-white space-y-4 md:space-y-0 bg-blue-900 ">
      <div className="flex flex-col items-center md:items-start space-y-2 py-3">
        <h2 className="text-lg md:text-4xl font-semibold">RENTAL AGREEMENT</h2>
        <p className="flex items-center space-x-2 cursor-pointer">
          <FaPhoneAlt />
          <span>+251 123 456 789</span>
        </p>
        <p className="flex items-center space-x-2 cursor-pointer">
          <MdMarkEmailRead />
          <span>info@govt.et</span>
        </p>
      </div>
      <div className="flex flex-col items-center md:items-start space-y-2 cursor-pointer pt-3">
        <h2 className="text-lg md:text-2xl font-semibold">Follow us</h2>
         <div className="gap-32">

         <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-300"><FaFacebook size={50} /></a>
          <a href="#" aria-label="Telegram" className="hover:text-gray-300"><FaTelegram size={50} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-300"><FaLinkedin size={50} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-300"><FaXTwitter size={50} /></a>
        </div>
        <div className="flex flex-row gap-3 md:mt-14 p-6">
          <p className="hover:border-b-2 hover:border-white cursor-pointer">Terms & Conditions</p>
          <p className="hover:border-b-2 hover:border-white cursor-pointer">Privacy Policy</p>
        </div>
         </div>
      </div>
    </div>
  );
};

export default Footer;
