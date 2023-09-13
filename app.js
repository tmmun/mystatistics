
let points = 0

if (localStorage.getItem("points") != null) {
    $('.points').text(localStorage.getItem("points"))
    points = localStorage.getItem("points")
}

$(".but").click(function () {
    points++
    localStorage.setItem("points", points)
    $('.points').text(localStorage.getItem("points"))
})

$(".reload").click(function () {
    points = 0
    localStorage.setItem("points", points)
    $('.points').text(points)
})

//console.log()
//$('').append("<div")
//$("").click(function () {})

