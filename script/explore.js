const slider = document.getElementsByClassName('explore__slider-container')[0];
const before = document.getElementsByClassName('explore__slider-before')[0];
const beforeImage = before.getElementsByClassName('explore__slider-before-img')[0];
const resizer = document.getElementsByClassName('explore__slider-resizer')[0];

let active = false;

document.addEventListener("DOMContentLoaded", function() {
  let width = slider.offsetWidth;
  beforeImage.style.width = width + 'px';
});

window.addEventListener('resize', function() {
  let width = slider.offsetWidth;
  beforeImage.style.width = width + 'px';
})

resizer.addEventListener('mousedown',function(){
  active = true;
  resizer.classList.add('resize');
});

document.body.addEventListener('mouseup',function(){
  active = false;
  resizer.classList.remove('resize');
});

document.body.addEventListener('mouseleave', function() {
  active = false;
  resizer.classList.remove('resize');
});

document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  let x = e.pageX;
  x -= slider.getBoundingClientRect().left;
  slideIt(x);
  pauseEvent(e);
});

resizer.addEventListener('touchstart',function(){
  active = true;
  resizer.classList.add('resize');
});

document.body.addEventListener('touchend',function(){
  active = false;
  resizer.classList.remove('resize');
});

document.body.addEventListener('touchcancel',function(){
  active = false;
  resizer.classList.remove('resize');
});

document.body.addEventListener('touchmove',function(e){
  if (!active) return;
  let x;
  
  for (let i=0; i < e.changedTouches.length; i++) {
    x = e.changedTouches[i].pageX; 
  }

  x -= slider.getBoundingClientRect().left;

  slideIt(x);
  pauseEvent(e);
});

function slideIt(x){
  let transform = Math.max(0,(Math.min(x,slider.offsetWidth)));
  before.style.width = transform+"px";
  resizer.style.left = transform-0+"px";
}

function pauseEvent(e){
  e.stopPropagation();
  e.preventDefault();
  e.cancelBubble=true;
  e.returnValue=false;
  return false;
}