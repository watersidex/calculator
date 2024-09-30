let elementR = document.querySelector("#elementRk")
let elementV = document.querySelector("#elementVko")
let elementS = document.querySelector("#elementSko")
let elementCalc = document.querySelector("#calcKo")
elementCalc.onclick = () => {
    let sko = 4* 3.14 * +elementR.value * +elementR.value
    elementS.innerHTML = "Площа : "+ sko + "см2"
    let vko = (4/3) * 3.14 * +elementR.value * +elementR.value * +elementR.value
    let vkko = vko.toString().slice(0, 7);
    elementV.innerHTML = "Об'єм : "+ vkko + "см3"
    console.log(vkko)
}