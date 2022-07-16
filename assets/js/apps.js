document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        /* Cambiar a color 1 */
        ele = document.querySelector("#div1")
        ele.style.backgroundColor = 'purple'
        return;
    } else if (event.key === 's') {
        ele = document.querySelector("#div2")
        ele.style.backgroundColor = 'orange'
        return;
    } else if (event.key === 'd') {
        ele = document.querySelector("#div3")
        ele.style.backgroundColor = 'skyblue'
        return;
    } else if(event.key === 'f'){
        ele = document.querySelector("#div4")
        ele.style.backgroundColor = 'magenta'
        return;
    } else{
        location.reload()
    }
})
