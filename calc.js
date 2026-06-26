const inp = document.querySelectorAll("input")
const span = document.getElementById("span")
const h2 = document.getElementById("h2")
const img = document.getElementById("img")
const boxorg = document.getElementById("boxorg")
let trust;
function op(num, s) {

    span.innerHTML = num
    console.log(s);
    window.num = num

    // if (trust) {
    //     s.style.backgroundColor = "green"
    // } else {
    //     s.style.backgroundColor = "red"
    // }
    // trust = !trust


}

function some(t) {
    // t.style.scale="0.9"

    inp[0].style.border = "1px solid black"
    inp[1].style.border = "1px solid black"

    let error = 0

    let val1 = +inp[0].value
    let val2 = +inp[1].value

    if (val1 == "" || val1 == 0) {
        inp[0].style.border = "1px solid red"
        error++
    }
    if (val2 == "" || val2 == 0) {
        inp[1].style.border = "1px solid red"
        error++
    }

    if (error == 0) {
        if (num == "+") {
            h2.innerHTML = val1 + val2
            img.src = "img/icons8-plus-math-94.png"
            console.log(img);

        } else if (num == "-") {
            h2.innerHTML = val1 - val2
            img.src = "img/icons8-plus-math-94.png"
            console.log(img);
        } else if (num == "*") {
            h2.innerHTML = val1 * val2
        } else {
            h2.innerHTML = val1 / val2

        }
    }


}

let dak;

function dark(open) {

    boxorg.classList.toggle("dark")
    if (dak) {
        open.src = "img/icons8-moon-symbol-94.png"
    } else {
        open.src = "img/icons8-sun-94.png"
    }
    dak = !dak
}