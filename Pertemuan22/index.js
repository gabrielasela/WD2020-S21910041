//Array

let nilai = [90, 80, 75, 95, 85];

for (let i = 0; i < nilai.length; i++) 
{
    console.log("Nilai" , nilai[i] + 5);
}
console.log(nilai);

// nilai[2] = 90;
// console.log(nilai[nilai.length - 1];)

let john = ["Jhon", "Doe", 33, true];
console.log(john[john.length - 1]);
console.log(john);

//toString()
console.log(john.toString());
//join()
console.log(john.join(" - "));

//pop()
john.pop();
console.log(john.join(" - "));

//push()
john.push(true);
john.push("Hello");
console.log(john.join(" - "));

//shift()
john.shift();
console.log(john.join(" - "));

//unshift
john.unshift("Jhon");
john.unshift("Prof");
console.log(john.join(" - "));

//splice()
john.splice(2, 0, "Laki-laki");
console.log(john);

//concat()
let jeni = ["Jeni", 30, true];
console.log(jeni);

let dosen = john.concat(jeni);

console.log(dosen);

//slice()
let gabrie = ["Gabrie","Perempuan","FIK","Sistem Informasi"];
let gab = gabrie.slice(1);

console.log(gab);

//sort()
gabrie.sort()
console.log(gabrie);

let angka = [9, 27, 18, 3, 11];
angka.sort();
console.log(angka);

let terkecilTerbesar = function (a, b)
{
    return a-b;
};

let terbesarTerkecil = function (a, b)
{
    return b-a;
};

console.log(angka.sort(terkecilTerbesar));
console.log(angka.sort(terbesarTerkecil));

//reverse()
gabrie.reverse();
console.log(gabrie);

gabrie.sort().reverse();
console.log(gabrie);
