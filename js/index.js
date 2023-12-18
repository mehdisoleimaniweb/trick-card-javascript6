let _inp1 = document.getElementById('inp1')
const numberCard = document.getElementById('numberCard');
let _date1 = document.getElementById('date1')
let _inp2 = document.getElementById('inp2')
let _date2 = document.getElementById('date2')
let _inp3 = document.getElementById('inp3')
let _cvv2 = document.getElementById('cvv2')
let _inp4 = document.getElementById('inp4')
let _btn = document.getElementById('btn')
numberCard.addEventListener('keyup', (e) => {
    if (e.keyCode != 8) {
        if (numberCard.value.length < 25) {
            if (
                (numberCard.value).length == 4 ||
                (numberCard.value).length == 11 ||
                (numberCard.value).length == 18
            ) {
                numberCard.value += ' - '
            }
        } else {
            _date1.focus()
        }
    }
    _inp1.value = numberCard.value;
})
//date1//
_date1.addEventListener('keyup', (e) => {
    let num = e.target.value
    if (num.length <= 2) {
        _inp2.value = num
    } else {
        e.target.value = num.slice(0, 2)
        _date2.focus()
    }
})
// date2//
_date2.addEventListener('keyup', (e) => {
    let num2 = e.target.value
    if (num2.length <=2) {
        _inp3.value = num2
        console.log(_inp3.value = num2);
    } else {
        e.target.value = num2.slice(0, 2)
        _cvv2.focus()
    }
})
//cvv2//
_cvv2.addEventListener('input', (e) => {
    let num3 = e.target.value
    if (num3.length <= 4) {
        _inp4.value = num3
    } else {
        e.target.value = num3.slice(0, 4)
    }
})
//btn//
_btn.addEventListener('click',(e)=>{
    numberCard.value=''
    _inp1.value = ''
    _date1.value = ''
    _inp2.value = ''
    _date2.value = ''
    _inp3.value = ''
    _cvv2.value = ''
    _inp4.value = ''
})


