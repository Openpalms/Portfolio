import s from './Projects.module.css';
import ImageSlider from './Slider';

const Projects = () => {
  const slides = [
    {
      url: 'https://res.cloudinary.com/dtpgi0zck/image/upload/s--zOSmBEhk--/c_fit,h_580,w_860/v1/EducationHub/photos/pebble-beach.jpg',
      title: 'beach',
    },
    {
      url: 'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
      title: 'beach',
    },
    {
      url: 'https://res.cloudinary.com/dtpgi0zck/image/upload/s--zOSmBEhk--/c_fit,h_580,w_860/v1/EducationHub/photos/pebble-beach.jpg',
      title: 'beach',
    },
    {
      url: 'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
      title: 'beach',
    },
    {
      url: 'https://res.cloudinary.com/dtpgi0zck/image/upload/s--zOSmBEhk--/c_fit,h_580,w_860/v1/EducationHub/photos/pebble-beach.jpg',
      title: 'beach',
    },
  ];
  return (
    <>
      <h1 className={s.title}>Projects</h1>
      {/* <section className={s.container}>
        <div className={s.card}>
          <div className={s.imgBox}>
            <img
              src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej.png"
              alt=""
              className={s.image}
            />
          </div>
          <div className={s.content}>
            <h2>Social Network</h2>
            <p>
              Facebook/vk copy. Build with React, redux, typescript. Styled with
              Bootstrap 5. It's currently using 3rd party API, but soon I'll use
              firebase for storing profiles, messages, etc. It is still in
              progress.
            </p>
          </div>
        </div>
        <div className={s.card}>
          <div className={s.imgBox}>
            <img
              src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej.png"
              alt=""
              className={s.image}
            />
          </div>
          <div className={s.content}>
            <h2>Todo list</h2>
            <p>
              I decided to create Todo list using some cool feautures so it will
              not be usual simple project. So it's storing data in realtime
              database, todos are draggable and have some more cool feautures.
              However, styling is still in progress.
            </p>
          </div>
        </div>
        <div className={s.card}>
          <div className={s.imgBox}>
            <img
              src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej.png"
              alt=""
              className={s.image}
            />
          </div>
          <div className={s.content}>
            <h2>Meetings</h2>
            <p>
              Tinder clone built from scratch with own server on Node.Js using
              MongoDB to store data and register/login users.
            </p>
          </div>
        </div>
      </section> */}
      <div style={{ width: '80%', height: '600px', margin: '0 auto' }}>
        <ImageSlider slides={slides} />
      </div>
    </>
  );
};

export default Projects;
