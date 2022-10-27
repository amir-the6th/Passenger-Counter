let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;


function increment() {
    count++;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
}

function clearQueue() {
    count = 0;
    countEl.textContent = count;
    saveEl.textContent = "Previous Entries: "
}


