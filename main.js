'use strict';

//Make Navbar 

var navbar = document.querySelector('#navbar');
var navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', function(){
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});


// 버튼 클릭시 해당하는 메뉴 이동

var navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', function(e){
    
    var target = e.target;
    var link = target.dataset.link;

    if (link == null){

        return;

    }

    scrollIntoView(link);

});

// 햄버거 버튼 클릭시 메뉴 나오게 하기

var navbarToggleBtn = document.querySelector('.navbar__toggle-btn');

navbarToggleBtn.addEventListener('click', function(){
    
    navbarMenu.classList.toggle('open');

});


var homeProfillBtn = document.querySelector('#home__profill');

homeProfillBtn.addEventListener('click', function(){

    scrollIntoView('#footer');

    
});

//스크롤을 하면 홈 컨테이너가 투명해지기

var home = document.querySelector('.home__container');

var homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', function(){

    home.style.opacity = 1 - window.scrollY / homeHeight;

});

// 화살표 버튼을 누르면 탑 올라가기

var arrowUp = document.querySelector('.arrow-up')

document.addEventListener('scroll', function(){
    
    if(window.scrollY > homeHeight / 2) {

        arrowUp.classList.add('visible');
    
    }else{
        
        arrowUp.classList.remove('visible');
    
    }
    
});

arrowUp.addEventListener('click', function(){

    scrollIntoView('#home')

});

//프로젝트

var proBtnContainer = document.querySelector('.project_categories');

var projectWork = document.querySelector('.project_work');

var projects = document.querySelectorAll(".project");

proBtnContainer.addEventListener('click', function(e){
    
    var filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

    if(filter == null){
        return
    }

    // 버튼 클릭 시 색깔 유지

    var active = document.querySelector('.category__btn.selected');

    if(active !== null){
        
        active.classList.remove('selected'); 
    }


    e.target.classList.add('selected');


    projectWork.classList.add('anim-out')
    
    setTimeout(function(){

        projects.forEach(function(project) {

            if(filter === '*' || filter === project.dataset.type){
    
                project.classList.remove('invisible');
    
            }else{
    
                project.classList.add('invisible');
    
            };
        });

        projectWork.classList.remove('anim-out');

    },300);


});




function scrollIntoView(S) {
    
    var scrollTo = document.querySelector(S);

    scrollTo.scrollIntoView({behavior:'smooth'});

};








