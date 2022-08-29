let close = document.querySelector(".close");

let navbar = document.querySelector("#navbar");

let menu = document.querySelector(".menu");





close.addEventListener("click",function(){
    navbar.classList.add("hide")
    menu.classList.remove("d-none")
})

menu.addEventListener("click",function(){
    navbar.classList.remove("hide")
    menu.classList.add("d-none")
})