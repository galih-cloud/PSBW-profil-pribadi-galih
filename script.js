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


// =========================
// TAMBAHAN TUGAS BAGIAN 2
// =========================

// Menampilkan data array ke tabel
const tabelNilaiBody = document.getElementById("tabelNilaiBody");

function tampilkanDataNilai(data) {

    tabelNilaiBody.innerHTML = "";

    data.forEach(function(mataKuliah, index) {

        const baris = document.createElement("tr");

        // No.
        const nomor = document.createElement("td");
        nomor.textContent = index + 1;

        // Kode
        const kode = document.createElement("td");
        kode.textContent = mataKuliah.kode;

        // Nama Mata Kuliah
        const nama = document.createElement("td");
        nama.textContent = mataKuliah.mataKuliah;

        // Semester
        const semester = document.createElement("td");
        semester.textContent = "2";

        // SKS
        const sks = document.createElement("td");
        sks.textContent = mataKuliah.sks;

        // Nilai
        const nilai = document.createElement("td");
        const badge = document.createElement("span");

        badge.textContent = mataKuliah.nilai;

        if (mataKuliah.nilai === "A") {
            badge.classList.add("badge", "bg-success");
        } else if (mataKuliah.nilai === "AB") {
            badge.classList.add("badge", "bg-primary");
        } else if (mataKuliah.nilai === "B") {
            badge.classList.add("badge", "bg-warning", "text-dark");
        }

        nilai.appendChild(badge);

        // N.K
        const nilaiK = document.createElement("td");

        let bobot = 0;

        if (mataKuliah.nilai === "A") bobot = 4;
        else if (mataKuliah.nilai === "AB") bobot = 3.5;
        else if (mataKuliah.nilai === "B") bobot = 3;

        nilaiK.textContent = (bobot * mataKuliah.sks).toFixed(2);

        baris.appendChild(nomor);
        baris.appendChild(kode);
        baris.appendChild(nama);
        baris.appendChild(semester);
        baris.appendChild(sks);
        baris.appendChild(nilai);
        baris.appendChild(nilaiK);

        tabelNilaiBody.appendChild(baris);
    });
}

tampilkanDataNilai(dataNilai);


// =========================
// INTERAKSI 1: SEARCH
// =========================

const cariNilai = document.getElementById("cariNilai");

cariNilai.addEventListener("input", function() {

    const kataKunci = cariNilai.value.toLowerCase();

    const hasil = dataNilai.filter(function(mataKuliah) {
        return mataKuliah.mataKuliah
            .toLowerCase()
            .includes(kataKunci);
    });

    tampilkanDataNilai(hasil);
});


// =========================
// INTERAKSI 2: TOMBOL PROFIL
// =========================

const btnProfil = document.getElementById("btnProfil");

btnProfil.addEventListener("click", tampilkanPesan);


// =========================
// FORM + VALIDASI
// =========================

const formPesan = document.getElementById("formPesan");

formPesan.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("nama");
    const pesan = document.getElementById("pesan");
    const pesanForm = document.getElementById("pesanForm");

    if (nama.value.trim() === "" || pesan.value.trim() === "") {

        pesanForm.textContent = "Nama dan pesan wajib diisi.";

        pesanForm.classList.add("form-error");
        pesanForm.classList.remove("form-success");

        return;
    }

    if (nama.value.trim().length < 3) {

        pesanForm.textContent = "Nama minimal 3 karakter.";

        pesanForm.classList.add("form-error");
        pesanForm.classList.remove("form-success");

        return;
    }

    pesanForm.textContent = "Pesan berhasil dikirim!";

    pesanForm.classList.add("form-success");
    pesanForm.classList.remove("form-error");

    formPesan.reset();
});