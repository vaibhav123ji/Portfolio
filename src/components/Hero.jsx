import "./Hero.css";
// import myimage from "../assets/profile.png";
import resume from "../assets/resume.pdf";
import myphoto from "../assets/Photos/main.jpeg"
function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h4>Hello, I'm</h4>

        <h1>Vaibhav</h1>

        <h2>Frontend Developer</h2>

        <p>
          I create responsive, modern, and user-friendly websites using
          HTML, CSS, JavaScript, and React. I love building clean UI and
          improving user experiences.
        </p>

        <div className="hero-buttons">
          <a href={resume} download>
            <button className="btn">Download CV</button>
          </a>

          <a href="#contact">
            <button className="btn btn-outline">Hire Me</button>
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src={myphoto} alt="Vaibhav" />
      </div>
    </section>
  );
}

export default Hero;