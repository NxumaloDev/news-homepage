let menuOpen = document.querySelector(".open-menu")
let menuClose = document.querySelector(".close-menu")
let nav = document.querySelector('nav ul')

menuOpen.addEventListener("click", () => {
    menuOpen.style.opacity = "0"
    menuOpen.style.zIndex = "2"

    menuClose.style.opacity = "1"
    menuClose.style.zIndex = "3"

    nav.style.right = "0"
})

menuClose.addEventListener("click", () => {
    menuClose.style.opacity = "0"
    menuClose.style.zIndex = "2"
    
    menuOpen.style.opacity = "1"
    menuOpen.style.zIndex = "3"

    nav.style.right = "-50rem"
})