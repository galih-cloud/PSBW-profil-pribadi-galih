// Function untuk tombol "Lihat Profil"
function tampilkanPesan() {
    alert("Halo! Selamat datang di profil Galih Condro Widjoyo.");
}


// ================================
// ARRAY OF OBJECT
// ================================

const dataNilai = [
    {
        kode: "14823192",
        mataKuliah: "Arsitektur dan Organisasi Komputer",
        sks: 2,
        nilai: "AB"
    },
    {
        kode: "14823333",
        mataKuliah: "Algoritma dan Struktur Data",
        sks: 3,
        nilai: "A"
    },
    {
        kode: "14823313",
        mataKuliah: "Sistem Basis Data",
        sks: 3,
        nilai: "AB"
    },
    {
        kode: "14823393",
        mataKuliah: "Interaksi Manusia Komputer",
        sks: 3,
        nilai: "B"
    },
    {
        kode: "14823153",
        mataKuliah: "Teknologi Informasi dan Aplikasi Bisnis Berkembang",
        sks: 3,
        nilai: "B"
    },
    {
        kode: "14823274",
        mataKuliah: "Pemrograman Berorientasi Objek",
        sks: 4,
        nilai: "B"
    },
    {
        kode: "14823372",
        mataKuliah: "Statistika dan Probabilitas",
        sks: 2,
        nilai: "A"
    }
];


// ================================
// FUNCTION 1 - MENGHITUNG TOTAL SKS
// ================================

function hitungTotalSKS() {
    let totalSKS = 0;

    for (let mataKuliah of dataNilai) {
        totalSKS += mataKuliah.sks;
    }

    return totalSKS;
}


// ================================
// FUNCTION 2 - MENCARI MATA KULIAH
// ================================

function cariMataKuliah() {
    let hasil = [];

    for (let mataKuliah of dataNilai) {

        // Operator perbandingan dan logika
        if (mataKuliah.sks >= 3 && mataKuliah.nilai !== "C") {
            hasil.push(mataKuliah);
        }
    }

    return hasil;
}


// ================================
// FUNCTION 3 - MENGHITUNG RATA-RATA NILAI
// ================================

function hitungRataRataNilai() {
    let totalBobot = 0;
    let totalSKS = 0;

    for (let mataKuliah of dataNilai) {

        let bobot = 0;

        if (mataKuliah.nilai === "A") {
            bobot = 4;
        } else if (mataKuliah.nilai === "AB") {
            bobot = 3.5;
        } else if (mataKuliah.nilai === "B") {
            bobot = 3;
        } else if (mataKuliah.nilai === "BC") {
            bobot = 2.5;
        } else if (mataKuliah.nilai === "C") {
            bobot = 2;
        }

        totalBobot += bobot * mataKuliah.sks;
        totalSKS += mataKuliah.sks;
    }

    return totalBobot / totalSKS;
}


// ================================
// MENAMPILKAN HASIL DI CONSOLE
// ================================

console.log("=== DATA NILAI MAHASISWA ===");

dataNilai.forEach(function(mataKuliah) {
    console.log(
        mataKuliah.mataKuliah +
        " | SKS: " +
        mataKuliah.sks +
        " | Nilai: " +
        mataKuliah.nilai
    );
});

console.log("----------------------------");

console.log("Total SKS:", hitungTotalSKS());

console.log("----------------------------");

console.log("Rata-rata Nilai:", hitungRataRataNilai().toFixed(2));

console.log("----------------------------");

console.log("Mata kuliah dengan SKS >= 3 dan nilai bukan C:");

const hasilPencarian = cariMataKuliah();

hasilPencarian.forEach(function(mataKuliah) {
    console.log(
        mataKuliah.mataKuliah +
        " | " +
        mataKuliah.sks +
        " SKS | Nilai: " +
        mataKuliah.nilai
    );
});