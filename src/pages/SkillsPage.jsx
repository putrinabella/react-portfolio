import SkillIcons from "../components/SkillIcons";

const SkillsPage = () => {
  return (
    <div className="flex flex-col min-h-screen font-opensans bg-base-200">
      <div className="flex-grow">
        <h1 className="text-4xl font-bold text-center mt-10">
          What I Bring to the Table
        </h1>
        <SkillIcons />
      </div>
    </div>
  );
};

export default SkillsPage;
