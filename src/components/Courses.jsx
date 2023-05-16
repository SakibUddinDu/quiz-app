// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => setCourses(data.data));
  }, []);

  return (
    <>
      <h1 className="text-center text-8xl  my-4 border-indigo-500">Courses</h1>
      <div className="grid grid grid-col md:grid-cols-2 lg:grid-cols-4 justify-center gap-8   mt-8 ">
        {courses.map((course) => (
          <CourseCard course={course} key={course.id}></CourseCard>
        ))}
      </div>
    </>
  );
};

export default Courses;
