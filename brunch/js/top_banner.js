let topToggle = false;
const topBanner = document.querySelector('.top-banner');

window.addEventListener('wheel', (e) => {

    if (topToggle == false && window.scrollY == 0 && e.deltaY < 0) {
        topToggle = true;
        topBanner.style.transition="margin 1s";
        topBanner.style.marginTop = "0px";
    }
    if (topToggle == true && window.scrollY > 300) {
        window.scrollTo(window.scrollX, window.scrollY + 800);
        topToggle = false;
        topBanner.style.transition="none";
        topBanner.style.marginTop = "-420px";
    }
})