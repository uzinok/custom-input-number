window.onload = function () {

    let nuberCalc = document.querySelector('.nuber-calc'),
        inputNumber = document.querySelector('[type="number"]'),
        step = parseFloat(inputNumber.getAttribute('step')) || 1,
        max = parseFloat(inputNumber.getAttribute('max')),
        min = parseFloat(inputNumber.getAttribute('min'));


    nuberCalc.querySelector('.number-down').addEventListener('click', function () {
        if (!(parseFloat(inputNumber.value) <= min)) {
            if (parseFloat(inputNumber.value) - step <= min)
                inputNumber.value = min;
            else
                inputNumber.value = parseFloat(inputNumber.value) - step
        }
    })

    nuberCalc.querySelector('.number-up').addEventListener('click', function () {
        if (!(parseFloat(inputNumber.value) >= max)) {
            if (parseFloat(inputNumber.value) + step >= max)
                inputNumber.value = max;
            else
                inputNumber.value = parseFloat(inputNumber.value) + step;
        }
        console.log(parseFloat(inputNumber.value) + " - " + step)
    })
};