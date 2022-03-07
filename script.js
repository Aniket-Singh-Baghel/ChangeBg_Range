

function abcd(){
    let red = document.querySelector("#red").value
let green = document.querySelector("#green").value
let blue= document.querySelector("#blue").value
    let color = 'rgb('+ red+','+ green+','+ blue+')'
    document.body.style.backgroundColor=color
    document.querySelector("#box").value=color
}
document.querySelector("#red").addEventListener('input',abcd)
document.querySelector("#green").addEventListener('input',abcd)
document.querySelector("#blue").addEventListener('input',abcd)