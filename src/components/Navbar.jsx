import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-100 shadow-xl sticky top-0 z-50 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <button onClick={() => navigate(`/`)}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate(`/about`)}>About</button>
            </li>
            <li>
              <button onClick={() => navigate(`/experience`)}>
                Experience
              </button>
            </li>
            <li>
              <button onClick={() => navigate(`/skills`)}>Skills</button>
            </li>
            <li>
              <button onClick={() => navigate(`/interest`)}>Interest</button>
            </li>
            <li>
              <button onClick={() => navigate(`/awards`)}>Awards</button>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Putri Nabella</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button onClick={() => navigate(`/`)}>Home</button>
          </li>
          <li>
            <button onClick={() => navigate(`/about`)}>About</button>
          </li>
          <li>
            <button onClick={() => navigate(`/experience`)}>Experience</button>
          </li>
          <li>
            <button onClick={() => navigate(`/skills`)}>Skills</button>
          </li>
          <li>
            <button onClick={() => navigate(`/interest`)}>Interest</button>
          </li>
          <li>
            <button onClick={() => navigate(`/awards`)}>Awards</button>
          </li>
        </ul>
      </div>
      <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
    </div>
  );
};

export default Navbar;
