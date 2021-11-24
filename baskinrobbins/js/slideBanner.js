



const btns = document.querySelectorAll('#main_banner button');
const slideNavs = document.querySelectorAll('#banner_slide_toggle>li');
var lastSlideIndex = 0;
let timerAutoSlide;
let tmp = 0;
window.addEventListener('focus', () => {
    timerAutoSlide = setInterval(() => moveSlide(1, true), 4000);
});

window.addEventListener('blur', () => {
    clearInterval(timerAutoSlide);
});


slideNavs.forEach((e, i) => {
    e.addEventListener('click', () => {

        if (i > lastSlideIndex) {
            moveSlide(i - lastSlideIndex, true);
        } else if (i < lastSlideIndex) {
            moveSlide((5 - i + lastSlideIndex) % 5, false);
        }
    });
    e.addEventListener('mouseenter', () => {
        clearInterval(timerAutoSlide);
    });
    e.addEventListener('mouseleave', () => {

        timerAutoSlide = setInterval(() => moveSlide(1, true), 4000);
    });
});



function moveSlide(slideNum = 1, isNext = true) {
    const slideDir = isNext ? 1 : -1;
    const activeSlide = document.querySelector('.sl-active');
    const slideIndex = Number(activeSlide.classList[0].substr(8));
    const nextSlideIndex = (5 + slideIndex + slideDir * slideNum) % 5;
    const nextSlide = document.querySelector(`.sl-inner${nextSlideIndex}`);
    tmp++;
    console.log(`${tmp}회 반복시작------------------------------------`);

    nextSlide.style.transition = 'transform 0s';
    nextSlide.style.transform = `translate(${slideDir*100}vw)`;
    console.log(`다음 슬라이드 위치 ${slideDir*100}vw`);
    setTimeout(() => {
        nextSlide.style.transition = 'transform 0.4s';
        nextSlide.style.transform = 'translate(0px)';

        console.log(`다음 슬라이드 위치 뷰포트로 이동`);
        activeSlide.style.transition = 'transform 0.4s';
        activeSlide.style.transform = `translate(${slideDir*-100}vw)`;
        console.log(`현재 슬라이드 위치${slideDir*-100}으로 이동`);
        setTimeout(() => {
            activeSlide.classList.remove('sl-active');
            nextSlide.classList.add('sl-active');
            console.log(`현재 슬라이드 클래스 리스트${activeSlide.classList}`);
            console.log(`다음 슬라이드 클래스 리스트${nextSlide.classList}`);
            slideNavs[slideIndex].classList.remove('sl-nav-active');
            slideNavs[nextSlideIndex].classList.add('sl-nav-active');
            console.log(`${tmp}회 반복종료--------------------------------------------`);
        }, 0);
    }, 0);
    lastSlideIndex = nextSlideIndex;

}


