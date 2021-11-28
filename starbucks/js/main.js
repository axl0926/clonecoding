const mainImgs = document.querySelectorAll('.main-img');
const mainLink = document.querySelector('.main-wrap>a');
// main 내부 최상단 배너 이미지 순차적로딩 애니메이션  
window.addEventListener('load', () => {
    mainImgs[0].style.opacity = '1';
});
mainImgs.forEach((e, i) => {
    mainImgs[i].addEventListener('transitionend', () => {
        if (mainImgs.length - 1 > i) {
            mainImgs[i + 1].style.opacity = '1';
        } else {
            mainLink.style.opacity = '1';
        }
    });
});



// line-notice 공지사항 배너 

const lineNoticeLists = document.querySelectorAll('.notice-inner>ul>li');

let lineBannerTimer = setInterval(() => {
    const lineNoticeActive = document.querySelector('.line-notice-active');
    lineNoticeLists.forEach((e, i) => {
        if (e == lineNoticeActive) {
            lineNoticeLists[(i + 1) % 5].style.transform = 'translate(0,24px)';
            lineNoticeLists[(i + 1) % 5].classList.add('line-notice-active');
            lineNoticeLists[(i + 1) % 5].style.zIndex = '1';
            setTimeout(() => {
                lineNoticeLists[(i + 1) % 5].style.transform = 'translate(0,0px)';
                setTimeout(() => {
                    e.classList.remove('line-notice-active');
                    lineNoticeLists[(i + 1) % 5].style.zIndex = '0';
                }, 1500);
            }, 0);
        }
    });

}, 2000);