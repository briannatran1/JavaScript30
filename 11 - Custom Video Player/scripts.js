'use strict';

// get our elems
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// build our fns

/** pauses or plays video depending on current state */
function togglePlay() {
  if (video.paused) {
    video.play();
  }
  else {
    video.pause();
  }
}

/** changes play/pause button */
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

/** skips video */
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

/** updates range of volume or speed */
function handleRangeUpdate() {
  video[this.name] = this.value;
}

/** change progress of video */
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

/** skips to time of video when clicking on progress bar */
function scrub(evt) {
  const scrubTime = (evt.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (evt) => mousedown && scrub(evt));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);