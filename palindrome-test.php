<?php
function isPalindrome($str) {
    // Menghapus semua karakter yang bukan huruf atau angka dan mengubah ke huruf kecil
    $str = strtolower(preg_replace('/[^A-Za-z0-9]/', '', $str));
    // Membandingkan string dengan kebalikannya
    return $str === strrev($str);
}

// Membaca input dari pengguna
echo "Masukkan sebuah string: ";
$input = trim(fgets(STDIN));

// Mengecek apakah string adalah palindrome
if (isPalindrome($input)) {
    echo "true\n";
} else {
    echo "false\n";
}
?>
