const evNavs = document.querySelectorAll('#event_slide_toggle>li');

var evSlIndex = 0;

evNavs.forEach((e, i) => {
    e.addEventListener('click', () => {
        if (evSlIndex != i) {
            mvEvSlide(i);
        }
    });
});



function mvEvSlide(nextSlideIndex) {

    let dir = evSlIndex > nextSlideIndex ? -1 : 1;
    const activeSlide = document.querySelector('.ev-sl-active');
    const nextSlide = document.querySelector(`.event_list${nextSlideIndex}`);
    console.log(`현재슬라이드 인덱스${evSlIndex}`);
    console.log(`다음슬라이드 인덱스${nextSlideIndex}`);

    
    nextSlide.style.transition = 'transform 0s';
    nextSlide.style.transform = `translate(${dir*1200}px)`;
    setTimeout(() => {
        nextSlide.style.transition = 'transform 0.5s';
        nextSlide.style.transform = `translate(0px)`;
        activeSlide.style.transition = 'transform 0.5s';
        activeSlide.style.transform = `translate(${dir*-1200}px)`;
        setTimeout(() => {
            activeSlide.classList.remove('ev-sl-active');
            nextSlide.classList.add('ev-sl-active');
        }, 0);
    }, 0);
    evNavs[nextSlideIndex].classList.add('ev-nav-active');
    evNavs[evSlIndex].classList.remove('ev-nav-active');
    evSlIndex = nextSlideIndex;
}