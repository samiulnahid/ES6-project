

/*==================== MENU SHOW Y HIDDEN ====================*/

let  navMenu = document.getElementById('nav-menu');
 let   navToggle = document.getElementById('nav-toggle');
  let  navClose = document.getElementById('nav-close');


/*===== MENU SHOW =====*/
/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu");
        
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if(navClose){
    navClose.addEventListener("click",()=>{

        navMenu.classList.remove("show-menu");
        //console.log("sdd");

    })
}


/*==================== REMOVE MENU MOBILE ====================*/

let navLink = document.querySelectorAll(".nav__link");

// navLink= Array.from(navLink)

function linkAction(){

    
         //let  navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove("show-menu");
        //console.log("dfdf");
    


}

navLink.forEach((link)=>link.addEventListener("click",linkAction))

// navLink.forEach((link)=>{
//     link.addEventListener("click",()=>{


//           navMenu.classList.remove("show-menu");
//         console.log("dfdf");

//     })

// })


/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 