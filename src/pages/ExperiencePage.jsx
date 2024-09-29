const ExperiencePage = () => {
  return (
    <div className="flex flex-col min-h-screen font-opensans bg-base-200">
      <h1 className="text-4xl font-bold text-center mt-10">Experience</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-20 my-10">
        <li>
          <div className="timeline-middle flex items-center justify-center">
            <div className="rounded-full bg-gray-300 text-gray-800 h-12 w-12 flex items-center justify-center font-bold">
              2024
            </div>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <span className="text-xl font-black bg-yellow-300">
              Data Scientist
            </span>
            <div className="text-lg font-bold">PWDM 2024</div>
            Responsible for
            <span className="bg-yellow-200">
              {" "}
              data collection, preprocessing, experimental model creation
            </span>{" "}
            using feature selection and feature filtering, and data
            visualization using{" "}
            <span className="bg-yellow-200">
              {" "}
              Python programming language
            </span>{" "}
            . The research aimed to develop and evaluate a learning model for
            predicting software defects across projects, utilizing several
            software defect datasets such as NASA MDP, Promise, and Relink.
            Conducted exploration on dimensionality reduction through
            filter-based feature selection and its combinations (feature
            ranking), then implemented the model using various classification
            algorithms to evaluate its performance
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <div className="rounded-full bg-gray-200 text-gray-800 h-12 w-12 flex items-center justify-center font-bold">
              2023
            </div>
          </div>
          <div className="timeline-end mb-10">
            <span className="text-xl font-black bg-yellow-300">
              Web Developer
            </span>
            <div className="text-lg font-bold">SMK TELKOM BANJARBARU</div>
            Conceptualizing and bringing to life the{" "}
            <span className="bg-yellow-200">
              Web Facility and Infrastructure Management System
            </span>{" "}
            for SMK Telkom Banjarbaru. This platform was meticulously crafted to
            deliver integrated solutions for school facility management,
            emphasizing the{" "}
            <span className="bg-yellow-200">
              management of physical assets, services, borrowing processes, and
              complaint handling with feedback.
            </span>{" "}
            Ensured an intuitive user interface, aiming to provide users with
            seamless navigation for tracking inventory, scheduling maintenance,
            and efficiently monitoring operational conditions.
          </div>
          <hr />
        </li>
        <li>
          <div className="timeline-middle flex items-center justify-center">
            <div className="rounded-full bg-gray-200 text-gray-800 h-12 w-12 flex items-center justify-center font-bold">
              2019
            </div>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <span className="text-xl font-black bg-yellow-300">IT Staff</span>
            <div className="text-lg font-bold">Radar Banjarmasin</div>
            Actively contributing as a server room assistant and overseeing
            daily online news updates. My technical skills were demonstrated
            through hands-on experience in installing and configuring{" "}
            <span className="bg-yellow-200"> Linux Debian</span> . Additionally,
            I showcased proficiency in network infrastructure by successfully
            building networks using the{" "}
            <span className="bg-yellow-200"> Microtic system.</span>{" "}
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default ExperiencePage;
