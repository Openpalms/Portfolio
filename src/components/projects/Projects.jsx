import s from './Projects.module.css';

const Projects = () => {
  return (
    <>
      <h1 className={s.title}>Projects</h1>
      <section className={s.container}>
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
      </section>
    </>
  );
};

export default Projects;
