




document.addEventListener("click",e=>{

var menubtn = document.getElementsByClassName("icon-bar")[0];
var closebtn = document.getElementsByClassName("btn-close")[0];
    if(e.target == menubtn){
        console.log("cba")

        let menuContainer = document.getElementsByClassName("Container-Menu-Mobile")[0]
        let menuMobile = document.getElementById("Container-Menu-Mobile")

        // menuMobile.style.left = "8em";
        menuMobile.style.cssText = "transition:600ms;left:8em;"
        
        // menuContainer.classList.add(".appearsMenu")

} else if(e.target == closebtn){
    let menuMobile = document.getElementById("Container-Menu-Mobile");
    menuMobile.style.cssText = "transition:600ms;left:38em;"
}

})