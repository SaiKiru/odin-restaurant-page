import './style.css';

export default function PhotoCard(image) {
  const photoCard = document.createElement('img');

  photoCard.setAttribute('src', image);
  photoCard.classList.add('photo-card');

  return photoCard;
}
