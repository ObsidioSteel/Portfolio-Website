//Create a function for the hamburger menu
function toggleMenu(){
    //Setup constants menu and icon taken from their class names in the HTML file
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    
    //Add or remove open class that we specify in CSS
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}