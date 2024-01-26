const showWindow = () => {
    document.querySelector("body").style.overflow = "hidden"
    
    document.getElementById("signup_popup").style.top = Math.abs(document.body.getBoundingClientRect().top) + "px";
    document.getElementById("signup_popup").style.display = "flex"
}

export { showWindow }