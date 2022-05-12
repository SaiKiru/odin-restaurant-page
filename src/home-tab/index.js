import Hero from "./hero";
import CTA from "./cta";
import './style.css';

export default function HomeTab() {
  const homeTab = document.createElement('div');
  const hero = Hero('Cafè Vita', 'The best way to start your day');
  const cta = CTA('Want a drink?');

  homeTab.classList.add('tab-page');
  homeTab.id = 'home-tab';

  homeTab.appendChild(hero);
  homeTab.appendChild(cta);

  return homeTab;
}
