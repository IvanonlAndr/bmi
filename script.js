let metricRadio = document.querySelector('#metric')
let imperialRadio = document.querySelector('#imperial')
let headerMetric = document.querySelector('.header__input-metric')
let headerImperial = document.querySelector('.header__input-imperial')
let inputHeight = document.querySelector('#height')
let inputWeight = document.querySelector('#weight')
let blankInfo = document.querySelector('.blankInfo')
let info = document.querySelector('.info')
let bmiIs = document.querySelector('.bmiIs')
let typeOfWeight = document.querySelector('.typeOfWeight')
let text = document.querySelector('.header__type-of-weight')
console.log(info)
metricRadio.addEventListener('input', function () {
    headerImperial.style.display = 'none'
    headerMetric.style.display = 'flex'
})

imperialRadio.addEventListener('input', function () {
    headerImperial.style.display = 'block'
    headerMetric.style.display = 'none'
})

if (metricRadio.checked) {
    headerImperial.style.display = 'none'
    headerMetric.style.display = 'flex'
}

inputHeight.addEventListener('input', function () {
    if (inputHeight.value == '' && inputWeight.value == '') {
        info.style.display = 'none'
        blankInfo.style.display = 'block'
    } else {
        blankInfo.style.display = 'none'
        info.style.display = 'flex'
    }
    bmiIs.textContent = Number(Number(inputWeight.value) / (Number(inputHeight.value) / 100 * Number(inputHeight.value) / 100)).toFixed(1)
    if (Number(bmiIs.textContent) < 18.5) {
        typeOfWeight.textContent = 'Under Weight'
    }

    if (Number(bmiIs.textContent) > 18.5) {
        typeOfWeight.textContent = 'Healthy Weight'
    }

    if (Number(bmiIs.textContent) > 25) {
        typeOfWeight.textContent = 'Over Weight'
    }
    if (Number(bmiIs.textContent) > 30) {
        typeOfWeight.textContent = 'Obesity(Class I)'
    }

    if (Number(bmiIs.textContent) > 35) {
        typeOfWeight.textContent = 'Obesity(Class II)'
    }

    if (Number(bmiIs.textContent) > 40) {
        typeOfWeight.textContent = 'Extreme Obesity'
    }
})
inputWeight.addEventListener('input', function () {
    if (inputHeight.value == '' && inputWeight.value == '') {
        info.style.display = 'none'
        blankInfo.style.display = 'block'
    } else {
        blankInfo.style.display = 'none'
        info.style.display = 'flex'
    }
    bmiIs.textContent = Number(Number(inputWeight.value) / (Number(inputHeight.value) / 100 * Number(inputHeight.value) / 100)).toFixed(1)

    if (Number(bmiIs.textContent) < 18.5) {
        typeOfWeight.textContent = 'Under Weight'
    }

    if (Number(bmiIs.textContent) > 18.5) {
        typeOfWeight.textContent = 'Healthy Weight'
    }

    if (Number(bmiIs.textContent) > 25) {
        typeOfWeight.textContent = 'Over Weight'
    }
    if (Number(bmiIs.textContent) > 30) {
        typeOfWeight.textContent = 'Obesity(Class I)'
    }

    if (Number(bmiIs.textContent) > 35) {
        typeOfWeight.textContent = 'Obesity(Class II)'
    }

    if (Number(bmiIs.textContent) > 40) {
        typeOfWeight.textContent = 'Extreme Obesity'
    }

})

if (inputHeight.value == '' && inputWeight.value == '') {
    info.style.display = 'none'
    blankInfo.style.display = 'block'
} else {
    blankInfo.style.display = 'none'
    info.style.display = 'flex'
}