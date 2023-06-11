/*======================================== MENU SHOW Y HIDDEN =================================*/
const navmenu =document.getElementById('nav-menu')
navtoggle = document.getElementById('nav-toogle')
navclose = document.  getElementById('nav-close')
var navItems = document.querySelectorAll(".nav-item");
for (var i = 0; i < navItems.length; i++) {
   navItems[i].addEventListener("click", function() {
      this.classList.add("active");
   });
}

/*=========== MENU SHOW ================*/
/* VALIDATE IF CONSTANT EXISTS */
if(navtoggle)
    navtoggle.addEventlistener('click',() =>{
        navmenu.classList.add(show-menu)
        var navItems = document.querySelectorAll(".nav-item");
for (var i = 0; i < navItems.length; i++) {
   navItems[i].addEventListener("click", function() {
      this.classList.add("active");
   });
}
})

/*============== MENU HIDDEN  ==================*/
/* VALIDATE IF CONSTANT EXISTS */
if(navclose)
    navclose.addEventlistener('click', () =>{
        navmenu.classList.remove('show-menu')
        var navItems = document.querySelectorAll(".nav-item");
for (var i = 0; i < navItems.length; i++) {
   navItems[i].addEventListener("click", function() {
      this.classList.add("active");
   });
}
})

/*======================================== REMOVE MENU MOBILE =================================*/
const navlink = document.querySelectorAll('.nav__link')

function linkaction(){
    const navmenu = document.getElementById('nav_menu')
    // when we click on each nav__link, we remove the show-menu class
    navmenu.classList. remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkaction))

/*======================================== ACCORDION SKILLS =================================*/
const skillscontent = document.getElementsByClassName('skills__content')
skillsheader = document.querySelectorAll('skills__header')

function togglesskills(){
    let itemclass = this.parentnode.getElementsByClassName

    for(i = 0; i < skillscontent.length; i++){
        skillscontent[i].className = 'skills__content skills__close'
    }
    if(itemclass == 'skills__content skills__close'){
        this.parentnode.className = 'skills__content skills__open'
    }
}
skillsheader.forEach((el) =>{
    el.addEventListener('click', togglesskills)
})
/*======================================== QUALIFICATION TABS=================================*/
const tab = document.querySelectorAll('[data-target]'),
       tabcontents = document.querySelectorAll('[data-content]')

 tab.forEach(tab =>{
     tab.addEventlistener('click', () =>{
     const target = document.querySelector(tab.dataset.target)

tabcontents.forEach(tabcontent =>{
tabcontent.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')

tab.forEach(tab =>{
tab.classList.remove('qualification__active')
})
tab.classList.add('qualification__active')
     })

       })

/*======================================== SERVICES MODAL=================================*/
const modalView = document.querySelectorAll('.services__modal'),
      modalBtn = document.querySelectorAll('.services__button'),
     modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtn.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click',() =>[
        modalView.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    ])
})
/*======================================== MENU SHOW Y HIDDEN =================================*/