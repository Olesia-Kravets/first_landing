const arrowPrev = document.getElementById('arrow_prev');
const arrowNext = document.getElementById('arrow_next');
const slides = document.querySelectorAll('.slide');
const sliderLinks = document.querySelectorAll('.slider_photo_link');
const dots = document.querySelectorAll('.dot');

const btnPrevMobile = document.getElementById('btn_prev');
const btnNextMobile = document.getElementById('btn_next');

let index = 0;


const activeSlide = n => {
    for(let slide of slides){
        slide.classList.remove('active');
        slides[n].classList.add('active');
    }
}

const activeLink = n => {
    for(let link of sliderLinks){
        link.classList.remove('active');
        sliderLinks[n].classList.add('active');
    }
}

const activeDot = n => {
    for(let dot of dots){
        dot.classList.remove('active');
        dots[n].classList.add('active');
    }
}

const showSlide = (i) => {
    activeSlide(i);
    activeLink(i);
    activeDot(i);
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

// для экранов max-width: 575px 

const nextSlideMobile = () => {
    if(index === slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index ++;
        activeSlide(index);
    }
}

const prevSlideMobile = () => {
    if(index === 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index --;
        activeSlide(index);
    }
}

btnNextMobile.addEventListener('click', nextSlideMobile);
btnPrevMobile.addEventListener('click', prevSlideMobile);
