// script penjumlahan
function tambah() {
    let num1 = Number(document.getElementById("angka1").value);
    let num2 = Number(document.getElementById("angka2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("hasilKalkulasi").textContent = "Input tidak valid!";
        return;
    }
    let hasil = num1 + num2;
    document.getElementById("hasilKalkulasi").textContent = "Hasil: " + hasil;
}
// script pengurangan
function kurang() {
    let num1 = Number(document.getElementById("angka1").value);
    let num2 = Number(document.getElementById("angka2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("hasilKalkulasi").textContent = "Input tidak valid!";
        return;
    }
    let hasil = num1 - num2;
    document.getElementById("hasilKalkulasi").textContent = "Hasil: " + hasil;
}
// script perkalian
function kali() {
    let num1 = Number(document.getElementById("angka1").value);
    let num2 = Number(document.getElementById("angka2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("hasilKalkulasi").textContent = "Input tidak valid!";
        return;
    }
    let hasil = num1 * num2;
    document.getElementById("hasilKalkulasi").textContent = "Hasil: " + hasil;
}
// script pembagian
function bagi() {
    let num1 = Number(document.getElementById("angka1").value);
    let num2 = Number(document.getElementById("angka2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("hasilKalkulasi").textContent = "Input tidak valid!";
        return;
    }
    if (num2 === 0) {
        document.getElementById("hasilKalkulasi").textContent = "Tidak bisa membagi dengan nol!";
        return;
    }
    let hasil = num1 / num2;
    document.getElementById("hasilKalkulasi").textContent = "Hasil: " + hasil;
}
