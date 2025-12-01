import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaClock } from "react-icons/fa";

const CourseDetailsModal = ({ course, onClose }) => {
    if (!course) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                  
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                    >
                        <FaTimes className="w-5 h-5 text-gray-600" />
                    </button>


                    <div className="h-48 w-full bg-gradient-to-r from-blue-500 to-purple-600 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img
                                src={`${course.imageUrl}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                alt={course.name}
                            />
                        </div>
                    </div>

                   
                    <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-2">
                                    {course.category || "Development"}
                                </span>
                                <h2 className="text-2xl font-bold text-gray-900">{course.name}</h2>
                            </div>
                            <div className="text-right">
                                <div className="text-3xl font-bold text-gray-900">
                                    {course.price ? `$${course.price}` : "Free"}
                                </div>
                                <div className="text-sm text-gray-500">One-time payment</div>
                            </div>
                        </div>

            
                        <div className="flex items-center space-x-6 mb-6">
                            <div className="flex items-center">
                                <FaClock className="text-gray-400 mr-2" />
                                <span className="text-gray-700 font-medium">{course.duration}</span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {course.description || "Comprehensive course covering all essential topics."}
                            </p>
                        </div>

                       
        
                        <div className="flex space-x-4">
                            <button
                                onClick={onClose}
                                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => {
                                    alert(`Enrolled in ${course.name}!`);
                                    onClose();
                                }}
                                className="flex-1 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-black transition-colors duration-300"
                            >
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CourseDetailsModal;