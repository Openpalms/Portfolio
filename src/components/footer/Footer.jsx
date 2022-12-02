import s from './Footer.module.css';
import vk from '../../assets/vk.svg';
import telegram from '../../assets/tg.svg';
import codewars from '../../assets/codewars.svg';
import github from '../../assets/github.svg';
const Footer = () => {
  return (
    <footer className={s.siteFooter}>
      <h2>Follow me</h2>
      <div className={s.container}>
        <div className={s.row}>
          <a href="https://t.me/Seemslegittt" target="_blank" rel="noreferrer">
            <img src={telegram} alt="telegram" />
          </a>
        </div>
        <div className={s.row}>
          <a
            href="https://vk.com/myhighsmysobriety"
            target="_blank"
            rel="noreferrer"
          >
            <img src={vk} alt="vk" />
          </a>
        </div>
        <div className={s.row}>
          <a
            href="https://github.com/Openpalms"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" />
          </a>
        </div>
        <div className={s.row}>
          <a
            href="https://www.codewars.com/users/Openpalms"
            target="_blank"
            rel="noreferrer"
          >
            <img src={codewars} alt="codewars" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
