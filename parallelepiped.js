let elementA = document.querySelector("#elementAp")
let elementB = document.querySelector("#elementBp")
let elementH = document.querySelector("#elementHp")
let elementP = document.querySelector("#elementPp")
let elementS = document.querySelector("#elementSp")
let elementV = document.querySelector("#elementVp")
let elementCalc = document.querySelector("#calcp")
elementCalc.onclick = () => {
    let pp = 4*(+elementA.value + +elementB.value + +elementH.value)
    elementP.innerHTML = "Периметр : "+ pp + "см"
    let sp = 2*(+elementA.value * +elementB.value + +elementA.value * +elementH.value + +elementB.value * +elementH.value)
    elementS.innerHTML = "Площа : "+ sp + "см2"
    let v = (+elementA.value * +elementB.value * +elementH.value)
    elementV.innerHTML = "Об'єм : "+ v + "см3"
    console.log(v)
}