const currencyNameActive = document.querySelector('.currency-name-active')
const currencyLeft = document.querySelectorAll('.currency-left .currency-name')
const currencyRight = document.querySelectorAll('.currency-right .currency-name')
const input = document.querySelectorAll('.input')


currencyLeft.forEach(function (btn) {

    btn.addEventListener('click', function () {
        currencyLeft.forEach(function (btn) {
            btn.classList.remove('currency-name-active')
        });
        btn.classList.add('currency-name-active');
    })
})


currencyRight.forEach(function (btn) {

    btn.addEventListener('click', function () {
        currencyRight.forEach(function (btn) {
            btn.classList.remove('currency-name-active')
        });
        btn.classList.add('currency-name-active');
    })
})


fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB ')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })


input.forEach(function (e) {
    e.addEventListener('keyup', function () {
        console.log('d')

        
    });

})