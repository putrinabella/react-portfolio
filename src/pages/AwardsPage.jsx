import awardImage from "../assets/award.svg";

const AwardsPage = () => {
  return (
    <div className="flex-grow flex items-center justify-center bg-base-200">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mt-10">
          <span className="bg-yellow-300">Spotlight on Achievements</span>
        </h1>
        <img src={awardImage} className="mt-5" alt="Award" />
      </div>
    </div>
  );
};

export default AwardsPage;
