const player = document.querySelector('.player'),
      video = player.querySelector('.viewer'),
      progress = player.querySelector('.progress'),
      progressBar = player.querySelector('.progress__filled'),
      toggle = player.querySelector('.toggle'),
      skipButtons = player.querySelectorAll('[data-skip]'),
      ranges = player.querySelectorAll('.player__slider');

const togglePlay = () => (video[video.paused ? 'play' : 'pause']());
const updateButton = () => toggle.textContent = video.paused ? '►' : '❚ ❚';
const handleProgress = () => progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
const scrub = (e) => video.currentTime = ((e.offsetX / progress.offsetWidth) * video.duration);

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

progress.addEventListener('click', scrub);

for (const button of skipButtons) {
  button.addEventListener('click', () => video.currentTime += parseFloat(button.dataset.skip));
}

for (const range of ranges) {
  range.addEventListener('change', () => {
    console.log(range.name, range.value);
    video[range.name] = range.value;
  });
}
