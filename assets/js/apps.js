function pintar(element) {
    console.log("Elemento" + element);

    element.style.setProperty("background", "red");
}
ele = document.getElementById("ele1")
ele.addEventListener("click", pintar, ele);
