const celsiusInput = document.querySelector('#input-celsius');
const submitBtn = document.querySelector('.submit-btn');
const message = document.querySelector('.message');


submitBtn.addEventListener('click', function () {
    let submit = parseInt(celsiusInput.value);

    if (isNaN(submit)) {
        setMessage('Please enter a valid number', 'red');
    } else {
        convertToF(submit);
    }
});


function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function convertToF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    setMessage(`${fahrenheit} degrees Fahrenheit`, 'green');
}