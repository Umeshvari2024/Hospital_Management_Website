const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click",()=>{

    if(document.documentElement.getAttribute("data-theme")==="dark"){

        document.documentElement.removeAttribute("data-theme");

        themeToggle.innerHTML="🌙 Dark";

    }

    else{

        document.documentElement.setAttribute("data-theme","dark");

        themeToggle.innerHTML="☀ Light";

    }

});

const menuToggle = document.getElementById("menuToggle");

const navContainer = document.getElementById("navContainer");

menuToggle.addEventListener("click",()=>{

    navContainer.classList.toggle("show");

});
const form = document.querySelector("form");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Appointment Booked Successfully!");

    });

}