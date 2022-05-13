import Address from "./address";
import Hero from "./hero";
import PhotoCard from "./photo";
import './style.css';

export default function ContactUsTab() {
  const contactUsTab = document.createElement('div');
  const address = Address(
    '2002', 'Wake Street',
    'Buggy City', 'Benguet',
    '(213) 823-1657'
  );
  const hero = Hero(
    "We're right around the corner!",
    "Come find us at Wake Street in" +
    "\nBuggy City, Benguet." +
    "\n" +
    "\nWe're open from Mondays thru Fridays," +
    "\nfrom 7:30 AM to 9:30 PM." +
    "\n" +
    "\nSee you there!"
  );
  const photoCard = PhotoCard('../src/contact-us-tab/img/location.png');

  const flexbox = document.createElement('div');
  const flexboxLeft = document.createElement('div');
  const flexboxRight = document.createElement('div');

  contactUsTab.id = 'contact-us-tab';
  contactUsTab.classList.add('tab-page');
  flexbox.id = 'contact-us-flexbox';
  flexboxLeft.id = 'contact-us-flexbox-left';
  flexboxRight.id = 'contact-us-flexbox-right';

  contactUsTab.appendChild(flexbox);
  flexbox.appendChild(flexboxLeft);
  flexbox.appendChild(flexboxRight);
  flexboxLeft.appendChild(hero);
  flexboxLeft.appendChild(address);
  flexboxRight.appendChild(photoCard);

  return contactUsTab;
}
