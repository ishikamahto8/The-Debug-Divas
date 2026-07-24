const uploadBtn=document.getElementById("uploadBtn");

const fileInput=document.getElementById("fileInput");

const imagePreview=document.getElementById("imagePreview");

const uploadPrompt=document.getElementById("uploadPrompt");

uploadBtn.onclick=function(){

fileInput.click();

};

fileInput.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {

        const reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById("previewImage").src = e.target.result;
            document.getElementById("previewSection").style.display = "block";
        };

        reader.readAsDataURL(file);
    }
});

document.getElementById("cameraBtn").onclick = function () {
    alert("Camera feature will be connected soon 📷");
};

document.getElementById("manualBtn").onclick = function () {
    alert("Manual Entry page will be added soon ✍️");
};


window.addEventListener("load", () => {

const circle = document.querySelector(".progress");

const score = 86;

const radius = 65;

const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;

circle.style.strokeDashoffset =
circumference - (score / 100) * circumference;

});

const analyzeBtn = document.getElementById("analyzeBtn");
const resultCard = document.getElementById("resultCard");

analyzeBtn.addEventListener("click", function () {
    alert("AI is analyzing your food...");
    resultCard.style.display = "block";
});

document.getElementById("saveBtn").onclick = function () {
    alert("Report Saved Successfully!");
};

document.getElementById("downloadBtn").onclick = function () {
    window.print();
};