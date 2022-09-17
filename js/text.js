const t =
    [
        { txt: "A quick brown fox jumps over the lazy dog." },
        { txt: "Good programmers write code that humans can understand." },
        { txt: "Good programmers write code that humans can understand." },
        { txt: "First, think about the problem. Then, write the code." },
        { txt: "There is no shortcut other than hard work." },
        { txt: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away." }
    ]
const text = ["A quick brown fox jumps over the lazy dog."]
const txtId = document.getElementById('text')
// diplay element by given id and value
const displayText = (id, text) => {
    id.innerText = `${text}`
}
displayText(txtId, text)