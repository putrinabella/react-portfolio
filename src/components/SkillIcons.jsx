import { useEffect, useState } from "react";

const SkillIcons = () => {
  const [perLine, setPerLine] = useState(8);

  const icons =
    "anaconda,bootstrap,css,debian,django,firebase,git,github,html,js,jquery,matlab,mysql,netlify,nodejs,notion,php,postman,py,r,react,sass,tailwind,vite"; // Add your desired icons here

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPerLine(3); // Mobile size
      } else {
        setPerLine(8); // Desktop size
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="m-10 md:m-16 lg:mx-10">
      <img
        src={`https://skillicons.dev/icons?i=${icons}&perline=${perLine}`}
        alt="Skills Icons"
        className="w-full"
      />
    </div>
  );
};

export default SkillIcons;
