// Confirm Password : Membuat program untuk memvalidasi kata sandi? Kita dapat membuat program yang meminta pengguna untuk memasukkan kata sandi, kemudian memvalidasi apakah kata sandi tersebut memenuhi kriteria keamanan yang ditetapkan. Kriteria yang umum adalah:Panjang kata sandi minimal harus 8 karakter.
// 1. Harus mengandung setidaknya satu huruf besar (A-Z).
// 2. Harus mengandung setidaknya satu huruf kecil (a-z).
// 3. Harus mengandung setidaknya satu angka (0-9).
// 4. Harus mengandung setidaknya satu karakter khusus, seperti !@#$%^&*()_+-=[]{}|;:'",./?`.
// 5. Program akan memberi tahu pengguna apakah kata sandi yang dimasukkan memenuhi semua kriteria atau tidak.

//tampung semua huruf besar ke dalam variabel string huruf_besar
let huruf_besar = ''
for (i = 65; i <= 90; i++) {
    huruf_besar = huruf_besar + String.fromCharCode(i)
}

//tampung semua huruf kecil ke dalam variabel string huruf_kecil
let huruf_kecil = ''
for (i = 97; i <= 122; i++) {
    huruf_kecil = huruf_kecil + String.fromCharCode(i)
}

//tampung semua angka ke dalam variabel string angka
let angka = ''
for(i = 0; i<=9; i++){
    angka = angka + i
}

//tampung semua karakter khusus ke dalam variabel string karakter_khusus
let karakter_khusus = '!@#$%^&*()_+-=[]{}|;:\'",./?`'

//siapkan variabel boolean sesuai_kriteria dan atur nilainya sebagai false
let sesuai_kriteria = false

//selama inputan password belum sesuai kriteria
while(!sesuai_kriteria){
    //input password
    let password = prompt('Masukkan password: ')

    //siapkan variabel boolean min_8_karakter dan atur nilainya sebagai false
    let min_8_karakter = false
    //siapkan variabel boolean ada_huruf_besar dan atur nilainya sebagai false
    let ada_huruf_besar = false
    //siapkan variabel boolean ada_huruf_kecil dan atur nilainya sebagai false
    let ada_huruf_kecil = false
    //siapkan variabel boolean ada_angka dan atur nilainya sebagai false
    let ada_angka = false
    //siapkan variabel boolean ada_karakter_khusus dan atur nilainya sebagai false
    let ada_karakter_khusus = false

    //jika password terdiri dari minimal 8 karakter
    if(password.length >= 8){
        //atur nilai min_8_karakter sebagai true
        min_8_karakter = true
    }

    //lakukan perulangan untuk mengecek setiap karakter password dengan masing-masing karakter dari string huruf_besar 
    for(i = 0; i<password.length; i++){
        for(j = 0; j<huruf_besar.length; j++)
            //jika ada karakter pasword yang mana dia itu adalah huruf besar
            if(password[i] === huruf_besar[j]){
                //atur nilai ada_huruf_besar menjadi true
                ada_huruf_besar = true
            }
    }

    //lakukan perulangan untuk mengecek setiap karakter password dengan masing-masing karakter dari string huruf_kecil
    for(i = 0; i<password.length; i++){
        for(j = 0; j<huruf_kecil.length; j++)
            //jika ada karakter pasword yang mana dia itu adalah huruf kecil
            if(password[i] === huruf_kecil[j]){
                //atur nilai ada_huruf_kecil menjadi true
                ada_huruf_kecil = true
            }
    }

    //lakukan perulangan untuk mengecek setiap karakter password dengan masing-masing karakter dari string angka
    for(i = 0; i<password.length; i++){
        for(j = 0; j<angka.length; j++)
            //jika ada karakter pasword yang mana dia itu adalah angka
            if(password[i] === angka[j]){
                //atur nilai ada_angka menjadi true
                ada_angka = true
            }
    }

    //lakukan perulangan untuk mengecek setiap karakter password dengan masing-masing karakter dari string karakter_khusus
    for(i = 0; i<password.length; i++){
        for(j = 0; j<karakter_khusus.length; j++)
            //jika ada karakter pasword yang mana dia itu adalah karakter khusus
            if(password[i] === karakter_khusus[j]){
                //atur nilai ada_karakter_khusus menjadi true
                ada_karakter_khusus = true
            }
    }

    
    console.clear()//bersihkan console
    console.log('Password: ' + password)

    //jika semua kriteria terpenuhi
    if(min_8_karakter && ada_huruf_besar && ada_huruf_kecil && ada_angka && ada_karakter_khusus){
        //atur nilai sesuai_kriteria menjadi true untuk menghentikan program
        sesuai_kriteria = true
        //berarti password sudah memenuhi kriteria
        console.log('Password memenuhi kriteria.')
    } else{//jika ada satu saja kriteria yang tidak terpenuhi
        //jika min_8_karakter nilainya false
        if(!min_8_karakter){
            //berarti passwordnya kurang dari 8 karakter
            console.log('Password harus terdiri dari minimal 8 karakter.')
        }

        //jika ada_huruf_besar nilainya false
        if(!ada_huruf_besar){
            //berarti password tidak mengandung huruf besar sama sekali
            console.log('Password harus mengandung setidaknya satu huruf besar.')
        }

        //jika ada_huruf_kecil nilainya false
        if(!ada_huruf_kecil){
            //berarti password tidak mengandung huruf kecil sama sekali
            console.log('Password harus mengandung setidaknya satu huruf kecil.')
        }

        //jika ada_angka nilainya false
        if(!ada_angka){
            //berarti password tidak mengandung angka sama sekali
            console.log('Password harus mengandung setidaknya satu angka.')
        }

        //jika ada_kharakter_khusus nilainya false
        if(!ada_karakter_khusus){
            //berarti password tidak mengandung karakter khusus sama sekali
            console.log('Password harus mengandung setidaknya satu karakter khusus !@#$%^&*()_+-=[]{}|;:\'",./?`.')
        }
    }
}