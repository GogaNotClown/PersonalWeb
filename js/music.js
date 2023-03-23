const audio = document.getElementById('audio');
const playButton = document.querySelector('.play');
const restartButton = document.querySelector('.restart');
let isPlaying = false;

playButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playButton.innerHTML = '<i class="ri-play-mini-fill"></i>';
    } else {
        audio.play();
        playButton.innerHTML = '<i class="ri-pause-mini-fill"></i>';
    }
    isPlaying = !isPlaying;
});

restartButton.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
    playButton.innerHTML = '<i class="ri-pause-mini-fill"></i>';
    isPlaying = true;
});