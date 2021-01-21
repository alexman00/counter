var counter = document.getElementById("counter");
var buttonIncrease = document.getElementById("increase");
var buttonDecrease = document.getElementById("decrease");
var number = 0

function increaseCounter(){
    number++
    var newNumber = counter.textContent = number
    console.log(newNumber);

}

function decreaseCounter(){
    number--
    var newNumber = counter.textContent = number
    console.log(newNumber);
}

buttonIncrease.addEventListener("click",increaseCounter);
buttonDecrease.addEventListener("click",decreaseCounter);