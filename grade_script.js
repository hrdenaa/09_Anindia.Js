function cekNilai() {
    let nilai = Number(document.getElementById("nilaiSiswa").value);
    let grade;

    if (nilai >= 90 && nilai <= 100) {
        grade = "A (Sangat Baik)";
    } else if (nilai >= 80 && nilai <= 89) {
        grade = "B (Baik)";
    } else if (nilai >= 70 && nilai <= 79) {
        grade = "C (Cukup)";
    } else if (nilai >= 60 && nilai <= 69) {
        grade = "D (Kurang)";
    } else if (nilai >= 0 && nilai <= 59) {
        grade = "E (Gagal)";
    } else {
        grade = "Nilai tidak valid.";
    }

    document.getElementById("hasilGrade").innerHTML = "Hasil Grade: " + grade;
}
