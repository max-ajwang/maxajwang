import {
  FaCss3,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
// import portraitImg from '../assets/images/profile-img.jpg';

import { Link } from 'react-router-dom';
import profileImg from '../assets/images/profile-img.jpg';
import handIcon from '../assets/images/hand-icon.png';
import rightArrow from '../assets/images/right-arrow-white.png';
import downloadIcon from '../assets/images/download-icon.png';

import leverpapers from '../assets/images/leverpapers.jpg';
import sendIcon from '../assets/images/send-icon.png';
import cocktails from '../assets/images/cocktails.jpg';
import menu from '../assets/images/menu.jpg';
import grocery_254 from '../assets/images/grocery_254.jpg';
import shoe_website from '../assets/images/shoe_website.jpg';

const Landing = () => {
  return (
    // <div className="section pt-10 pr-12 pb-4 pl-12 min-h-full font-montserrat max-md:px-9 max-lg:px-11 max-xl:p-11 max-2xl:p-12">
    //   {/* <div className="grid grid-cols-1 gap-4">
    //     <img
    //       src={portraitImg}
    //       alt="portrait"
    //       className="w-20 h-w-20 rounded-full"
    //     />
    //     <h2 className="text-3xl font-bold leading-10">
    //       Software Developer, and <br />
    //       Technical writer.
    //       <br />
    //     </h2>
    //     <p className="text-lg leading-6 w-2/3">
    //       Articles, short videos, and projects to master and share succinct
    //       knowledge and concepts on computer science and software development.
    //     </p>
    //   </div> */}

    //   {/* <button className="button mt-6 mb-[--mb-1]">Join My Newsletter</button> */}

    //   {/* <div className="flex justify-center items-center gap-8 mt-16 max-w-screen-2xl">
    //     <div className="h-auto w-auto bg-[var(--grey-9)] px-2 py-2 rounded-full">
    //       <Link>
    //         <FaHtml5 className="text-3xl" />
    //       </Link>
    //     </div>
    //     <div className="h-auto w-auto bg-[var(--grey-9)] px-2 py-2 rounded-full">
    //       <Link>
    //         <FaCss3 className="text-3xl" />
    //       </Link>
    //     </div>
    //     <div className="h-auto w-auto bg-[var(--grey-9)] px-2 py-2 rounded-full">
    //       <Link>
    //         <FaReact className="text-3xl" />
    //       </Link>
    //     </div>
    //     <div className="h-auto w-auto bg-[var(--grey-9)] px-2 py-2 rounded-full">
    //       <Link>
    //         <FaNodeJs className="text-3xl" />
    //       </Link>
    //     </div>
    //     <div className="h-auto w-auto bg-[var(--grey-9)] px-2 py-2 rounded-full">
    //       <Link>
    //         <FaPython className="text-3xl" />
    //       </Link>
    //     </div>
    //     <div className="h-auto w-auto bg-[var(--grey-9)] px-2 py-2 rounded-full">
    //       <Link>
    //         <FaJava className="text-3xl" />
    //       </Link>
    //     </div>
    //   </div> */}

    //   {/* <div className="flex gap-6 justify-center items-center w-full bg-gray-50 border-2 border-gray-300 hover:bg-gray-200 mt-8 mb-8 rounded-lg p-4"> */}
    //   {/* <div className="mb-4"> */}
    //   {/* <input
    //         type="text"
    //         placeholder="email"
    //         className="px-4 border-2 border-gray-400 rounded-lg h-8"
    //       /> */}
    //   {/* </div> */}
    //   {/* <b className="button">Join</b> */}
    //   {/* </div> */}
    //   {/* <div className="border-b-2 pb-6 mt-16">
    //     <h2 className="font-semibold text-xl">Projects</h2>
    //   </div> */}

    //   {/* <div className="grid grid-cols-3 gap-4 px-6 mt-16 mb-16 bg-white max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-2">
    //     <div className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg p-4">
    //       <img
    //         src={leverpapers}
    //         alt="Project 1"
    //         className="h-20 w-20 rounded-full"
    //       />
    //       <h2 className="font-semibold text-xl">Leverpapers</h2>
    //       <p className="my-8 font-normal text-base leading-5">
    //         A CRUD API application for order management and status tracking
    //       </p>
    //       <a
    //         href="https://leverpapers.onrender.com"
    //         className="text-md font-semibold"
    //       >
    //         https://leverpapers.onrender.com
    //       </a>
    //     </div>

    //     <div className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg p-4">
    //       <img
    //         src={shoe_website}
    //         alt="Project 1"
    //         className="h-20 w-20 rounded-full"
    //       />
    //       <h2 className="font-semibold text-lg">shoe-website-254</h2>
    //       <p className="my-8 font-normal text-base leading-5">
    //         E-commerce website template for shoes.
    //       </p>
    //       <a
    //         href="https://shoe-website-254.netlify.app/"
    //         className="text-md font-semibold"
    //       >
    //         https://shoe-website-254.netlify.app/
    //       </a>
    //     </div>

    //     <div className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg p-4">
    //       <img src={menu} alt="Project 1" className="h-20 w-20 rounded-full" />
    //       <h2 className="font-semibold text-lg">e-menu254</h2>
    //       <p className="my-8 font-normal text-base leading-5">
    //         Simple web based menu with search engine and filter.
    //       </p>
    //       <a
    //         href="https://e-menu254.netlify.app/"
    //         className="text-md font-semibold"
    //       >
    //         https://e-menu254.netlify.app/
    //       </a>
    //     </div>

    //     <div className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg p-4">
    //       <img
    //         src={cocktails}
    //         alt="Project 1"
    //         className="h-20 w-20 rounded-full"
    //       />
    //       <h2 className="font-semibold text-lg">Cocktails</h2>
    //       <p className="my-8 font-normal text-base leading-5">Cocktails API</p>
    //       <a
    //         href="https://mixmaster254.netlify.app/"
    //         className="text-md font-semibold"
    //       >
    //         https://mixmaster254.netlify.app/
    //       </a>
    //     </div>

    //     <div className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg p-4">
    //       <img
    //         src={grocery_254}
    //         alt="Project 1"
    //         className="h-20 w-20 rounded-full"
    //       />
    //       <h2 className="font-semibold text-lg">Grocery-254</h2>
    //       <p className="my-8 font-normal text-base leading-5">
    //         List implementations of shopping cart
    //       </p>
    //       <a
    //         href="https://grocery-254.netlify.app/"
    //         className="text-md font-semibold"
    //       >
    //         https://grocery-254.netlify.app/
    //       </a>
    //     </div>
    //   </div> */}
    // </div>

    <>
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <img src={profileImg} alt="" className="rounded-full w-32" />
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3">
          Hi! I'm Max Ajwang' <img src={handIcon} alt="" className="w-6" />
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] leading-tight">
          Fullstack Web Developer based in Nairobi
        </h1>
        <p className="max-w-2xl mx-auto leading-normal">
          I am a fullstack developer from Nairobi, Kenya with 7 years of
          experience in multiple IT roles like Software Development and Systems
          Administration.
          {/* and technical writing. I also write articles, make short
        videos, and build projects to share succinct knowledge and concepts on
        computer science and software development. */}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#contact"
            className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2"
          >
            Contact me
            <img src={rightArrow} alt="" className="w-4" />
          </a>

          <a
            href="../assets/downloads/max-ajwang-resume.pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white"
          >
            My Resume
            <img src={downloadIcon} alt="" className="w-4" />
          </a>
        </div>
      </div>

      {/* MY WORK */}
      <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg">My Portfolio</h4>
        <h2 className="text-center text-4xl">My Latest Work</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in web development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-10">
          <div
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${leverpapers})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2>Leverpapers</h2>
                <p>Full Stack Web App</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={sendIcon} alt="" className="w-5" />
              </div>
            </div>
          </div>

          <div
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${menu})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2>e-menu</h2>
                <p>Simple menu website</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={sendIcon} alt="" className="w-5" />
              </div>
            </div>
          </div>

          <div
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${shoe_website})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2>Shoe Website</h2>
                <p>E-commerce Website</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={sendIcon} alt="" className="w-5" />
              </div>
            </div>
          </div>

          <div
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${cocktails})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2>Cocktails</h2>
                <p>Cocktails API website</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={sendIcon} alt="" className="w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Landing;
