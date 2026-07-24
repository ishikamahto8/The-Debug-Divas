// NutriWise AI Dashboard

window.onload = function () {

    console.log("NutriWise AI Dashboard Loaded!");

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {

        card.addEventListener("mouseenter", () => {
            card.style.transition = "0.3s";
        });

    });

};
// Animated Counter

function animateValue(id, start, end, duration){

    let obj=document.getElementById(id);

    let range=end-start;

    let current=start;

    let increment=end>start?1:-1;

    let stepTime=Math.abs(Math.floor(duration/range));

    let timer=setInterval(function(){

        current+=increment;

        obj.textContent=current;

        if(current==end){

            clearInterval(timer);

        }

    },stepTime);

}

animateValue("scanCount",0,18,1200);

animateValue("healthyCount",0,15,1200);
const tips = [

"Drink enough water today 💧",

"Choose whole grains over refined grains 🌾",

"Eat more fruits and vegetables 🥗",

"Avoid sugary drinks whenever possible 🚫🥤",

"Balance your plate with protein, carbs and vegetables 🍽️"

];

const randomTip = tips[Math.floor(Math.random()*tips.length)];

document.querySelector(".tip-card p").textContent = randomTip;
let score = document.getElementById("healthScore");

let current = 0;

let target = 86;

let timer = setInterval(() => {

    current++;

    score.innerText = current;

    if(current >= target){

        clearInterval(timer);

    }

},20);


// AI Assistant Popup

const aiButton = document.getElementById("aiAssistant");
const aiPopup = document.getElementById("aiPopup");
const closePopup = document.getElementById("closePopup");

aiButton.onclick = function () {
    aiPopup.style.display = "block";
};

closePopup.onclick = function () {
    aiPopup.style.display = "none";
};

// Quick Action Buttons

document.querySelector(".action-btn:nth-child(1)").onclick = function () {
    alert("Food Scanner feature coming soon!");
};

document.querySelector(".action-btn:nth-child(2)").onclick = function () {
    alert("Opening Reports...");
};

document.querySelector(".action-btn:nth-child(3)").onclick = function () {
    alert("Healthy Recipes feature coming soon!");
};

document.querySelector(".action-btn:nth-child(4)").onclick = function () {
    alert("AI Assistant feature coming soon!");
};
// Recommendation Button

const recommendBtn = document.querySelector(".recommend-btn");

recommendBtn.addEventListener("click", function(){

    alert("Detailed AI Recommendation page will open here.");

});