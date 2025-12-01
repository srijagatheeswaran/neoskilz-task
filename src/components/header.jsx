import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";

const Header = () => {

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-2">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                    <FaBookOpen className="text-white text-lg" />
                                </div>
                                <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                                    Mini <span className="text-blue-600">LMS</span>
                                </h1>
                            </div>


                        </div>

                    </div>
                </div>
            </motion.header>


        </>
    );
};

export default Header;