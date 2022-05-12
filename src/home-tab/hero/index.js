import './style.css';

export default function Hero(mainHeading, subHeading) {
  const hero = document.createElement('div');
  const _mainHeading = document.createElement('div');
  const _subHeading = document.createElement('div');

  _mainHeading.textContent = mainHeading;
  _subHeading.textContent = subHeading;

  hero.classList.add('hero');
  _mainHeading.classList.add('main-heading');
  _subHeading.classList.add('sub-heading');

  hero.append(
    _mainHeading,
    _subHeading
  );

  return hero;
}
