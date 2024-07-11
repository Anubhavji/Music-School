"use client";

import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Instrumental Lessons",
    description:
      "Master your chosen instrument with personalized lessons from experienced instructors. Whether you're a beginner or advanced, our tailored approach will help you achieve your musical goals.",
  },
  {
    title: "Music Theory Classes",
    description:
      "Build a strong foundation in music theory. Our classes cover essential concepts, from basic notation to advanced harmony, helping you understand the structure and language of music.",
  },
  {
    title: "Performance Opportunities",
    description:
      "Gain valuable stage experience through recitals, concerts, and ensemble performances. Showcase your skills and grow as a performer in a supportive environment.",
  },
  {
    title: "Recording Studio Access",
    description:
      "Take advantage of our state-of-the-art recording studio to create professional-quality recordings. Learn the ins and outs of music production and sound engineering.",
  },
  {
    title: "Workshops and Masterclasses",
    description:
      "Participate in workshops and masterclasses led by renowned musicians and industry professionals. Expand your knowledge and gain insights from experts in various musical fields.",
  },
  {
    title: "Ensemble and Band Programs",
    description:
      "Join our ensemble and band programs to collaborate with other musicians. Experience the joy of playing in a group, improve your ensemble skills, and perform in concerts.",
  },
  {
    title: "Online Learning Platform",
    description:
      "Access a wealth of resources through our online learning platform. Watch instructional videos, download sheet music, and participate in virtual classes from the comfort of your home.",
  },
  {
    title: "Music Composition and Songwriting",
    description:
      "Unleash your creativity with our composition and songwriting courses. Learn techniques to craft original music, develop your unique style, and bring your musical ideas to life.",
  },
  {
    title: "Ear Training",
    description:
      "Develop your aural skills with our ear training exercises. Improve your ability to recognize pitches, intervals, chords, and rhythms by ear, essential for any musician.",
  },
  {
    title: "Youth Programs",
    description:
      "Introduce young learners to the world of music with our engaging youth programs. Designed for children and teenagers, these programs offer a fun and educational start to their musical journey.",
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;
