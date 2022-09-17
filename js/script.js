const textField = document.getElementById('input-field')
const countDiv = document.getElementById('count-div')
let seconds = document.getElementById('second')

let snd = 0;
displayText(seconds, snd)
let count = 3;
const display = (id, value) => {
    let idDiv = document.getElementById(id)
    const timevalue = setInterval(() => {
        idDiv.innerText = `${value}`;
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