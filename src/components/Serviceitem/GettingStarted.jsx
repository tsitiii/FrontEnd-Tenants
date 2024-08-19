import { FaRegCheckCircle } from 'react-icons/fa';

const GettingStarted = () => {
  return (
    <div className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* How to Get Started Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-8">How to Get Started</h2>
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="p-4 flex flex-col items-center sm:items-start">
              <FaRegCheckCircle size={30} className="text-blue-700 mb-4" />
              <h3 className="font-bold text-xl mb-2">Register an Account</h3>
              <p className="text-gray-600 text-center sm:text-left">Sign up on our platform to get started with our services.</p>
            </div>
            <div className="p-4 flex flex-col items-center sm:items-start">
              <FaRegCheckCircle size={30} className="text-blue-700 mb-4" />
              <h3 className="font-bold text-xl mb-2">Submit Your Documents</h3>
              <p className="text-gray-600 text-center sm:text-left">Upload your rental agreement or any other necessary documents for registration and verification.</p>
            </div>
            <div className="p-4 flex flex-col items-center sm:items-start">
              <FaRegCheckCircle size={30} className="text-blue-700 mb-4" />
              <h3 className="font-bold text-xl mb-2">Stay Informed</h3>
              <p className="text-gray-600 text-center sm:text-left">Access our resource center for the latest updates on rental laws and guidelines.</p>
            </div>
            <div className="p-4 flex flex-col items-center sm:items-start">
              <FaRegCheckCircle size={30} className="text-blue-700 mb-4" />
              <h3 className="font-bold text-xl mb-2">Engage with Us</h3>
              <p className="text-gray-600 text-center sm:text-left">Contact our support team for any queries or assistance.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-blue-800 text-white py-16 px-8 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="p-4 flex flex-col items-center sm:items-start">
              <FaRegCheckCircle size={30} className="text-green-400 mb-4" />
              <h3 className="font-bold text-xl mb-2">Legal Expertise</h3>
              <p className="text-center sm:text-left">Our platform is designed by experts who understand the intricacies of Ethiopian rental laws.</p>
            </div>
            <div className="p-4 flex flex-col items-center sm:items-start">
              <FaRegCheckCircle size={30} className="text-green-400 mb-4" />
              <h3 className="font-bold text-xl mb-2">User-Friendly</h3>
              <p className="text-center sm:text-left">We offer a simple and efficient process for both landlords and tenants to manage their rental agreements.</p>
            </div>
            <div className="p-4 flex flex-col items-center sm:items-start">
              <FaRegCheckCircle size={30} className="text-green-400 mb-4" />
              <h3 className="font-bold text-xl mb-2">Compliance Guaranteed</h3>
              <p className="text-center sm:text-left">We ensure that all rental agreements processed through our platform comply with the latest legal requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;
