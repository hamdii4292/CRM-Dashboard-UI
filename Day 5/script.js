const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});

const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if(hour < 12){
    greeting.textContent = "Good Morning, Hammad!";
}
else if(hour < 18){
    greeting.textContent = "Good Afternoon, Hammad!";
}
else{
    greeting.textContent = "Good Evening, Hammad!";
}