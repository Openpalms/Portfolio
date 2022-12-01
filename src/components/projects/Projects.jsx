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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate esse reiciendis reprehenderit tenetur aspernatur est
              illum quibusdam? Excepturi, harum ab.
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
            <h2>Social Network</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate esse reiciendis reprehenderit tenetur aspernatur est
              illum quibusdam? Excepturi, harum ab.
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
            <h2>Social Network</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate esse reiciendis reprehenderit tenetur aspernatur est
              illum quibusdam? Excepturi, harum ab.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
