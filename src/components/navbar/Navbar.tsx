import React from 'react';
import s from './Navbar.module.css';
const Navbar = () => {
  return (
    <div className={s.links}>
      <a href="#" className={s.mainText} smooth>
        galochkin
      </a>
      <nav>
        <ul className={s.list}>
          <li>
            <a href="#skills">&lt;Skills /&gt;</a>
          </li>
          <li>
            <a href="#">&lt;Portfolio /&gt;</a>
          </li>
          <li>
            <a href="#">&lt;Contacts /&gt;</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
