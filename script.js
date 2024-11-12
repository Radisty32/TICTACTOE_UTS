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

let winconditions = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8],
    [0, 4, 8], 
    [2, 4, 6], 
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8]
];

// Mengecek kondisi kemenangan
function checkwinner() {
    for (let win of winconditions) {
        let pos1val = btns[win[0]].innerText;
        let pos2val = btns[win[1]].innerText;
        let pos3val = btns[win[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos1val === pos3val) {
            turntext.innerText = `${pos1val} wins!`;
            disableButtons();
            validateWinner(pos1val); // Memanggil validasi pemenang di PHP
            break;
        }
    }
}