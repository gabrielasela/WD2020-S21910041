//Variabel

//let $ const
// let umur = 25;
// _umur = 26;
// let nilai = 95.5;
// let sudahMenikah = false;
// let nama = "John Doe";
// console.log(umur);
// console.log(nilai);
// console.log(nama);

// let alamat;
// console.log(alamat);

// const tahunLahir = 2010;
// console.log(tahunLahir);

//Operator

//Arithmetic Operator (+ - * /)

// let angka1 = 10;
// let angka2 = 20;
// console.log(angka1+angka2);

// let umur = 30;
// let namaDepan= "Jhon";
// let namaBelakang= "Doe";
// console.log("Nama Saya "+ namaDepan + " " + namaBelakang + "." + " Umur saya adalah " + umur + " tahun");

// Operator Perbandingan

// let angka1 = 10;
// let angka2 = 9;

// console.log(angka1 <= angka2);

// ternary operator
// let angka = 5;
// let hasil = angka <= 0 ? "Negatif" : "Positif"
// console.log(hasil);

// // Operator Logika
// let kondisi1 = 1<2;
// let kondisi2 = true;

// console.log(kondisi1 || kondisi2);

// console.log(!kondisi1);

// let angka = prompt("Masukkan angka : ");
// console.log("angka yang dimasukan adalah = " + angka);

//Exercise #7

/*

    Buatlah program JavaScript untuk menghitung BMI (Body Mass Index).

    Rumus = Berat (kg) / (tinggi * tinggi)

    Gunakan prompt untuk meminta input dari user.
*/

// Jawaban

let nama = prompt("Masukan Nama : ");
console.log("Nama : " + nama);
let berat = prompt("Masukan Berat Badan : ");
console.log("Berat Badan : " + berat + " kg");
let tinggi = prompt("Masukan Tinggi : ");
console.log("Tinggi : " + tinggi + " m");
let beratIdeal = berat / (tinggi * tinggi);
console.log("Berat Ideal = " + beratIdeal);