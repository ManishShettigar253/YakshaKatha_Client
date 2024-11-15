
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './About.css';
import Intro from '../assets/Intro.jpg';
import Features from '../assets/Features.webp';
import TechStack from '../assets/TechStack.png';

const About: React.FC = () => {
  return (
    <div className="about-slideshow-container">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="centered-swiper small-swiper"
      >
        {/* Slide for Introduction */}
        <SwiperSlide>
          <div className="slide-content-container">
            <div className="slide-text-container">
              <h4 className="section-title">INTRODUCTION</h4>
              <p className="slide-text">
                <strong>YakshaKatha</strong> is an innovative platform that uses Convolutional Neural Networks (CNN) to transform images into detailed text descriptions. The Flask-based backend processes uploaded images to generate precise captions, enabling applications like image captioning, accessibility enhancements, and content indexing. With a React and TypeScript frontend powered by the Carbon Design System, YakshaKatha offers a sleek, user-friendly interface for various industries.
              </p>
            </div>
            <div className="slide-image-container">
              <img
                src={Intro}
                alt="Introduction"
                className="slide-image"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide for Key Features */}
        <SwiperSlide>
          <div className="slide-content-container">
            <div className="slide-text-container">
              <h4 className="section-title">KEY FEATURES</h4>
              <ul className="feature-list">
                <li><strong>Real-Time Processing</strong> - Generates image descriptions quickly and efficiently...</li>
                <li><strong>GeminiAI Integration</strong> - Enhances descriptions and refines outputs for comprehensive understanding...</li>
                <li><strong>Seamless User Interface</strong> - Provides an easy-to-navigate and responsive interface...</li>
              </ul>
            </div>
            <div className="slide-image-container">
              <img
                src={Features}
                alt="Key Features"
                className="slide-image"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide for Tech Stack */}
        <SwiperSlide>
          <div className="slide-content-container">
            <div className="slide-text-container">
              <h4 className="section-title">TECH STACK</h4>
              <ul className="tech-stack-list">
                <li><strong>Frontend </strong> - React.js, TypeScript, Carbon Components, CSS.</li>
                <li><strong>Frontend Dependencies</strong> - Carbon icons, fortawesome, Typescript, axios.</li>
                <li><strong>Backend </strong> - Flask, Python.</li>
                <li><strong>Backend Dependencies</strong> - Flask, NumPy, Pillow (PIL), Keras, dotenv, Google Generative AI (genai), Flask-CORS.</li>
              </ul>
            </div>
            <div className="slide-image-container">
              <img
                src={TechStack}
                alt="Tech Stack"
                className="slide-image"
              />
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default About;
