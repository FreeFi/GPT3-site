import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Вы хотите шагнуть в будущее раньше других?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Запросить ранний доступ</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> Все права защищены</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Ссылки</h4>
        <p>Овероны</p>
        <p>Социальные Медиа</p>
        <p>Счетчики</p>
        <p>Контакты</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Компания</h4>
        <p>Условия </p>
        <p>Политика конфиденциальности</p>
        <p>Контакты</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Связаться с нами</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. Все права защищены.</p>
    </div>
  </div>
);

export default Footer;
