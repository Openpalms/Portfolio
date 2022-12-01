const SkillsSection = () => {
  return (
    <div className="wrapper">
      <h3 className="Skills">My Skills</h3>
      <section className="columns">
        <div className="column">
          <h2>Redux</h2>
          <p>
            I think this this a really powerful and convenient state manager.
            One of my biggest PET-project is written with Redux. Although I love
            Redux-toolkit more as it is much easier comparing to default Redux
          </p>
        </div>
        <div className="column">
          <h2>React</h2>
          <p>
            Basically I'm using React everywhere. I fond of making beautiful web
            apps using this library.
          </p>
        </div>
      </section>
      <section className="columns">
        <div className="column">
          <h2>Typescript</h2>
          <p>
            New tool to me, but it already seems to be really comfy and
            powerful. Mirgating my biggest projects to .tsx now
          </p>
        </div>
        <div className="column">
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
