let heightFt = document.querySelector('#heightFt')
let heightInch = document.querySelector('#heightInch')
let weightSt = document.querySelector('#weightSt')
let weightLbs = document.querySelector('#weightLbs')

heightFt.addEventListener('input', function () {
    if (heightFt.value == '' && heightInch.value == '' && weightSt.value == '' && weightLbs.value == '') {
        info.style.display = 'none'
        blankInfo.style.display = 'block'
    } else {
        blankInfo.style.display = 'none'
        info.style.display = 'flex'
    }
    // bmiIs.textContent = (Number((Number(weightSt.value) + Number(weightLbs.value) / 14) / (Number(heightFt.value) + Number(heightInch.value)) / 12 * (Number(heightFt.value) + Number(heightInch.value)) / 12) * 703).toFixed(1)
})
heightInch.addEventListener('input', function () {
    if (heightFt.value == '' && heightInch.value == '' && weightSt.value == '' && weightLbs.value == '') {
        info.style.display = 'none'
        blankInfo.style.display = 'block'
    } else {
        blankInfo.style.display = 'none'
        info.style.display = 'flex'
    }
    // bmiIs.textContent = (Number((Number(weightSt.value) + Number(weightLbs.value) / 14) / (Number(heightFt.value) + Number(heightInch.value)) / 12 * (Number(heightFt.value) + Number(heightInch.value)) / 12) * 703).toFixed(1)
})
weightSt.addEventListener('input', function () {
    if (heightFt.value == '' && heightInch.value == '' && weightSt.value == '' && weightLbs.value == '') {
        info.style.display = 'none'
        blankInfo.style.display = 'block'
    } else {
        blankInfo.style.display = 'none'
        info.style.display = 'flex'
    }
    // bmiIs.textContent = (Number((Number(weightSt.value) + Number(weightLbs.value) / 14) / (Number(heightFt.value) + Number(heightInch.value)) / 12 * (Number(heightFt.value) + Number(heightInch.value)) / 12) * 703).toFixed(1)
})
weightLbs.addEventListener('input', function () {
    if (heightFt.value == '' && heightInch.value == '' && weightSt.value == '' && weightLbs.value == '') {
        info.style.display = 'none'
        blankInfo.style.display = 'block'
    } else {
        blankInfo.style.display = 'none'
        info.style.display = 'flex'
    }
    // bmiIs.textContent = (Number((Number(weightSt.value) + Number(weightLbs.value) / 14) / (Number(heightFt.value) + Number(heightInch.value)) / 12 * (Number(heightFt.value) + Number(heightInch.value)) / 12) * 703).toFixed(1)
})

if (heightFt.value == '' && heightInch.value == '' && weightSt.value == '' && weightLbs.value == '') {
    info.style.display = 'none'
    blankInfo.style.display = 'block'
} else {
    blankInfo.style.display = 'none'
    info.style.display = 'flex'
}