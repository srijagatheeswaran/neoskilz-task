import {  FaGraduationCap } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                            <FaGraduationCap className="text-blue-400 text-2xl" />
                            <h2 className="text-2xl font-bold">
                                Mini <span className="text-blue-400">LMS</span>
                            </h2>
                        </div>
                        <p className="text-gray-400 text-sm">+ Resume Score Checker</p>
                    </div>

                    <div className="text-center">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Mini LMS. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                            Cookie Policy
                        </a>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;