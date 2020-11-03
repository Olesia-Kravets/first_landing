const arrowPrev = document.getElementById('arrow_prev');
const arrowNext = document.getElementById('arrow_next');
const slides = document.querySelectorAll('.slide');
const sliderLinks = document.querySelectorAll('.slider_photo_link');
const dots = document.querySelectorAll('.dot');

const btnPrevMobile = document.getElementById('btn_prev');
const btnNextMobile = document.getElementById('btn_next');

let index = 0;


const setActiveSlide = n => {
    for(let slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const setActiveLink = n => {
    for(let link of sliderLinks){
        link.classList.remove('active');
    }
    sliderLinks[n].classList.add('active');
}

const setActiveDot = n => {
    for(let dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const showSlide = (i) => {
    setActiveSlide(i);
    setActiveLink(i);
    setActiveDot(i);
}

const nextSlide = () => {
    if(index === slides.length - 1) {
        index = 0;
        showSlide(index);
    } else {
        index ++;
        showSlide(index);
    }
}

const prevSlide = () => {
    if(index === 0) {
        index = slides.length - 1;
        showSlide(index);
    } else {
        index --;
        showSlide(index);
    }
}

dots.forEach((itemDot, indexDot) => {
    itemDot.addEventListener('click', () => {
        index = indexDot;
        showSlide(index);
    })
})

sliderLinks.forEach((itemLink, indexLink) => {
    itemLink.addEventListener('click', () => {
        index = indexLink;
        showSlide(index);
    })
})

arrowNext.addEventListener('click', nextSlide);
arrowPrev.addEventListener('click', prevSlide);

btnNextMobile.addEventListener('click', nextSlide);
btnPrevMobile.addEventListener('click', prevSlide);



// для экранов max-width: 575px 

// const nextSlideMobile = () => {
//     if(index === slides.length - 1) {
//         index = 0;
//         setActiveSlide(index);
//     } else {
//         index ++;
//         setActiveSlide(index);
//     }
// }

// const prevSlideMobile = () => {
//     if(index === 0) {
//         index = slides.length - 1;
//         setActiveSlide(index);
//     } else {
//         index --;
//         setActiveSlide(index);
//     }
// }

// btnNextMobile.addEventListener('click', nextSlideMobile);
// btnPrevMobile.addEventListener('click', prevSlideMobile);
