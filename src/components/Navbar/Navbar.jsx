import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
// import Spaces from "../Spaces";

const Navbar = () => {
  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-40 "
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <img src={Logo} alt="" className="w-20" />
              <span>The Orbitals</span>
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4 ">
                <li>
                <Link to="/images">Planetary</Link>
                </li>
                <li>
                  <a href="http://localhost:5174/">AR Solar system</a>
                </li>
                <li>
                  <Link to="http://localhost:3000/">Chat</Link>
                </li>
                <li>
                  <Link to="">Space Exploration History</Link>
                </li>
                <li>
                  <Link to="/Satellit">Satellite</Link>
                </li>
                <li>
                  <Link to="/MainBodie">Celestial Bodies</Link>
                </li>
              </ul>
            </div>
            <div>
              <Link to="">
              <button className=" text-white border-2 border-white px-3 httpspy-1 rounded-md">
                MyBuddy
              </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
