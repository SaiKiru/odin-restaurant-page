import NavigationBar from "./navigation-bar";
import MenuTab from "./menu-tab";
import HomeTab from "./home-tab";
import './index.css';
import ContactUsTab from "./contact-us-tab";

const root = document.querySelector('#root');
const Tabs = {
  HOME: 'Home',
  MENU: 'Menu',
  CONTACT_US: 'Contact Us',
};

let initialTab = Tabs.HOME;

root.appendChild(NavigationBar(Tabs, initialTab, switchTab));
root.appendChild(HomeTab());

function switchTab(tab) {
  root.replaceChildren(...[
    NavigationBar(Tabs, tab, switchTab),
    (() => {
      switch (tab) {
        case Tabs.HOME: return HomeTab();
        case Tabs.MENU: return MenuTab();
        case Tabs.CONTACT_US: return ContactUsTab();
      }
    })()
  ]);
}
