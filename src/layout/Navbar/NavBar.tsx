import React, { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { MdMovie } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";

export const navigation = [
  {
    name: "Peliculas",
    href: "about",
    icon: <MdMovie />,
  },
  {
    name: "DashBoard",
    href: "services",
    icon: <BsFillPersonFill />,
  },
  {
    name: "Series",
    href: "services",
    icon: <RiMovie2Fill />,
  },
];

export const NavBar = () => {
  const [bg, setBg] = useState(false);
  // const { status } = useSelector((state) => state.authState);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 420 ? setBg(true) : setBg(false);
    });
  }, []);
  return (
    <div>
      <div
        className={`${
          bg ? "bg-main h-20" : "h-24 bg-transparent "
        } flex items-center justify-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
      >
        <NavLink to="/home">
          <div className="flex p-7">
            <div className="flex items-end space-x-2">
              <img className="w-[100px]" src="/images/logo.png" alt="logo" />
            </div>
          </div>
        </NavLink>

        <div className="flex flex-row space-x-3 items-center">
          <ul className="flex space-x-8 capitalize flex-row ">
            {navigation.map((item, index) => {
              return (
                <li className=" text-white hover:text-alert cursor-pointer" key={index}>
                  <Link to={item.href}>
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <input
            placeholder="Search"
            className="w-50 px-4 py-2 mb-2  rounded-lg bg-transparent mt-2 border  focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};
