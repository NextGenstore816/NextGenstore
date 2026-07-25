document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(".card, .product");

cards.forEach((card,index)=>{
card.style.opacity="0";
card.style.transform="translateY(30px)";

setTimeout(()=>{
card.style.transition="0.6s";
card.style.opacity="1";
card.style.transform="translateY(0)";
},index*150);

});

const button=document.querySelector(".btn");

if(button){
button.addEventListener("mouseenter",()=>{
button.style.transform="scale(1.05)";
});

button.addEventListener("mouseleave",()=>{
button.style.transform="scale(1)";
});
}

});
