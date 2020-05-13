'use strict';

// MENU SCROLL BACKGROUND CHANGE

window.onscroll = function() {
    handleScroll();
}
function handleScroll() {

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('header').style.backgroundColor = '#fafaff';

    } else {
        document.getElementById('header').style.backgroundColor = 'transparent';
        
    }
    
}

// TESTIMONIALS SLIDER

function sleep(time) {
    return new Promise((response)=>setTimeout(response, time))
}

let mySlides = document.getElementsByClassName('slider-item');

async function slider(iIndex, mySlides){
     mySlides [iIndex].className = 'slider-item active-slider-item';
     if(iIndex == 0){
         mySlides[mySlides.length - 1].className = 'slider-item';
     } else{
         mySlides[iIndex - 1].className = 'slider-item';
     }

     sleep(3000).then(()=>{
         if(iIndex == mySlides.length - 1){
             iIndex = -1;
         }
         slider(iIndex + 1, mySlides)
     })
}

slider(1, mySlides);