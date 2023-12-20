const menuBarsButton = document.querySelector(".mobile-menu-bars-container");
const menuBarsImg = document.querySelector(".mobile-menu-bars-container img");
const mobileNav = document.getElementById("mobile-nav");

menuBarsButton.addEventListener("click", ()=>{
    const computedStyle = window.getComputedStyle(mobileNav);
    if(computedStyle.display === "none"){
        menuBarsImg.src = menuBarsImg.src.replace("-hamburger.svg", "-close.svg");
        mobileNav.classList.add("mobile-nav-active");
    }else{
        menuBarsImg.src = menuBarsImg.src.replace("-close.svg", "-hamburger.svg");
        mobileNav.classList.remove("mobile-nav-active");
    }
})