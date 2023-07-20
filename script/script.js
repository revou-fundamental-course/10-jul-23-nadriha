//mengambil semua variable yang dibutuhkan
const hitungBtn = document.querySelector(".btn-hasil");
let hasilBMI = 0;
let kategoriBMIText = document.getElementById("hasil-berat-badan");
let valueBMIText = document.getElementById("value-berat-badan");
let keteranganBMIText = document.getElementById("keterangan-berat-badan");
let penjelasanKategori = document.getElementById("penjelasan-hasil");
let rangeBMI = document.getElementById("range-bmi");
const displayHasil = document.querySelector(".hasil");
const cardHasil = document.querySelector(".card");
const bmiForm = document.getElementById("bmi-form");
const resetBtn = document.querySelector(".btn-reset");
const beratBadanElement = document.getElementById("berat-badan");
const usiaElement = document.getElementById("usia");
const tinggiBadanElement = document.getElementById("tinggi-badan");
const genderButtons = document.getElementsByName('jenis-kelamin');

//menghilangkan display hasil pada tampilan awal
displayHasil.style.display = "none";

//event listener untuk hitung BMI
hitungBtn.addEventListener("click", (e) => {
    e.preventDefault();

    //validasi input jika field ada yang kosong
    if (bmiForm.checkValidity()) {
        displayHasil.style.display = "block"; //menampilkan hasil
        window.scrollTo({top : 100 * window.innerHeight/100, behavior: 'smooth'}); //automatic scoll langsung ke bagian hasil

        //mengambil value dari variable
        beratBadan = beratBadanElement.value;
        usia = usiaElement.value;
        tinggiBadan = tinggiBadanElement.value;

        //cek gender
        let jenisKelamin = "";
        if (genderButtons[0].checked){
            jenisKelamin = "Pria";
        } else {
            jenisKelamin = "Wanita";
        }

        //menghitung bmi berdasarkan rumus
        hasilBMI = beratBadan / ((tinggiBadan * tinggiBadan)/10000);
        hasilBMI = Math.round(hasilBMI * 10) / 10;
        valueBMIText.innerHTML = hasilBMI;

        //if else untuk menyesuaikan bmi dengan oputput yang akan dikleluarkan
        if (hasilBMI < 18.5) {
            cardHasil.style.backgroundColor = "rgb(255, 219, 219)";
            kategoriBMIText.innerHTML = "Berat Badan Kurang";
            keteranganBMIText.innerHTML = "Anda kekurangan berat badan.";
            rangeBMI.innerHTML = "Hasil BMI < 18.5";
            penjelasanKategori.innerHTML = `Anda berada dalam kategori kekurangan berat badan. <br> Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.`;
        } else if (hasilBMI <= 24.9 && hasilBMI >= 18.5){
            cardHasil.style.backgroundColor = "rgb(219, 240, 255)";
            kategoriBMIText.innerHTML = "Normal (ideal)";
            keteranganBMIText.innerHTML = "Anda memiliki berat badan normal. <br> Keren!";
            rangeBMI.innerHTML = "Hasil BMI diantara 18.5 dan 24.9";
            penjelasanKategori.innerHTML = `Anda berada dalam kategori berat badan yang normal. <br> Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.`;
        } else if (hasilBMI <= 29.9 && hasilBMI >= 25) {
            cardHasil.style.backgroundColor = "rgb(255, 249, 219)";
            kategoriBMIText.innerHTML = "Kelebihan berat badan";
            keteranganBMIText.innerHTML = "Anda memiliki berat badan berlebih.";
            rangeBMI.innerHTML = "Hasil BMI diantara 29.9 dan 25";
            penjelasanKategori.innerHTML = `Anda berada dalam kategori overweight atau berat badan berlebih. <br> Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.<br> Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.`;
        } else {
            cardHasil.style.backgroundColor = "rgb(255, 219, 219)";
            kategoriBMIText.innerHTML = "Kegemukan (Obesitas)";
            keteranganBMIText.innerHTML = "Anda berada dalam kategori obesitas.";
            rangeBMI.innerHTML = "Hasil BMI lebih dari 25";
            penjelasanKategori.innerHTML = `Anda berada dalam kategori obesitas.
            <br>Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. <br>
            Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.`;

        }
    } else { //error message jika field ada yang belum terisi
        alert("Tolong isi semua field terlebih dahulu!");
    }
});

//event handler untuk reset button
resetBtn.addEventListener("click", (e) => {
    e.preventDefault();

    //menghapus semua isi field
    beratBadanElement.value = "";
    usiaElement.value = "";
    tinggiBadanElement.value = "";

    //for loop untuk iterasi semua radio button
    for(let i=0; i<genderButtons.length; i++)
        genderButtons[i].checked = false;
});
