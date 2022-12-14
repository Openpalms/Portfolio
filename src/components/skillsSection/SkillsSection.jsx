import s from './SkillsSection.module.css';
const SkillsSection = () => {
  return (
    <div className={s.wrapper} id="skills" data-aos="fade" data-aos-delay="200">
      <h3 className={s.skills}>My Skills</h3>
      <section className={s.columns}>
        <div className={s.column} data-aos="slide-right" data-aos-delay="100">
          <h2>Redux</h2>
          <p>
            I think this this a really powerful and convenient state manager.
            One of my biggest PET-project is written with Redux. Although I love
            Redux-toolkit more as it is much easier comparing to default Redux
          </p>
        </div>
        <div className={s.column} data-aos="slide-left" data-aos-delay="100">
          <h2>React</h2>
          <p>
            Basically I'm using React everywhere. I fond of making beautiful web
            apps using this library.
          </p>
        </div>
      </section>
      <section className={s.columns}>
        <div className={s.column} data-aos="slide-right" data-aos-delay="100">
          <h2>Typescript</h2>
          <p>
            New tool to me, but it already seems to be really comfy and
            powerful. Mirgating my biggest projects to .tsx now
          </p>
        </div>
        <div className={s.column} data-aos="slide-left" data-aos-delay="100">
          <h2>MongoDB / Firebase</h2>
          <p>
            I used Mongo as database for my tinder Clone, It felt really smooth,
            loved it.
            <br />
            Firestore and Realtime DB is used by me everywhere since I found out
            about it
          </p>
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
