import "./about.scss";
import { FaMouse } from 'react-icons/fa';
const About = () => {
  return (
    <div className="About">
       
      <div class="about-me">
      <div className="mouse">
        <FaMouse className="mouse-icon" size={30} color="#12F7D6" />
        <div class="vertical-line"></div>
       </div>
        <h1 className="h1">About Me</h1>
        <div className="a-text">
          <span>{'<p>'}</span>
           <h1>Hello!</h1>
          <p>
            My name is Prince and I specialize in web development that
            utilizes <span>HTML</span>, <span>CSS</span>, <span>JS</span>, <span>SASS</span>, <span>TAILWIND</span> and <span>REACT</span>.
          </p>
          <p>
            My goal is to create a <span>website</span> that is both visually appealing and
            <span>functional</span>.
          </p>
          <p>
            My hobbies include playing <span>video games</span>, watching anime, and reading
            manga.
          </p>
          <p>
            I like to have my perspective and belief systems challenged so that
            I see the world through new eyes.
          </p>
          <span>{'</p>'}</span>
        </div>
      </div>
      <div class="about-me-image">
        <img src="about.png" alt="" />
      </div>
    </div>
  );
};

export default About;
