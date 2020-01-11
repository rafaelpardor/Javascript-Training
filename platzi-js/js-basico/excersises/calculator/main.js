var form = document.getElementById('xIsWhatPercentOfY')
var numField1 = document.getElementById('numField1')
var numField2 = document.getElementById('numField2')
var resultField = document.getElementById('resultField')


form.addEventListener('submit', function (event) {

    if (!numField1.value || !numField2.value) {
        alert("Meta algo parce")
    } else {
        let x = parseFloat(numField1.value)
        let y = parseFloat(numField2.value)

        var result = x / y
        var percent = result * 100

        resultField.innerText = `Answer is ${percent}%`
        event.preventDefault();
    }
})