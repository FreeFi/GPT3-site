import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Мгновенное устранение конечных недоверий',
    text: 'Из них прекрасный Джон он дает из богатых он. Они стареют и рисуют миссис. Улучшение уровня недоверия может быть немедленно встречено аплодисментами.',
  },
  {
    title: 'Станьте желанным активным',
    text: 'Считается, что сочувствовать десяти редко случайной помощи недостаточно. Письмо о том, чтобы стать активным.',
  },
  {
    title: 'Сообщение или ничего',
    text: 'Привела спросить возможное отношение любовницы к еде, также обсуждая. По сообщению или по основному адресу.',
  },
  {
    title: 'Действительно мальчик закона графства',
    text: 'На самом деле мальчик закон округа она не в состоянии ее сестра. Ноги вы от него как шесть. Среди секса есть закон о отпуске, построенный сейчас. В построенном столе в быстром румянце..',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Будущее уже наступило, и вам просто нужно это осознать. Шагните в будущее уже сегодня. Просто сделайте это.</h1>
      <p>Запросите ранний доступ, чтобы начать</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
