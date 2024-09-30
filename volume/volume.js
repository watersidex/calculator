
//volume

let elementM = document.querySelector("#elementM")
let elementCalcM = document.querySelector("#calcM")
let elementV = document.querySelector("#elementV")
let materials = document.querySelectorAll("input[type='radio']")
elementCalcM.onclick = () => {
    let ro = 1;
    materials.forEach(element => {
        if (element.checked) {
            switch(element.value) {
                case 'Al':
                    ro = 2.7;
                break

                case 'Fe':
                    ro = 7.8;
                break

                case 'Cu':
                    ro = 8.9;
                break

                case 'Pb':
                    ro = 11.3;
                break
            }
        }    
    });
    let v = (+elementM.value /  +ro)
    let vo = v.toString().slice(0, 5);
    elementV.innerHTML = "Об'єм : " + vo + "см3"
}

//обмежити обєм до трьох чисел після коми
