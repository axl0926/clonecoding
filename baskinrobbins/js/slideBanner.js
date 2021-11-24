const slideNavs=document.querySelectorAll('#banner_slide_toggle>li');
var lastSlideIndex=0;
let timerAutoSlide;
window.addEventListener('focus', ()=>{
    timerAutoSlide = setInterval(() => moveSlide(1, true), 5000);
});

window.addEventListener('blur', ()=>{
    clearInterval(timerAutoSlide);
});

slideNavs.forEach((e,i)=> {
    e.addEventListener('click',()=>{
        
        if(i>lastSlideIndex){

            console.log('slideIndex==='+lastSlideIndex);
            console.log('i==='+i);
            console.log(`${(5+i-lastSlideIndex)%5}칸 오른쪽으로 이동`);
            moveSlide(i-lastSlideIndex,true);
        }
        else if(i<lastSlideIndex){
            console.log('slideIndex==='+lastSlideIndex);
            console.log('i==='+i);
            console.log(`${(5-i+lastSlideIndex)%5}칸 왼쪽으로 이동`);
            moveSlide((5-i+lastSlideIndex)%5,false);
        }
    });
    e.addEventListener('mouseenter', () => {
        clearInterval(timerAutoSlide);
    });
    e.addEventListener('mouseleave', () => {

        timerAutoSlide = setInterval(() => moveSlide(1, true), 5000);
    });
});



function moveSlide(slideNum = 1, isNext = true) {
    const slideDir = isNext ? 1 : -1;
    const activeSlide = document.querySelector('.sl-active');
    const slideIndex = Number(activeSlide.classList[0].substr(8));
    const nextSlideIndex = (5 + slideIndex + slideDir * slideNum) % 5;
    const nextSlide = document.querySelector(`.sl-inner${nextSlideIndex}`);

    nextSlide.style.transition = 'transform 0s';
    nextSlide.style.transform = `translate(${slideDir*100}vw)`;
    setTimeout(() => {
        nextSlide.style.transition = 'transform 0.4s';
        nextSlide.style.transform = 'translate(0px)';
        activeSlide.style.transition = 'transform 0.4s';
        activeSlide.style.transform = `translate(${slideDir*-100}vw)`;
        setTimeout(() => {
            activeSlide.classList.remove('sl-active');
            nextSlide.classList.add('sl-active');
            slideNavs[slideIndex].classList.remove('sl-nav-active');
            slideNavs[nextSlideIndex].classList.add('sl-nav-active');
        }, 0);
    }, 0);
    lastSlideIndex=nextSlideIndex;
}