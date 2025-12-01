import { motion } from "framer-motion";
import { FaClock, FaArrowRight } from "react-icons/fa";

const CourseItem = ({ course, onView, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      
      <div className="relative h-48 overflow-hidden">
        <img 
          src={`${course.imageUrl}`} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={course.name}
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-semibold text-gray-800 rounded-full">
            {course.category || "Professional"}
          </span>
        </div>
      </div>

    
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {course.name}
          </h3>
          {course.price ? (
            <span className="text-2xl font-bold text-blue-600">${course.price}</span>
          ) : (
            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
              FREE
            </span>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description || "Learn essential skills for modern development."}
        </p>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center text-gray-500">
            <FaClock className="mr-2" />
            <span className="text-sm font-medium">{course.duration}</span>
          </div>
          
        </div>

        <button
          onClick={() => onView(course)}
          className="w-full flex items-center justify-center px-4 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-black transition-all duration-300 group/btn"
        >
          View Details
          <FaArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </motion.div>
  );
};

export default CourseItem;