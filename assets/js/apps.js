document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        /* Color a change */
        ele = document.querySelector("#div1")
        ele.style.backgroundColor = 'purple'
        return;
    } else if (event.key === 's') {
        //Color s change
        ele = document.querySelector("#div2")
        ele.style.backgroundColor = 'orange'
        return;
    } else if (event.key === 'd') {
        //Color d change
        ele = document.querySelector("#div3")
        ele.style.backgroundColor = 'skyblue'
        return;
    } else if(event.key === 'f'){
        //color f change
        ele = document.querySelector("#div4")
        ele.style.backgroundColor = 'magenta'
        return;
    } else{
        //Reset HTML, any other key
        location.reload()
    }
})
