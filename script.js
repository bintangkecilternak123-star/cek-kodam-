let input = document.getElementById("input");
let tombol = document.getElementById("tombol");
let hasil = document.getElementById("hasil");
let nama = document.getElementById("nama");

tombol.addEventListener("click", CekKhodam);

function CekKhodam () {
    nama.innerHTML = input.value;
    let angkaRandom = Math.floor(Math.random() * namakhodam.length);
    hasil.innerHTML = `${namakhodam[angkaRandom]}`;
}

const namakhodam = [
    "Kuntilanak Beranak",
    "Harimau",
    "Pocong Bersayap",
    "Kucing",
    "Tuyul",
    "Singa Kurus",
    "Sapi Terbang",
    "Bebek Berpeci",
    "Lele Terbang",
    "Kucing Berkacamata",
    "Singa Insecure",
  "Tuyul Freelancer",
  "Jin Magang di PLN",
  "Harimau Introvert",
  "Kuntilanak Baperan",
  "Genderuwo Ngopi Dulu",
  "Sapi Ngoding",
  "Ayam Suka Healing",
  "Naga Main Mobile Legends",
  "Macan Suka Rebahan",
  "Pocong Nge-Vlog",
  "Babi Ngepet Startup",
  "Kuda Sholawatan",
  "Burung Twitteran",
  "Jin Mantan Programmer",
  "Biawak Bersepeda",
  "Kambing Glow Up",
  "Tikus Influencer",
  "Rusa Sholeh",
  "Elang Overthinking",
  "Buaya Tobat",
  "Ikan Cupang Sakti",
];