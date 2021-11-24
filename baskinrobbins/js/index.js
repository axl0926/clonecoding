

let searchToggle=true;
const searchBtn=document.querySelector('#search');
const searchGrp=document.querySelector('.search-group');
const searchBg=document.querySelector('.search-shadow-bg');

searchBtn.addEventListener('click',()=>{
    console.log(searchBtn);
    if(searchToggle){
        searchBtn.style.background='url(./img/btn_search_close.gif) no-repeat';
        // searchGrp.style.top='200px';
        // searchGrp.style.zIndex='555';
        // searchGrp.style.opacity='1';
        searchGrp.classList.add('search-active');
        searchBg.classList.add('search-active');
        searchToggle=!searchToggle;
    }
    else{
        searchBtn.style.background='url(./img/icon_search.png) no-repeat';
        searchGrp.classList.remove('search-active');
        searchBg.classList.remove('search-active');
        searchToggle=!searchToggle;
    }
});