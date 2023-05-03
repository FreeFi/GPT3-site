import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Давайте Сделаем что-то удивительное с помощью GPT-3 OpenAI</h1>
      <p>Тем не менее, кровать любого туристического потворства неприятна. Не мысли все осуществлять благо. Снисхождение путь ко всему радость изменения бурной привязанности. Вечеринка мы лет на заказ разрешаем попросили.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Ваша электронная почта" />
        <button type="button">Начать</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="people" />
        <p>1,600 человек запросили доступ к посещению за последние 24 часа</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="ai" />
    </div>
  </div>
);

export default Header;
