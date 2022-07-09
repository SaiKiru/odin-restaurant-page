import './style.css';

export default function PhotoCard(image) {
  const photoCard = new Image();

  photoCard.src = image;
  photoCard.classList.add('photo-card');

  return photoCard;
}
