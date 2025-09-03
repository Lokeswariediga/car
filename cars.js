let cars = document.getElementById("cars")
let text = document.getElementById("text")
function btn(){
    let m = Math.ceil(text.value/5)
    cars.textContent = "Cars needed: " + m;
}
