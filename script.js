let count = 0
let countEl = document.getElementById("count")
let saveEl = document.getElementById("save-el")
function increment(){
    count += 1
    countEl.innerText = count
}

function save(){
    saveEl.textContent = saveEl.textContent + count + " - "
    countEl.innerText = 0
    count = 0
}