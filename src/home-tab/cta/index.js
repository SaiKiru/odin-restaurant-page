import './style.css';

export default function CTA(message) {
  const cta = document.createElement('div');

  cta.classList.add('cta');
  cta.textContent = message;

  return cta;
}
