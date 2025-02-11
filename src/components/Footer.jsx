const Footer = () => {
  return (
    <div className="section pt-2 pr-4 pb-4 pl-4 font-montserrat max-md:px-9">
      <footer className="footer">
        <div className="footer__social">
          <a href="#" class="footer__icon">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="#" class="footer__icon">
            <i className="bx bxl-youtube"></i>
          </a>
          <a href="#" class="footer__icon">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" class="footer__icon">
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <p className="text-sm font-normal">
          &#169; 2025 maxajwang. All rigths reserved
        </p>
      </footer>
    </div>
  );
};
export default Footer;
