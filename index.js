const nomor = document.getElementById("whatsappsiswa").value

const scriptURL = "https://script.google.com/macros/library/d/1if7q98z7auVhY9YLcNmpLHqK3mKKMGNnLxs6R9x78rgTxpqIlMTTtsVk/2"
const scriptNews = "https://script.google.com/macros/s/AKfycbyMjLrxdKmRGgf_VjkctH-Wvhl2hPVlRbrE1jrXBsh8h8hVY1ohUUhKT_O1NCMfFh2f/exec"

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

    for(let value in data){
        if(data[value] === ""){
            alert("Data tidak boleh kosong!")
            return;
        }
    }

    await fetch(scriptURL, {

        method: "POST",

        mode: "no-cors",

        body: JSON.stringify(data)

    });

    alert("Pendaftaran berhasil!")

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


async function loadBerita() {
    const response = await fetch(scriptNews);
    const news = await response.json();

    console.log(news);

    showNews(news);
}

function showNews(news) {
    const container = document.getElementById("newsContainer");

    container.innerHTML = "";

    for(let i = 0; i < news.length; i += 2) {

        const activeClass = i === 0 ? "active" : "";

        const newsPerSlide = news.slice(i, i + 2);

        let cards = "";

        newsPerSlide.forEach(item => {
            cards += `
                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary-emphasis">
                                ${item.kategori}
                            </strong>
                                
                            <h3 class="mb-0">
                                ${item.judul}
                            </h3>

                            <div class="mb-1 text-body-secondary">
                                ${formatTanggal(item.tanggal)}
                            </div>

                            <p class="card-text mb-auto">
                                ${item.isi}
                            </p>

                            <a href="${item.link}" class="icon-link gap-1 icon-link-hover stretched-link">
                                Continue reading
                            </a>
                        </div>

                        <div class="col-auto d-none d-lg-block">
                            <img 
                                src="${convertDriveImage(item.gambar)}" 
                                alt="${item.judul}"
                                class="news-img">
                        </div>

                    </div>
                </div>
            `;
        });

        container.innerHTML += `
            <div class="carousel-item ${activeClass}">
                <div class="row mb-2">
                    ${cards}
                </div>
            </div>
        `;
    }
}

loadBerita();


function formatTanggal(tanggal) {
    const date = new Date(tanggal);

    return date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Jakarta"
    });
}

function convertDriveImage(url) {
    if (!url) return "";

    // Kalau link sudah format thumbnail, langsung pakai
    if (url.includes("drive.google.com/thumbnail")) {
        return url;
    }

    // Format: https://drive.google.com/file/d/FILE_ID/view
    let match = url.match(/\/d\/([^/]+)/);

    if (match && match[1]) {
        return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
    }

    // Format: https://drive.google.com/open?id=FILE_ID
    match = url.match(/[?&]id=([^&]+)/);

    if (match && match[1]) {
        return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
    }

    // Kalau bukan link Google Drive, pakai apa adanya
    return url;
}