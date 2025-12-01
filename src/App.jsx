import { useState } from 'react'
import CourseList from "./components/CourseList";
import ResumeChecker from "./components/ResumeChecker";
import './App.css'
import Header from './components/header';
import Footer from './components/footer';

function App() {


  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Courses Section */}
          <section className="mb-12">
            <CourseList />
          </section>

        
          <div className="flex items-center my-12">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-gray-500 font-medium">Resume Analysis Tool</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

      
          <section>
            <ResumeChecker />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
