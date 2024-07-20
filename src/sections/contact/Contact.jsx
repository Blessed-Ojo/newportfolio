import "./contact.scss";
import { FaMouse,FaPaperPlane } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="Contact">
      <div className="icon">
        <FaMouse className="mouse" size={30} />
        <div className="vertical-line"></div>
      </div>
      <div className="contactt">
        <h1>Contact</h1>
        <hr />
        <p>I’m currently available for freelance work</p>
      </div>
      <div className="input-text">
        <span> Send me a message</span>
      </div>
      <form action="">
        <div className="top">
          <div className="forms">
            <label htmlFor="your name">your name*</label>
            <input type="text" name="your name" id="your name" placeholder="your name*" required />
          </div>
          <div className="forms">
            <label htmlFor="your email">your email*</label>
            <input type="email" id="your email" name="your email" placeholder="your email*" required />
          </div>
        </div>
        <div className="forms-t">
          <label htmlFor="your message">your message*</label>
          <textarea name="your message" id="your message" placeholder="Enter your needs" />
        </div>
        <button type="submit">Send Message <FaPaperPlane/></button>
      </form>
    </div>
  );
};

export default Contact;
