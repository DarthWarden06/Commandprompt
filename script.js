var box1 = document.getElementById("box1")
box1.style.color = "white"
var red = 0
var green = 0
var blue = 0
var x = 0
var y = 0


function knap(){
    console.log("Du har klikket på knappen.")
    red += 3
    green += 7
    blue += 5
    var c =`rgb(${red%255}, ${green%255}, ${blue%255})`
    box1.style.backgroundColor = c
    box1.innerHTML = "nice"
    
    var height = window.innerHeight - 100
    var width = window.innerWidth - 100

    x += 1
    y += 1

    x = x%width
    y = y%height

    box1.style.top = `${y}px`
    box1.style.left = `${x}px`
}
setInterval(knap, 5)

console.log("Hello there!")

a = "Adrian"









/*
var box1Styling = box1.style
console.log(box1Styling)
*/

/*

svar = prompt("Hvad er dit navn?")
if(svar == a) {
    console.log("flot navn")
    box1.innerHTML = "Flot Navn"
    box1.style.color = "white"
    
}
else{
    console.log("ikke et flot navn")

}
*/
/*
console.log(box1.id)
box1.id = "box2"
console.log(box1.id)
*/

