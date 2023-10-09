function randomText(){
    var text =("!@#$%^&*()_+-!@#$%^&*()_+-어디시의0101abdjdfhelefopd23456789")
    letters = text[Math.floor(Math.random()*text.length)]
    return letters
}
function rain(){
    let cloud = document.querySelector(".cloud")
    let e = document.createElement("div")
    e.classList.add('drop')
    cloud.appendChild(e)

    let left = Math.floor(Math.random() * 270)
    let size = Math.random() * 1.5
    let dur = Math.random() * 1

    e.innerText = randomText();
    e.style.left = left+'px'
    e.style.fontSize = 0.5+size+'em'
    e.style.animationDuration = 1+dur+'s'

    setTimeout(function(){
        cloud.removeChild(e)
    },2000)
}

setInterval(function(){
    rain()
},1)