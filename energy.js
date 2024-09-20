
let elementTime = document.querySelector("#elementTime")
let elementPrice = document.querySelector("#elementPrice")
let totalPrice = document.querySelector("#totalP")
let elementW = document.querySelector("#elementW")
let gadgets = document.querySelectorAll("input[type='checkbox']")
let elementCalcM = document.querySelector("#calcT")
elementCalcM.onclick = () => {
    let totalPower = 0;
    gadgets.forEach(element => {
       /* if (element.checkbox) {
            switch(element.value) {
                case '2.2':
                    el = 2.2;
                break

                case '2':
                    el = 2;
                break

                case '0.4':
                    el = 0.4;
                break

                case '0.01':
                    el = 0.01;
                break

                case '0.1':
                    el = 0.1;
                break
            }
        }    */

        if (element.checked) {
            totalPower += +element.value
        }
    });

    let w = +totalPower * +elementTime.value
    elementW.innerHTML = "Об'єм : " + w + "кВт"
    let price = +elementPrice.value * w
    totalPrice.innerHTML = "Вартість : " + price + "$"
    //let v = (+elementM.value /  +ro)
    //let vo = v.toString().slice(0, 5);
    //elementV.innerHTML = "Об'єм : " + vo + "см3"
}
