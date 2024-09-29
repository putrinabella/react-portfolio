import SkillIcons from "../components/SkillIcons";

const SkillsPage = () => {
  return (
    <div className="flex flex-col min-h-screen font-opensans bg-base-200">
      <div>
        <h1 className="text-4xl font-bold text-center mt-10">
          {" "}
          <span className="font-black bg-yellow-300">
            What I Bring to the Table
          </span>
        </h1>
      </div>
      <SkillIcons />
    </div>
  );
};

export default SkillsPage;
