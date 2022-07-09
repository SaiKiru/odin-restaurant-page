import menu from '../data/menu.json';
import './style.css';

export default function MenuTab() {
  const menuTab = document.createElement('div');
  const menuDisplay = document.createElement('div');

  for (let coffee of menu) {
    const row = document.createElement('div');
    const coffeeNameDiv = document.createElement('div');
    const pricesDiv = document.createElement('div');

    coffeeNameDiv.textContent = coffee.name;

    for (let price in coffee.prices) {
      const priceDiv = document.createElement('div');
      priceDiv.textContent = coffee.prices[price].toFixed(2);

      pricesDiv.appendChild(priceDiv);
    }

    row.classList.add('menu-table-row');
    coffeeNameDiv.classList.add('menu-table-row-coffee-name');
    pricesDiv.classList.add('menu-table-row-prices');

    row.append(coffeeNameDiv, pricesDiv);

    menuDisplay.appendChild(row);
  }

  menuDisplay.id = 'menu-table';

  menuTab.classList.add('tab-page');
  menuTab.id = 'menu-tab';

  menuTab.appendChild(menuDisplay);

  return menuTab;
}
