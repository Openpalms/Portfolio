import CV from '../../assets/CV.pdf';
import React from 'react';
import video from '../../videos/video.mp4';
import s from './Main.module.css';

const Main = () => {
  return (
    <div className={s.container}>
      <span className={s.info}>
        <h1>daniil,</h1>
        <p>Frontend developer</p>
        <button className={s.infoBtn}>
          <a href={CV} download>
            Dowload resume
          </a>
        </button>
        <button className={s.infoBtn}>
          <a href="https://t.me/Seemslegittt" target="_blank" rel="noreferrer">
            Contact me
          </a>
        </button>
      </span>
      <div className={s.mainBlock}></div>
      <video loop autoPlay muted className={s.overlay}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Main;
