const btn = document.querySelector('button');
let number = 1;
btn.addEventListener("click", function () {
    const list = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = number;
    list.appendChild(li);
    if (number % 3 == 0) {
        li.classList.add('big');
    }
    number += 2;
});