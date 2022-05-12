import './style.css';

export default function NavLink(text, isActive, switchTab) {
  const navLink = document.createElement('a');

  navLink.classList.add('nav-link');
  if (isActive) navLink.classList.add('active');
  navLink.textContent = text;

  navLink.addEventListener('click', () => switchTab(text));

  return navLink;
}
