import logo from '../assets/images/logo.png';
import mailIcon from '../assets/images/mail_icon.png';

const Footer = () => {
  return (
    // <div className="section pt-2 pr-4 pb-4 pl-4 font-montserrat max-md:px-9">
    //   <footer className="footer">
    //     <div className="footer__social">
    //       <a href="#" className="footer__icon">
    //         <i className="bx bxl-linkedin"></i>
    //       </a>
    //       <a href="#" className="footer__icon">
    //         <i className="bx bxl-youtube"></i>
    //       </a>
    //       <a href="#" className="footer__icon">
    //         <i className="bx bxl-twitter"></i>
    //       </a>
    //       <a href="#" className="footer__icon">
    //         <i className="bx bxl-github"></i>
    //       </a>
    //     </div>
    //     <p className="text-sm font-normal">
    //       &#169; 2025 maxajwang. All rigths reserved
    //     </p>
    //   </footer>
    // </div>

    <footer className="mt-20">
      <div className="text-center">
        {/* <img src={logo} alt="" className="w-36 mx-auto mb-2" /> */}
        <h3 className="text-3xl font-bold">Max Ajwang'</h3>

        <div className="w-max flex items-center gap-2 mx-auto">
          <img src={mailIcon} alt="" className="w-6" />
          maxajwang@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&#169; 2025 Max Ajwang. All rigths reserved.</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="#" className="">
              <i className="bx bxl-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#" className="">
              <i className="bx bxl-youtube"></i>
            </a>
          </li>
          <li>
            <a href="#" className="">
              <i className="bx bxl-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="">
              <i className="bx bxl-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
