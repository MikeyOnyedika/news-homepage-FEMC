const openNavBtn = document.getElementById("open-nav-btn")
const closeNavBtn = document.getElementById("close-nav-btn")

openNavBtn.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("close-nav")
    document.getElementById("nav").classList.add("darken-bg")
    document.getElementById("nav").classList.remove("lighten-bg")
})

closeNavBtn.addEventListener("click", () => {
    document.getElementById("nav").classList.add("close-nav")
    document.getElementById("nav").classList.remove("darken-bg")
    document.getElementById("nav").classList.add("lighten-bg")
})