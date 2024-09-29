import profileImage from "../assets/Profile.jpg";

const AboutPage = () => {
  return (
    <div className="flex-grow flex items-center justify-center bg-base-200">
      <div className="hero font-opensans px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={profileImage}
            className="max-w-sm rounded-lg shadow-2xl hidden lg:block mb-4 lg:mb-0"
          />
          <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center mr-10">
            <h1 className="text-5xl font-bold mb-5">
              <span className="bg-yellow-300 text-black">Putri Nabella</span>
            </h1>
            <span className="text-3xl">
              Empowering the Website with Enthusiasm
            </span>
            <div className="text-justify my-5 text-l">
              <p className="my-2">
                I am a dedicated Computer Science graduate with a deep passion
                for web development, committed to advancing my skills in both
                front-end and back-end development. Through various projects,
                internships, and collaborations, I have honed my abilities in
                programming languages such as
                <span className="font-bold"> Java, JavaScript, Python, </span>
                and
                <span className="font-bold"> PHP</span>, as well as frameworks
                like <span className="font-bold">CodeIgniter</span> and{" "}
                <span className="font-bold"> React</span> . This expertise
                enables me to build dynamic and efficient web applications
                tailored to meet diverse user needs.
              </p>
              <p className="my-2">
                In addition to my foundational skills, I am proficient in{" "}
                <span className="font-bold">SCSS, Tailwind </span>and{" "}
                <span className="font-bold">Bootstrap </span>, and have
                experience with testing tools like{" "}
                <span className="font-bold">CodeceptJS </span> and{" "}
                <span className="font-bold">Jasmine</span>. My knowledge of{" "}
                <span className="font-bold">MySQL </span>
                further enhances my ability to manage and manipulate data
                effectively. I thrive in collaborative environments, eager to
                contribute innovative solutions to complex problems while
                continuously learning and adapting to new technologies.
              </p>
              <p className="my-2">
                I am excited about the prospect of leveraging my skills in a
                dynamic team environment and am eager to contribute to impactful
                projects that drive innovation and enhance user experiences.
              </p>
            </div>
            <a
              href="https://github.com/putrinabella"
              className="mt-4 text-lg font-semibold text-yellow-500 hover:underline transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My Github Profile &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
