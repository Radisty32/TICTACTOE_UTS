<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Ambil data pemenang dari request
    $winner = $_POST['winner'] ?? null;

    // Cek jika pemenang valid
    if ($winner === "X" || $winner === "O") {
        echo json_encode(["status" => "success", "message" => "$winner menang!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Pemenang tidak valid."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Metode tidak diizinkan"]);
}

include('index.php');
?>