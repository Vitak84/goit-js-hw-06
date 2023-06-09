const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('.change-color');
const nameColorRef = document.querySelector('.color')


btnRef.addEventListener('click', onBtnRefClick);

function onBtnRefClick (event) {
  bodyRef.style.backgroundColor = nameColorRef.textContent;

  nameColorRef.textContent = getRandomHexColor ();
}