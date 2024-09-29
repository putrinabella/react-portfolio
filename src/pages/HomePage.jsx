import { useEffect, useState } from "react";
import heroImage from "../assets/hero.svg";
import cv from "../doc/CV Putri Nabella.pdf";

const HomePage = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Putri Nabella", "Web Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="flex-grow flex items-center justify-center bg-base-200">
      <div className="hero font-opensans px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={heroImage}
            className="max-w-sm rounded-lg shadow-2xl hidden lg:block mb-4 lg:mb-0"
          />
          <div>
            <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
              <div className="about-text">
                <small className="text-gray-600 text-lg">
                  Welcome to my portfolio website!
                </small>
                <h1 className="text-5xl font-bold mt-2">
                  <span>Hey folks, I&apos;m</span>
                  <span className="ml-3 font-semibold text-yellow-400">
                    {texts[currentText]}
                  </span>
                </h1>
                <p className="mt-4 text-gray-700 text-lg">
                  Transforming ideas into functional and elegant web solutions
                  is where my expertise thrives. As an enthusiastic web
                  developer, I breathe life into digital landscapes, blending
                  creativity with precision to deliver seamless user
                  experiences.
                </p>
              </div>
            </div>
            <a
              className="btn btn-warning mt-5 p-5"
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
