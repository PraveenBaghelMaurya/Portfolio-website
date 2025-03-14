import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:praveenbaghelmaurya@gmail.com" data-cursor="disable">
                praveenbaghelmaurya@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919958545704" data-cursor="disable">
                +91 9958545704
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/PraveenBaghelMaurya"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/praveen-kumar-847808208/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/u/praveenbaghelmaurya/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Praveen Kumar</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
