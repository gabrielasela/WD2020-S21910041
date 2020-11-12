console.log("Basic JavaScript");

//Conditional JavaScript

// let firstName = "Jhon";
// let isMarried = true;

// if(isMarried)
// {
//     console.log(firstName + " is married");
// }
// else 
// {
//     console.log(firstName + " is not married");
// }

/*
    Jika umur < 13 tahun maka tampilkan ketegori anak anak.
    Jika umur 13 - 16 tahun tampilkan kategori remaja.
    Jika umur 17 - 25 tahun tampilkan kategori anak muda.
    Jika umur 25 - 50 tahun tampilkan kategori orang dewasa.
*/



// let firstName = "Jhon";
// let job= "teacher";

// switch(job) {
//     case "teacher": 
//         console.log(firstName + " is a teacher");
//         break;
//     case "driver":
//         console.log(firstName + " is a driver");
//         break;
//     case "instructor":
//         console.log(firstName + " is a instructor");
//         break;
//     default:
//         console.log(firstName + " does something else");
//         break;
// }

// let umur = 35;

// if(umur < 13) {
//     console.log("Kategori Anak-Anak");
// }
// else if (umur >=13 && umur < 17)
// {
//     console.log("Kategori Remaja");
// }
// else if(umur >= 17 && umur < 26) 
// {
//     console.log("Kategori Anak Muda");
// }
// else if(umur >=26 && umur < 50) 
// {
//     console.log("Kategori Orang Dewasa");
// }

// switch(true)
// {
//     case(umur < 13):
//         console.log("Kategori Anak-Anak");
//         break;
//     case(umur >=13 && umur < 17):
//         console.log("Kategori Remaja");
//         break;
//     case(umur >= 17 && umur < 26):
//         console.log("Kategori Anak Muda");
//         break;
//     case(umur >=26 && umur < 50):
//         console.log("Kategori Orang Dewasa");
//         break;
//     default:
//         console.log("Tidak Ada dalam Range");
//         break;
// }

// JavaScript Function

// function helloWorld() {
//     console.log("Hello World function declaration");
// }

// let age = 18;
// let helloWorld = function (nama) {
//     console.log("Hello Nama saya " + nama + ". Umur saya adalah " + age + " tahun.");
// };

// helloWorld("Gabriee");


let nama = prompt ("Masukan Nama : ");
console.log("Nama : " + nama);
let berat = prompt("Masukan Berat Badan : ");
console.log("Berat Badan : " + berat + " kg");
let tinggi = prompt("Masukan Tinggi : ");
console.log("Tinggi : " + tinggi + " m");
let beratIdeal = berat / (tinggi * tinggi);
console.log("Berat Ideal = " + beratIdeal);

if(beratIdeal < 18.5) {
    console.log("Underweight");
}
else if (beratIdeal >=18.5 && beratIdeal <= 24.9)
{
    console.log("Normal Range");
}
else if(beratIdeal >= 25.0 && umur <= 29.9) 
{
    console.log("Overweight (Preobese)");
}
else if(beratIdeal >= 30.0 && beratIdeal <=34.9)
{
    console.log("Obese Class I");
}
else if(beratIdeal >= 35.0 && beratIdeal <= 39.9)
{
    console.log("Obese Class II");
}
else if(beratIdeal >=40.0)
{
    console.log("Obese Class III");
}