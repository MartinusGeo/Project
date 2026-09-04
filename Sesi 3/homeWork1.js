let jumlahBaris1 = 4;
for (let i = 1; i <= jumlahBaris1; i++) {
    let bintang = "";
    for (let j = 1; j <= i; j++) {
        bintang += "*";
    }
    console.log(bintang);
}  

// Membuat pola segitiga bintang (Alternatif)
let jumlahBaris2 = 4;
for (let i = 1; i <= jumlahBaris2; i++) {
    console.log("*".repeat(i));
}