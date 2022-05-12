import NavLink from "./nav-link";
import './style.css';

export default function NavigationBar(tabs, activeTab, switchTab) {
  const navigationBar = document.createElement('div');

  navigationBar.classList.add('navigation-bar');

  for (let tab in tabs) {
    navigationBar.appendChild(
      NavLink(tabs[tab], activeTab === tabs[tab], switchTab)
    );
  }

  return navigationBar;
}
