
const imagesGallery = document.querySelectorAll("main section img")

const imgHamburger = document.querySelector(".hamburger")

const imgCross = document.querySelector(".cross")

const menuMobile = document.querySelector(".menu-mobile")




if (window.innerWidth < 450) {
    imagesGallery.forEach(image => {
        image.src = image.src.replace("desktop", "mobile")
    })
}
else  {
    imagesGallery.forEach(image => {
        image.src = image.src.replace("mobile", "desktop")
    })
}

window.addEventListener("resize", () => {
    if (window.innerWidth < 450) {
        imagesGallery.forEach(image => {
            image.src = image.src.replace("desktop", "mobile")
        })
    }
    else  {
        imagesGallery.forEach(image => {
            image.src = image.src.replace("mobile", "desktop")
        })
    }
})

imgHamburger.addEventListener("click", () => {
    menuMobile.classList.add("menu--visible")
    document.documentElement.style.overflow = 'hidden';
})

imgCross.addEventListener("click", () => {
    menuMobile.classList.remove("menu--visible")
    document.documentElement.style.overflow = "visible";
})



