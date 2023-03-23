const images = [
    '../img/avatars/first.svg',
    '../img/avatars/second.svg',
    '../img/avatars/third.svg',
    '../img/avatars/fourth.svg',
    '../img/avatars/fifth.svg',
];

const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];

document.getElementById('avatar').src = randomImage;