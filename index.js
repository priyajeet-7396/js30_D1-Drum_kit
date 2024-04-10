document.addEventListener("keypress", function playsound (e) {

    const keypressed  = e.key.toUpperCase()

    var keys = document.querySelectorAll(".key")

keys.forEach(key => {
    const j =  key.getAttribute("data-key")
    if(j === keypressed){
        key.classList.add("playing")

        setInterval(() => {
            key.classList.remove("playing")
        }, 300);

    }
    
});


} )

