function tampilkanPesan() {
    alert("Halo! Selamat datang di profil Galih Condro Widjoyo.");
}

// Array data nilai
const dataNilai = [
    { kode: "14823192", mataKuliah: "Arsitektur dan Organisasi Komputer", sks: 2, nilai: "AB" },
    { kode: "14823333", mataKuliah: "Algoritma dan Struktur Data", sks: 3, nilai: "A" },
    { kode: "14823313", mataKuliah: "Sistem Basis Data", sks: 3, nilai: "AB" },
    { kode: "14823393", mataKuliah: "Interaksi Manusia Komputer", sks: 3, nilai: "B" },
    { kode: "14823153", mataKuliah: "Teknologi Informasi dan Aplikasi Bisnis Berkembang", sks: 3, nilai: "B" },
    { kode: "14823274", mataKuliah: "Pemrograman Berorientasi Objek", sks: 4, nilai: "B" },
    { kode: "14823372", mataKuliah: "Statistika dan Probabilitas", sks: 2, nilai: "A" }
];

// Fungsi 1: menghitung rata-rata nilai
function hitungRataRataNilai() {
    let totalBobot = 0;
    let totalSKS = 0;

    for (let mataKuliah of dataNilai) {
        let bobot = 0;

        if (mataKuliah.nilai === "A") bobot = 4;
        else if (mataKuliah.nilai === "AB") bobot = 3.5;
        else if (mataKuliah.nilai === "B") bobot = 3;
        else if (mataKuliah.nilai === "BC") bobot = 2.5;
        else if (mataKuliah.nilai === "C") bobot = 2;

        totalBobot += bobot * mataKuliah.sks;
        totalSKS += mataKuliah.sks;
    }

    return totalBobot / totalSKS;
}

// Fungsi 2: filter data
function filterDataNilai() {
    return dataNilai.filter(mataKuliah => mataKuliah.sks >= 3);
}

// Output rata-rata
console.log(
    "Rata-rata Nilai:",
    hitungRataRataNilai().toFixed(2)
);

console.log("----------------------------");

// Output hasil filter
console.log("Hasil Filter (SKS >= 3):");

filterDataNilai().forEach(function(mataKuliah) {
    console.log(
        mataKuliah.mataKuliah +
        " | SKS: " + mataKuliah.sks +
        " | Nilai: " + mataKuliah.nilai
    );
});