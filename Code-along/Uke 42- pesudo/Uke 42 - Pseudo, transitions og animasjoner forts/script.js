const hamburger = document.querySelector(".hamburger");
const hovednav = document.querySelector(".hovednav");

hamburger.addEventListener("click", () => {
    console.log("Hamburger clicked")

    const aapen = hovednav.classList.toggle("meny-aapen");
    hamburger.classList.toggle("meny-aapen");
})