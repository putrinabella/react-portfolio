const SkillIcons = () => {
  const icons =
    "anaconda,bootstrap,css,debian,django,firebase,git,github,html,js,jquery,matlab,mysql,netlify,nodejs,notion,php,postman,py,r,react,sass,tailwind,vite"; // Add your desired icons here
  return (
    <div className="m-10 md:m-16 lg:mx-10">
      <img
        src={`https://skillicons.dev/icons?i=${icons}&perline=8`}
        alt="Skills Icons"
        className="w-full"
      />
    </div>
  );
};

export default SkillIcons;
