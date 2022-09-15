const textField = document.getElementById('input-field')
const startBtn = document.getElementById('start').addEventListener('click', function () {
    let count = 3;
    const countDiv = document.getElementById('count-div')
    countDiv.classList.remove('hidden');
    if (count === 0) {
        textField.removeAttribute('disabled')
        countDiv.classList.add('hidden');
    }
    display('countDown', count)
})
const display = (id, value) => {
    const element = document.getElementById(id).innerText = `${value}`;
}