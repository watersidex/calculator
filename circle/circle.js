let elementR = document.querySelector("#elementR")
let elementP = document.querySelector("#elementPk")
let elementS = document.querySelector("#elementSk")
let elementD = document.querySelector("#elementD")
let elementCalc = document.querySelector("#calcK")
elementCalc.onclick = () => {
    let d = 2* +elementR.value
    elementD.innerHTML = "Діаметр : "+ d + "см"
    let sk = 3.14* +elementR.value * +elementR.value
    elementS.innerHTML = "Площа : "+ sk + "см2"
    let pk = 3.14* d
    elementP.innerHTML = "Периметр : "+ pk + "см"
    console.log(d)
}