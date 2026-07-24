console.log("History Page Loaded Successfully");
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {
    console.log("Searching:", searchInput.value);
});

const filterSelect = document.getElementById("filterSelect");

filterSelect.addEventListener("change", function () {
    console.log("Filter:", filterSelect.value);
});

document.querySelectorAll(".view-btn").forEach(button => {

    button.addEventListener("click", function(){

        alert("Opening full AI report...");

    });

});

document.querySelectorAll(".delete-btn").forEach(button => {

    button.addEventListener("click", function(){

        if(confirm("Delete this scan from history?")){

            this.parentElement.parentElement.parentElement.remove();

        }

    });

});

const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach(button => {

    button.addEventListener("click", function () {

        this.closest(".history-card").remove();

        alert("History deleted successfully!");

    });

});

function viewFood(food) {
    localStorage.setItem("selectedFood",food);
}