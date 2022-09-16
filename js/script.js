const textField = document.getElementById('input-field')
const countDiv = document.getElementById('count-div')
let count = 3;
const display = (id, value) => {
    const timevalue = setInterval(() => {
        document.getElementById(id).innerText = `${value}`;
        if (value === 0) {
            clearInterval(timevalue)
            textField.removeAttribute('disabled')
            countDiv.classList.add('hidden');
        }
        value--
    }, 1000)
}
document.getElementById('start').addEventListener('click', function () {
    countDiv.classList.remove('hidden');
    display('countDown', count)
})