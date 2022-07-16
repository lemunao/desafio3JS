let globalColor = "";
let box1 = document.querySelector("#div1")
let box2 = document.querySelector("#div2")
let box3 = document.querySelector("#div3")
let box4 = document.querySelector("#div4")

document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        /* Color a change */
        globalColor = "purple"
    } else if (event.key === 's') {
        //Color s change
        globalColor = 'orange'
    } else if (event.key === 'd') {
        //Color d change
        globalColor = 'skyblue'
    } else if (event.key === 'f') {
        //color f change
        globalColor = 'magenta'
    } else {
        //Reset HTML, any other key
        location.reload()
    }

    changeColor(box1, globalColor);
    changeColor(box2, globalColor);
    changeColor(box3, globalColor);
    changeColor(box4, globalColor);
})

let changeColor = (element, color) => {
    element.addEventListener("click", () =>
        element.style.backgroundColor = color
    )
}

