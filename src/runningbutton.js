export function run(e) {
    var x = e.clientX

    var randomX = Math.floor(Math.random() * (x - 200))
    var randomY = Math.floor(Math.random() * ((window.innerHeight / 2) - 100))

    var btn = document.getElementById('button')
    btn.style.marginLeft = randomX + "px"
    btn.style.marginTop = randomY + "px"
}