import { useState } from "react";
import { courses } from "../data/courses";
import CourseItem from "./CourseItem";
import CourseDetailsModal from "./CourseDetailsModal";

const CourseList = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Master New Skills Today
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from our curated collection of professional courses designed to advance your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseItem 
              key={course.id} 
              course={course} 
              onView={setSelectedCourse}
              index={index}
            />
          ))}
        </div>

        {selectedCourse && (
          <CourseDetailsModal
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </div>
    </div>
  );
};

export default CourseList;