function pintar(element, color ="purple") {    
    // Guía console.log("Element: ", element)
    element.style.backgroundColor = color
}

let color = "red"
let ele = document.getElementById("ele1")
ele.addEventListener("click", ()=>{
pintar(ele,color)
});