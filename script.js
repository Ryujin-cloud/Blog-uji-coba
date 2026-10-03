// ============================
// TAHUN OTOMATIS
// ============================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ============================
// DARK MODE
// ============================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});


// ============================
// PESAN KONTAK
// ============================

function showMessage(platform) {

    alert(
        "Silakan tambahkan link " +
        platform +
        " kamu di file index.html."
    );

}