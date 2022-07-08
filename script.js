// инкремент - это добавить 1
// декремент - это вычесть 1

let count = 0;

function inc() {
    count++;
    document.getElementById("counter").innerHTML = count;
};

function dec() {
    count--;
    document.getElementById("counter").innerHTML = count;
};