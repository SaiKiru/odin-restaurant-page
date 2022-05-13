import './style.css';

export default function Address(
  streetNumber, streetName, city, province, telephoneNumber) {

  const address = document.createElement('div');
  const streetLine = document.createElement('div');
  const cityLine = document.createElement('div');
  const telephoneLine = document.createElement('div');

  streetLine.textContent = `${streetNumber} ${streetName}`;
  cityLine.textContent = `${city}, ${province}`;
  telephoneLine.textContent = telephoneNumber;

  address.appendChild(streetLine);
  address.appendChild(cityLine);
  address.appendChild(telephoneLine);

  address.classList.add('address-details');

  return address;
}
