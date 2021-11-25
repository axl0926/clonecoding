const sideNav=document.querySelector('nav#side_nav');
sideNav.style.height=window.innerHeight+'px';


let sideToggle=false;
const sideNavbtn = document.querySelector('.nav-menu-btn');


sideNavbtn.addEventListener('click',()=>{
    sideNav.style.left=0;
});
