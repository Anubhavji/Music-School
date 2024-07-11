"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { Button } from "./ui/moving-border";

const Features = () => {
  const featuredCourses = courseData.courses.filter(
    (course) => course.isFeatured
  );
  // console.log(featuredCourses);
  return (
    <div className="py-12  bg-gradient-to-br from-black to-gray-900 ">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className=" mt-10 ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">
          {featuredCourses.map((course) => (
            <div key={course.id} className="flex justify-center">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow border rounded-md rounded-tr-3xl shadow-slate-200 shadow-md">
                <p className=" text-teal-700 font-bold py-2">{course.title}</p>
                <p>{course.description}</p>
                <Link className="mt-3" href={`/courses/courses.slug`}>
                  <Button borderRadius="1.75rem">Learn More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded-xl border  text-neutral-300 bg-transparent hover:bg-gray-800 border-neutral-500  tranition duration-200 "
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default Features;
