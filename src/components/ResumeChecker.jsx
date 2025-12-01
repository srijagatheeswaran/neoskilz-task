import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFileAlt, FaCheck, FaTimes, FaSpinner } from "react-icons/fa";

const ResumeChecker = () => {
  const [resumeText, setResumeText] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!jobTitle.trim()) {
      newErrors.jobTitle = "Job title is required";
    }
    
    if (!resumeText.trim()) {
      newErrors.resumeText = "Resume text is required";
    } else if (resumeText.trim().split(/\s+/).length < 10) {
      newErrors.resumeText = "Resume should have at least 10 words";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckScore = () => {
    if (!validateForm()) return;
    
    setLoading(true);
    setScore(null);
    
    setTimeout(() => {
      let totalScore = 0;
      const resumeLower = resumeText.toLowerCase();
      const jobTitleLower = jobTitle.toLowerCase();

      if (resumeLower.includes(jobTitleLower)) {
        totalScore += 50;
      }

      const keywords = ["experience", "skills", "project"];
      keywords.forEach((word) => {
        if (resumeLower.includes(word)) {
          totalScore += 10;
        }
      });


      // totalScore = Math.min(totalScore, 100);
      totalScore = Math.round((totalScore / 80) * 100);

      setScore(totalScore);
      setLoading(false);
    }, 1500);
  };

  const getScoreMessage = (score) => {
    if (score >= 90) return "🎉 Excellent! Ready to apply!";
    if (score >= 70) return "👍 Good resume! Strong candidate.";
    if (score >= 50) return "😊 Average. Some improvements needed.";
    if (score >= 30) return "📝 Needs work. Consider adding more details.";
    return "🔧 Needs significant improvement.";
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    if (score >= 40) return "text-orange-600";
    return "text-red-600";
  };

  const wordCount = resumeText.trim().split(/\s+/).filter(word => word.length > 0).length;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mr-3">
          <FaFileAlt className="text-white text-xl" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Mini Resume Score Checker</h2>
          <p className="text-gray-600 text-sm">Simple scoring based on job title match and keywords</p>
        </div>
      </div>

      <div className="space-y-4">

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Target Job Title *
          </label>
          <input
            type="text"
            placeholder="e.g., Frontend Developer, Data Analyst"
            value={jobTitle}
            onChange={(e) => {
              setJobTitle(e.target.value);
              if (errors.jobTitle) setErrors({...errors, jobTitle: ""});
            }}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
              errors.jobTitle ? "border-red-500" : "border-gray-300"
            }`}
          />
          <AnimatePresence>
            {errors.jobTitle && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-500 text-sm mt-1 flex items-center"
              >
                <FaTimes className="mr-1 text-xs" /> {errors.jobTitle}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-semibold text-gray-700">
              Resume Text *
            </label>
            <span className="text-xs text-gray-500">
              {wordCount} {wordCount === 1 ? "word" : "words"}
            </span>
          </div>
          <textarea
            placeholder="Paste your resume content here... Include skills, experience, and projects."
            value={resumeText}
            onChange={(e) => {
              setResumeText(e.target.value);
              if (errors.resumeText) setErrors({...errors, resumeText: ""});
            }}
            rows={6}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all ${
              errors.resumeText ? "border-red-500" : "border-gray-300"
            }`}
          />
          <AnimatePresence>
            {errors.resumeText && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-500 text-sm mt-1 flex items-center"
              >
                <FaTimes className="mr-1 text-xs" /> {errors.resumeText}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={handleCheckScore}
          disabled={loading}
          className={`w-full py-3 font-medium rounded-lg transition-all flex items-center justify-center space-x-2 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:-translate-y-0.5"
          }`}
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <FaCheck />
              <span>Check Score</span>
            </>
          )}
        </button>
      </div>

      <AnimatePresence>
        {score !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 20 }}
            className="mt-6 p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Analysis Result</h3>
                <p className="text-gray-600 text-sm">{getScoreMessage(score)}</p>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className={`text-3xl font-bold ${getScoreColor(score)} bg-white p-4 rounded-full shadow-sm border`}
              >
                {score}
                <span className="text-gray-500 text-lg">/100</span>
              </motion.div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Score Progress</span>
                <span>{score}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${score}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full rounded-full ${
                    score >= 80 ? "bg-green-500" :
                    score >= 60 ? "bg-yellow-500" :
                    score >= 40 ? "bg-orange-500" : "bg-red-500"
                  }`}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default ResumeChecker;