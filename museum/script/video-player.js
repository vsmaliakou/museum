const activeItems = document.querySelectorAll('.video__slider-big_item');
const play = document.querySelector('.video__play_btn');
const controls = document.querySelector('.video__controls');
const toggle = controls.querySelector('.video__controls_play');
const progress = controls.querySelector('.video__controls_progress');
const volumeProgress = controls.querySelector('.video__controls_volume-progress');
const volume = controls.querySelector('.video__controls_volume');
const full = controls.querySelector('.video__controls_fs');
let video = document.querySelector('.viewer');

let ended = false;
progress.style.background = `linear-gradient(to right, #660606 0%, #660606 ${0}%, #fff ${0}%, #fff 100%)`;

function setCurrentVideo() {
  activeItems.forEach(item => {
    if(item.classList.contains('slick-active')){
      video = item.querySelector('.viewer');
    }
  });
}

function togglePlay() {
  setCurrentVideo();

  if(video.paused){
    video.play();
    play.classList.remove('video__play_btn') ;       
    toggle.classList.remove('video__controls_play');
    toggle.classList.add('video__controls_pause');
  } else {
    video.pause();
    play.classList.add('video__play_btn');
    toggle.classList.remove('video__controls_pause');
    toggle.classList.add('video__controls_play');
  }
}

function handleVolumeUpdate(){
  video.volume = this.value;
  volumeProgress.style.background = `linear-gradient(to right, #660606 0%, #660606 ${this.value * 100}%, #fff ${this.value * 100}%, #fff 100%)`;
}

function handleProgressClick(e) {
  video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

function rangePosition(range, value){
  return range.style.background = `linear-gradient(to right, #660606 0%, #660606 ${value}%, #fff ${value}%, #fff 100%)`;
}

function handleProgressChange() {
  rangePosition(progress, progress.value);
}

function handleProgress() {
  const percentDuration = (video.currentTime / video.duration) * 100;

  progress.value = percentDuration;

  rangePosition(progress, percentDuration);

  if (video.currentTime === video.duration && !ended) {
    handleEnd();
    ended = !ended;
  }
}

function handleEnd() {
  play.classList.add('video__play_btn');
  toggle.classList.remove('video__controls_pause');
  toggle.classList.add('video__controls_play');
  rangePosition(progress, 0);
  progress.value = 0;
}

function muteVideo() {
  video.muted = !video.muted;
  
  if (video.muted) {
    video.volume = 0;
    volumeProgress.value = 0;
    rangePosition(volumeProgress, video.volume * 100);
  } else {
    video.volume = 0.4;
    volumeProgress.value = 0.4;
    rangePosition(volumeProgress, video.volume * 100);
  }
}

play.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
volumeProgress.addEventListener("input", handleVolumeUpdate);
progress.addEventListener("click", handleProgressClick);
progress.addEventListener("input", handleProgressChange);
video.addEventListener('timeupdate', handleProgress);
volume.addEventListener('click', muteVideo);
full.addEventListener('click', function() {
  video.requestFullscreen();
});