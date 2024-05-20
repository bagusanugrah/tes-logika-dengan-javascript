// Tebak Angka : 
// Pengguna akan diberikan kesempatan untuk menebak angka yang dipilih secara acak oleh program antara 1 hingga 100. 
// Program akan memberikan petunjuk apakah angka yang ditebak terlalu besar atau terlalu kecil. 
// Pengguna akan terus menebak sampai benar, dan program akan mencatat jumlah percobaan yang dibutuhkan. 
// Definisikan sendiri angka yang ingin ditebak ! 
// output : Jawaban benar, anda membutuhkan 5 kali percobaan untuk menebaknya ! 
// output lain : Jawaban salah, angkanya terlalu kecil, masukkan angka lain !

//untuk mengecek apakah inputan adalah angka atau bukan
const apakahAngka = (string) => Number.isFinite(+string)

//acak secara random angka yang ingin ditebak rentang 1-100
let angka_ditebak = Math.floor((Math.random() * 100) + 1)

//buat variabel boolean sudah_ketebak dan atur nilainya sebagai false
let sudah_ketebak = false

//buat variabel integer jumlah_percobaan untuk menghitung banyaknya percobaan dan atur nilainya sebagai 0
let jumlah_percobaan = 0

//selama jawaban belum ketebak dengan benar
while(!sudah_ketebak){
    //input jawaban dari user
    let jawaban = prompt('Masukkan jawaban anda: ')

    //jika inputan bukan angka
    if(!apakahAngka(jawaban)){
        //tagih user untuk menginput angka
        alert('Inputan harus berupa angka!')
    } else{//jika inputan adalah angka
        //jika jawaban sama dengan angka yang ditebak
        if(parseInt(angka_ditebak) === parseInt(jawaban)){
            console.log('Angka yang ditebak: '+angka_ditebak)
            console.log('Jawaban anda: '+jawaban)
            //tambah jumlah_percobaan dengan 1
            jumlah_percobaan = jumlah_percobaan + 1
            //beritahu user berapa kali percobaan yang sudah dia lakukan
            console.log('Jawaban benar, anda membutuhkan ' + jumlah_percobaan + ' kali percobaan untuk menebaknya!')
            //atur nilai sudah_ketebak menjadi true supaya program berhenti
            sudah_ketebak = true
        //jika jawaban lebih besar dari angka yang ditebak
        } else if(parseInt(angka_ditebak) < parseInt(jawaban)){
            //beritahu user bahwa angka jawaban lebih terlalu besar
            alert('Jawaban salah, angkanya terlalu besar, masukkan angka lain!')
            //tambah jumlah_percobaan dengan 1
            jumlah_percobaan = jumlah_percobaan + 1
        //jika jawaban lebih kecil dari angka yang ditebak
        } else{
            //beritahu user bahwa angka jawaban lebih terlalu kecil
            alert('Jawaban salah, angkanya terlalu kecil, masukkan angka lain!')
            //tambah jumlah_percobaan dengan 1
            jumlah_percobaan = jumlah_percobaan + 1
        }
    }
}