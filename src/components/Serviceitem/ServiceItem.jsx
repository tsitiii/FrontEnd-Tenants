
const ServiceItem = ({icon, headline, des}) => {
    return (
        <div className="bg-white rounded-lg shadow-custom-dark p-8 m-4 max-w-xs items-center border-t-8 border-t-blue-900 hover:scale-y-105 hover:bg-blue-800 transition">
          <div className="text-4xl mb-4 flex justify-center">{icon}</div>
          <h3 className="md:text-base text-sm font-bold mb-2">{headline}</h3>
          <p className="text-gray-600">{des}</p>
        </div>
      );
}

export default ServiceItem