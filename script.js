let turntext = document.getElementById('turntext');
let btns = document.querySelectorAll('.btn');
let resetbtn = document.getElementById('resetbtn');

let turn = true;

// Reset tombol ketika tombol reset diklik
resetbtn.addEventListener('click', () => {
    btns.forEach((button) => {
        button.innerHTML = "";
        button.disabled = false;
    });
    turntext.innerText = "TURN FOR O";
    turn = true;
});