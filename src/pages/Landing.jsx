import {
  FaCss3,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import portraitImg from '../assets/images/portrait-1.jpg';
import leverpapers from '../assets/images/leverpapers.jpg';
import cocktails from '../assets/images/cocktails.jpg';
import menu from '../assets/images/menu.jpg';
import grocery_254 from '../assets/images/grocery_254.jpg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <div className="section pt-10 pr-4 pb-4 pl-12 min-h-full font-montserrat max-md:px-9 max-lg:px-11 max-xl:p-11 max-2xl:p-12">
        <div className="grid grid-cols-1 gap-4">
          <img
            src={portraitImg}
            alt="portrait"
            className="w-20 h-w-20 rounded-full"
          />
          <h2 className="text-3xl font-bold leading-10">
            Software Developer, and <br />
            Technical writer.
            <br />
          </h2>
          <p className="text-lg leading-6">
            I use writing, projects and videos to master and share succinct
            knowledge on computer science and software development concepts.
          </p>
        </div>

        <button className="button mt-6 mb-[--mb-1]">Join My Newsletter</button>

        <div className="flex justify-center items-center gap-8 mt-16 max-w-screen-2xl">
          <div className="h-auto w-auto bg-[var(--grey-9)] px-2 py-2 rounded-full">
            <Link>
              <FaReact className="text-3xl" />
            </Link>
          </div>
          <div className="h-auto w-auto bg-[var(--grey-9)] px-2 py-2 rounded-full">
            <Link>
              <FaNodeJs className="text-3xl" />
            </Link>
          </div>
          <div className="h-auto w-auto bg-[var(--grey-9)] px-2 py-2 rounded-full">
            <Link>
              <FaPython className="text-3xl" />
            </Link>
          </div>
          <div className="h-auto w-auto bg-[var(--grey-9)] px-2 py-2 rounded-full">
            <Link>
              <FaJava className="text-3xl" />
            </Link>
          </div>
        </div>

        {/* <div className="flex gap-6 justify-center items-center w-full bg-gray-50 border-2 border-gray-300 hover:bg-gray-200 mt-8 mb-8 rounded-lg p-4"> */}
        {/* <div className="mb-4"> */}
        {/* <input
            type="text"
            placeholder="email"
            className="px-4 border-2 border-gray-400 rounded-lg h-8"
          /> */}
        {/* </div> */}
        {/* <b className="button">Join</b> */}
        {/* </div> */}
        <div className="border-b-2 pb-6 mt-16">
          <h2 className="font-semibold text-xl">Projects</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 px-6 mt-16 mb-16 bg-white max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-2">
          <div className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg p-4">
            <img
              src={leverpapers}
              alt="Project 1"
              className="h-20 w-20 rounded-full"
            />
            <h2 className="font-semibold text-lg">Leverpapers</h2>
            <p className="my-8 text-sm font-normal leading-5">
              A CRUD API application for order management and status tracking
            </p>
            <a
              href="https://leverpapers.onrender.com"
              className="text-md font-semibold"
            >
              https://leverpapers.onrender.com
            </a>
          </div>

          <div className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg p-4">
            <img
              src={menu}
              alt="Project 1"
              className="h-20 w-20 rounded-full"
            />
            <h2 className="font-semibold text-lg">e-menu254</h2>
            <p className="my-8 text-sm font-normal leading-5">
              Simple web based menu with search engine and filter.
            </p>
            <a
              href="https://e-menu254.netlify.app/"
              className="text-md font-semibold"
            >
              https://e-menu254.netlify.app/
            </a>
          </div>

          <div className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg p-4">
            <img
              src={cocktails}
              alt="Project 1"
              className="h-20 w-20 rounded-full"
            />
            <h2 className="font-semibold text-lg">Cocktails</h2>
            <p className="my-8 text-sm font-normal leading-5">Cocktails API</p>
            <a
              href="https://mixmaster254.netlify.app/"
              className="text-md font-semibold"
            >
              https://mixmaster254.netlify.app/
            </a>
          </div>

          <div className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg p-4">
            <img
              src={grocery_254}
              alt="Project 1"
              className="h-20 w-20 rounded-full"
            />
            <h2 className="font-semibold text-lg">Grocery-254</h2>
            <p className="my-8 text-sm font-normal leading-5">
              List implementations of shopping cart
            </p>
            <a
              href="https://grocery-254.netlify.app/"
              className="text-md font-semibold"
            >
              https://grocery-254.netlify.app/
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Landing;
