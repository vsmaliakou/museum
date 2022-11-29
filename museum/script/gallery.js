const pictures = [
  {src: `assets/img/gallery/galery1.webp`, alt: `gallery1`},
  {src: `assets/img/gallery/galery2.webp`, alt: `gallery2`},
  {src: `assets/img/gallery/galery3.webp`, alt: `gallery3`},
  {src: `assets/img/gallery/galery4.webp`, alt: `gallery4`},
  {src: `assets/img/gallery/galery5.webp`, alt: `gallery5`},
  {src: `assets/img/gallery/galery6.webp`, alt: `gallery6`},
  {src: `assets/img/gallery/galery7.webp`, alt: `gallery7`},
  {src: `assets/img/gallery/galery8.webp`, alt: `gallery8`},
  {src: `assets/img/gallery/galery9.webp`, alt: `gallery9`},
  {src: `assets/img/gallery/galery10.webp`, alt: `gallery10`},
  {src: `assets/img/gallery/galery11.webp`, alt: `gallery11`},
  {src: `assets/img/gallery/galery12.webp`, alt: `gallery12`},
  {src: `assets/img/gallery/galery13.webp`, alt: `gallery13`},
  {src: `assets/img/gallery/galery14.webp`, alt: `gallery14`},
  {src: `assets/img/gallery/galery15.webp`, alt: `gallery15`},
];

const galleryPictureInner = document.querySelector('.gallery__picture_inner');

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

shuffle(pictures).map(p => {
  const img = document.createElement('img');
  img.classList.add('gallery__img');
  img.classList.add('anim-items');
  img.src = p.src;
  img.alt = p.alt;
  galleryPictureInner.append(img);
})

const animItems = document.querySelectorAll('.anim-items');

if(animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll(){
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 5;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if(animItemHeight > window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('gallery__img_active');
      } else {
        if(!animItem.classList.contains('anim-no-hide')){
          animItem.classList.remove('gallery__img_active');
        }
      }
    }
  }
  function offset(el){
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
  }
}
