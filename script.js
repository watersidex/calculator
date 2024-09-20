let elementA = document.querySelector("#elementA")
let elementB = document.querySelector("#elementB")
let elementH = document.querySelector("#elementH")
let elementP = document.querySelector("#elementP")
let elementS = document.querySelector("#elementS")
let elementV = document.querySelector("#elementV")
let elementCalc = document.querySelector("#calc")
elementCalc.onclick = () => {
    let p = 2*(+elementA.value +  +elementB.value)
    elementP.innerHTML = "Периметр : " + p + "см"
    let s = (+elementA.value *  +elementB.value)
    elementS.innerHTML = "Площа : " + s + "см2"
    console.log(s)
}
