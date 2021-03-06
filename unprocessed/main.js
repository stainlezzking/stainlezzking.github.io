" use strict"

let introElem = document.querySelector(".banner .caption span")
let introText = introElem.innerText
let position = 0;
let time = 300

//  this is the Typing effect function
const typing = ()=>{
 time = ((Math.random()*200) + 150)   
 // delay time
    if(position <= introText.length){
    let intro = introText.slice(0,position)
    introElem.innerHTML = intro;
    position ++ ;   
    setTimeout(typing,time)
    }else{
        setTimeout(typing,3000)
        position = 1;
    }

}
typing();
// ###########################################

//  drop down Feature to show picture

let toggleMe = document.querySelector("section.about p span")
let mePicture = document.querySelector("section.about img.me")

toggleMe.addEventListener("click", ()=>{
    if(mePicture.getAttribute("data-url")){
        mePicture.classList.add("show_me_picture")

        mePicture.parentElement.firstElementChild.style.display = "flex"
       let url = mePicture.getAttribute("data-url")
        mePicture.setAttribute("src", url)
        // removing attribute so it just toggles the classlist next time its clicked
        mePicture.removeAttribute("data-url")
        mePicture.addEventListener("load", ()=>{
            mePicture.parentElement.firstElementChild.style.display = "none"
        })
    }else{
       mePicture.classList.toggle("show_me_picture")     
    }
//  Learn scroll jvs so that when scrolled past this pic it removes the show_me_picture class
})


let prevScrollPos = window.pageYOffset
window.onscroll = function(){
    // scroll display nav 
    if(prevScrollPos < (window.pageYOffset) && window.pageYOffset >300){
        document.querySelector("nav").style.top = "-60px"
        prevScrollPos = window.pageYOffset
    }else{
        document.querySelector("nav").style.top = "0px"
        prevScrollPos = window.pageYOffset
    }
    // check if element is in viewport
   if(window.pageYOffset > 1000){
        document.querySelector(".backToTop").style.display = "block"
    }else{
        document.querySelector(".backToTop").style.display = "none"
    }
    if(mePicture.getBoundingClientRect().bottom < 0){
        mePicture.classList.remove("show_me_picture")
    }
}

if(window.innerWidth >= 770){
    document.querySelectorAll(".project").forEach(project=>{
       let delay = project.getAttribute("data-customDelay");
        project.setAttribute("data-aos-delay", delay)
    })
}


//  add typing effect  
// add a drop down in the about section, this will also lazy load the image
// make the nav fixed and display on scroll up
// remember to convert into normal jvs using babel fotr compatibility and add 
// ^ add prefix for the css using prefixer
// thinking of adding progress bar or is it too much ?