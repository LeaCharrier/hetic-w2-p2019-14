import { sliderColorLunette } from './slick.js';
import { sliderKitLunette } from './slick.js';
import { animation } from './animation.js';


let global = document.querySelector(".container-global");
let lunette = document.querySelector(".lunettes");
let anim = document.querySelector(".animation-block");

var fixedControl = function(){
    let actualScroll = window.pageYOffset + 250;
    let elementTop = global.offsetTop;

    if (actualScroll >= elementTop && !anim.classList.contains('mr-scroll')){
        anim.style.left = document.querySelector('.lunettes').offsetLeft;
        anim.classList += " mr-scroll";
    }
    else if ( actualScroll < elementTop && anim.classList.contains('mr-scroll')){
        anim.classList.remove('mr-scroll');
    }

}



window.addEventListener('scroll', fixedControl);
window.addEventListener('resize', fixedControl);



sliderColorLunette();
sliderKitLunette();
animation();
