import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaSun } from 'react-icons/fa';
import { links } from '../constants/navLinks';
import { socials } from '../constants/socials';
import { Link } from 'react-router-dom';
// import logo from '../assets/images/logo.png';
import contactArrow from '../assets/images/arrow-icon.png';
import moon from '../assets/images/moon_icon.png';
import headerBgColor from '../assets/images/header-bg-color.png';
import hamburger from '../assets/images/menu-black.png';
import closeIcon from '../assets/images/close-black.png';

const Navbar = () => {
  // const [showLinks, setShowLinks] = useState(false);

  // const linksContainerRef = useRef(null);
  // const linksRef = useRef(null);

  // useEffect(() => {
  //   const linksHeight = linksRef.current.getBoundingClientRect().height;

  //   if (showLinks) {
  //     linksContainerRef.current.style.height = `${linksHeight}px`;
  //   } else {
  //     linksContainerRef.current.style.height = '0px';
  //   }
  // }, [showLinks]);

  const [showSideBar, setShowSideBar] = useState(false);
  const sideBarContainerRef = useRef(null);

  useEffect(() => {
    if (showSideBar) {
      sideBarContainerRef.current.style.transform = 'translateX(-16rem)';
    } else {
      sideBarContainerRef.current.style.transform = 'translateX(16rem)';
    }
  }, [showSideBar]);

  return (
    // <nav className="section nav-center max-md:px-9">
    //   <div className="nav-header">
    //     {/* <img src={logo} alt="logo" /> */}
    //     <Link to="/">
    //       {/* <h2 className="text-xl font-bold font-sans">Max Ajwang'</h2> */}
    //     </Link>
    //     <button
    //       className="nav-toggle"
    //       onClick={() => {
    //         setShowLinks(!showLinks);
    //       }}
    //     >
    //       <FaBars />
    //     </button>
    //   </div>

    //   <div className="links-container " ref={linksContainerRef}>
    //     <ul className="links" ref={linksRef}>
    //       {links.map((link) => {
    //         const { id, url, text } = link;
    //         return (
    //           <li key={id}>
    //             <Link to={url}>{text}</Link>
    //             {/* <a href={url}>{text}</a> */}
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>

    //   <ul className="social-icons">
    //     {socials.map((social) => {
    //       const { id, url, icon } = social;
    //       return (
    //         <li key={id}>
    //           <a href={url}>{icon}</a>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </nav>

    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <img src={headerBgColor} alt="" className="w-full" />
      </div>

      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <div>
          {/* <img src="" alt="Max" className="w-28 cursor-pointer mr-14" /> */}
          <h3 className="text-3xl font-bold">Max Ajwang'</h3>
        </div>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <a href="#top">Home</a>
          </li>
          {/* <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li> */}
          <li>
            <a href="#work">Work</a>
          </li>
          {/* <li>
            <a href="#contact">Contact me</a>
          </li> */}
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <img src={moon} alt="" className="w-6" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact <img src={contactArrow} alt="" className="w-3" />
          </a>

          <button
            className="block md:hidden ml-3"
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          >
            <img src={hamburger} alt="" className="w-6" />
          </button>
        </div>

        {/*******Side Menu************/}
        <ul
          id="#sideMenu"
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
          ref={sideBarContainerRef}
        >
          <div
            className="absolute right-6 top-6"
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          >
            <img src={closeIcon} alt="" className="w-5 cursor-pointer" />
          </div>

          <li
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          >
            <a href="#top">Home</a>
          </li>
          {/* <li
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          >
            <a href="#about">About me</a>
          </li>
          <li
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          >
            <a href="#services">Services</a>
          </li> */}
          <li
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          >
            <a href="#work">Work</a>
          </li>
          {/* <li
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          >
            <a href="#contact">Contact me</a>
          </li> */}
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
