

const scriptURL = "https://script.google.com/macros/s/AKfycbyHz4z8PmAHYs14QTCy3L_p3H1rAf4Wl3I-C93o2SxWEOReajNIMe6KzVD8dL1AnsAt3g/exec";

document
.getElementById("submitBtn")
.addEventListener("click", async function(e){

    e.preventDefault();

    const data = {

        nama: document.getElementById("nama").value,
        gender: document.getElementById("gender").value,
        nisn: document.getElementById("nisn").value,
        nik: document.getElementById("nik").value,
        tempatlahir: document.getElementById("tempatlahir").value,
        tanggallahir: document.getElementById("tanggallahir").value,
        agama: document.getElementById("agama").value,
        whatsappsiswa: document.getElementById("whatsappsiswa").value,
        alamat: document.getElementById("alamat").value,
        orangtua: document.getElementById("orangtua").value,
        whatsapportu: document.getElementById("whatsapportu").value,
        asalsmp: document.getElementById("asalsmp").value,
        jurusan: document.getElementById("jurusan").value
    };

    await fetch(scriptURL, {

        method: "POST",

        mode: "no-cors",

        body: JSON.stringify(data)

    });

    alert("Pendaftaran berhasil!");

});


function clearScreen(){
        document.getElementById("nama").innerText = ""
        document.getElementById("nisn").innerText = ""
        document.getElementById("nik").innerText = ""
        document.getElementById("tempatlahir").innerText = ""
        document.getElementById("tanggallahir").innerText = ""
        document.getElementById("agama").innerText = ""
        document.getElementById("whatsappsiswa").innerText = ""
        document.getElementById("alamat").innerText = ""
        document.getElementById("orangtua").innerText = ""
        document.getElementById("whatsapportu").innerText = ""
        document.getElementById("asalsmp").innerText = ""
}

