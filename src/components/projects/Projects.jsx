import Slider from './NewSlider';
import s from './Projects.module.css';

const Projects = () => {
  return (
    <>
      <h1 id="projects" className={s.title}>
        Projects
      </h1>
      <div
        style={{ width: '80%', height: '600px', margin: '0 auto' }}
        data-aos="fade-down-left"
        data-aos-delay="300"
      >
        <Slider />
      </div>
    </>
  );
};

export default Projects;
