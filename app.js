function name() {
    var name = prompt("What is your name?")
    greet(name)
    return name
}

function greet(a) {
    alert(`Hello, ${a}!`)
}

function whichTemp() {
    var tempc = prompt("Are you c to f (1) or f to c (2)?")
    return tempc
}

function whatTemp() {
    var tempy = prompt("What is your chosen temperature?")
    return tempy
}

function ctof(b) {
    var ctof = ((b * 9) / 5) + 32
    return ctof
}

function ftoc(c) {
    var ftoc = ((c - 32) * 5) / 9
    return ftoc
}

var name = name()
var temp1 = whichTemp()

if (temp1 == 1) {
    var temp2 = whatTemp()
    var temp3 = ctof(temp2)
    alert(`${temp2} C is ${temp3} in F.`)
} else {
    var temp2 = whatTemp()
    var temp4 = ftoc(temp2)
    alert(`${temp2} F is ${temp4} in C.`)
}