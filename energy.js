
let elementTime = document.querySelector("#elementTime")
let elementPrice = document.querySelector("#elementPrice")
let totalPrice = document.querySelector("#totalP")
let elementW = document.querySelector("#elementW")
let gadgets = document.querySelectorAll("input[type='checkbox']")
let elementCalcM = document.querySelector("#calcT")
elementCalcM.onclick = () => {
    let totalPower = 0;
    gadgets.forEach(element => {
        if (element.checked) {
            totalPower += +element.value
        }
    });

    let w = +totalPower * +elementTime.value
    elementW.innerHTML = "Об'єм : " + w + "кВт"
    let price = +elementPrice.value * w
    totalPrice.innerHTML = "Вартість : " + price + "$"
}
