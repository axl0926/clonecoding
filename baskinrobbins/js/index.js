var body = document.body,
    html = document.documentElement;

var domHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

document.querySelector('.search-shadow-bg').style.height=domHeight+'px';

let searchToggle=true;
const searchBtn=document.querySelector('#search');
const searchGrp=document.querySelector('.search-group');
const searchBg=document.querySelector('.search-shadow-bg');
const nav=document.querySelector('nav');

searchBtn.addEventListener('click',()=>{
    console.log(searchBtn);
    if(searchToggle){
        searchBtn.style.background='url(./img/btn_search_close.gif) no-repeat';
        // searchGrp.style.top='200px';
        // searchGrp.style.zIndex='555';
        // searchGrp.style.opacity='1';
        searchGrp.classList.add('search-active');
        searchBg.classList.add('search-active');
        nav.classList.add('no-hover');

        searchToggle=!searchToggle;
    }
    else{
        searchBtn.style.background='url(./img/icon_search.png) no-repeat';
        searchGrp.classList.remove('search-active');
        searchBg.classList.remove('search-active');
        nav.classList.remove('no-hover');
        searchToggle=!searchToggle;
    }
});


const searchHashtagBtn=document.querySelectorAll('.search-hashtag-fav button');
const inputHashtag=document.querySelector('#hashtag');

searchHashtagBtn.forEach((e,i)=>{
    e.addEventListener('click',ev=>{
        ev.preventDefault();
        inputHashtag.value=searchHashtagBtn[i].innerHTML;
    });
});