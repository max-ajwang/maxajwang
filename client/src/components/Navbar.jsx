import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaSun } from 'react-icons/fa';
import { links } from '../constants/navLinks';
import { socials } from '../constants/socials';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav className="section nav-center max-md:px-9">
      <div className="nav-header">
        {/* <img src={logo} alt="logo" /> */}
        <Link to="/">
          {/* <h2 className="text-xl font-bold font-sans">Max Ajwang'</h2> */}
        </Link>
        <button
          className="nav-toggle"
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        >
          <FaBars />
        </button>
      </div>

      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
                {/* <a href={url}>{text}</a> */}
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="social-icons">
        {socials.map((social) => {
          const { id, url, icon } = social;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
