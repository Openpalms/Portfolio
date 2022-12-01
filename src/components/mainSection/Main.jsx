import React from 'react';
import video from '../../videos/video.mp4';
import s from './Main.module.css';
const Main = () => {
  return (
    <div className={s.container}>
      <span className={s.info}>
        <h1>daniil,</h1>
        <p>Frontend developer</p>
        <button className={s.infoBtn}>Dowload resume</button>
        <button className={s.infoBtn}>Contact me</button>
      </span>
      <div className={s.mainBlock}></div>
      <video loop autoPlay muted className={s.overlay}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Main;
