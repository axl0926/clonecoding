const searchBtn = document.querySelector('.h-search-btn');
const searchInput = document.querySelector('.h-search-input');
searchBtn.addEventListener('click', () => {
    searchInput.style.display = 'inline-block';
    searchBtn.type = 'submit';
    setTimeout(() => {
        searchInput.style.width = '135px';
    }, 0);
});

const dNavs = document.querySelectorAll('.dropdown-nav>ul>li');
const dropdown = document.querySelectorAll('.dropdown-nav>ul>li .dropdown');
const dMain = document.querySelectorAll('.dropdown-nav>ul>li .dropdown .d-main');
const dMainInner = document.querySelectorAll('.dropdown-nav>ul>li .dropdown .d-main-inner');
const dSub=document.querySelectorAll('.dropdown-nav>ul>li .dropdown .d-sub');
const dSubInner = document.querySelectorAll('.dropdown-nav>ul>li .dropdown .d-sub-inner');

dNavs.forEach((e, i) => {
    e.addEventListener('mouseover', () => {
        dMain[i].style.height = dMainInner[i].offsetHeight + 'px';
        dSub[i].style.height = dSubInner[i].offsetHeight + 'px';
        dropdown[i].style.height =dMainInner[i].offsetHeight+dSubInner[i].offsetHeight+'px';
        console.log(dMainInner[i].offsetHeight);
        console.log(dSubInner[i].offsetHeight);
        console.log(dropdown[i].style.height);
    });
    e.addEventListener('mouseout', () => {
        dMain[i].style.height = '0px';
        dSub[i].style.height='0px';
        dropdown[i].style.height ='0px';
    });
});