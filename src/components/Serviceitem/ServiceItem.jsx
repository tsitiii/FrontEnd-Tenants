import { motion } from 'framer-motion'

const ServiceItem = ({icon, headline, des}) => {
    return (
        <motion.div initial={{opacity:0, y:40}} 
        whileInView={{opacity:1,y:0, transition:{delay:0.2 ,duration:.5}}}
        viewport={{ once:true, amount:.5}} className="bg-white rounded-lg shadow-custom-dark p-8 m-4 max-w-xs items-center border-t-8 border-t-blue-900 hover:scale-y-105 hover:bg-blue-800 transition">
          <div className="text-4xl mb-4 flex justify-center text-blue-700">{icon}</div>
          <h3 className="md:text-base text-sm font-bold mb-2">{headline}</h3>
          <p className="text-gray-600">{des}</p>
        </motion.div>
      );
}

export default ServiceItem