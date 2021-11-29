/**
 * @filename    : starbucks/js/header.js
 * @author      : 송웅규
 * @description : <header>태그에서 요구하는 js 기능 모음
 */

//최상단 내비바 돋보기 버튼 클릭 시 width 변경 및 button태그에 type="submit"속성 추가 
const searchBtn = document.querySelector('.h-search-btn');
const searchInput = document.querySelector('.h-search-input');
searchBtn.addEventListener('click', () => {
    searchInput.style.display = 'inline-block';
    searchBtn.type = 'submit';
    setTimeout(() => {
        searchInput.style.width = '135px';
    }, 0);
});


//dropdown li에 마우스오버 시 해당 li 하위의 dropdown 내부요소 높이를 더해서 dropdown 높이로 지정 
const dNavs     = document.querySelectorAll('.dropdown-nav>ul>li');
const dropdown  = document.querySelectorAll('.dropdown-nav>ul>li .dropdown');
const dMain     = document.querySelectorAll('.dropdown-nav>ul>li .dropdown .d-main');
const dMainInner= document.querySelectorAll('.dropdown-nav>ul>li .dropdown .d-main-inner');
const dSub      = document.querySelectorAll('.dropdown-nav>ul>li .dropdown .d-sub');
const dSubInner = document.querySelectorAll('.dropdown-nav>ul>li .dropdown .d-sub-inner');

dNavs.forEach((e, i) => {
    e.addEventListener('mouseover', () => {
        dMain[i].style.height = dMainInner[i].offsetHeight + 'px';
        dSub[i].style.height = dSubInner[i].offsetHeight + 'px';
        dropdown[i].style.height =dMainInner[i].offsetHeight+dSubInner[i].offsetHeight+'px';
    });
    e.addEventListener('mouseout', () => {
        dMain[i].style.height = '0px';
        dSub[i].style.height='0px';
        dropdown[i].style.height ='0px';
    });
});

