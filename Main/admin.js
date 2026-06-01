const scriptURL = "https://script.google.com/macros/s/AKfycbyMjLrxdKmRGgf_VjkctH-Wvhl2hPVlRbrE1jrXBsh8h8hVY1ohUUhKT_O1NCMfFh2f/exec"

document.getElementById("submitBerita").addEventListener("click" , async function(e){

     const data = {
        type: "berita",
        judul: document.getElementById("judul").value,
        kategori: document.getElementById("kategori").value,
        gambar: document.getElementById("gambar").value,
        isi: document.getElementById("isi").value,
        link: document.getElementById("link").value,
    }

     await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data)
    });

    alert("Berita berhasil disimpan!");

} ) 
  
   


