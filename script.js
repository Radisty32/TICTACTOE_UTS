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

// Menambahkan event listener pada setiap tombol
btns.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (button.innerHTML === "") {
            button.innerHTML = turn ? "O" : "X";
            turntext.innerText = `Turn for ${turn ? "X" : "O"}`;
            turn = !turn;
            checkwinner();
        }
    });
});