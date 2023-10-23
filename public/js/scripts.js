/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
// 
// Scripts
// 
$("#registration-form").submit(function (event) {
    event.preventDefault();

    const name = $("#name").val();
    const email = $("#email").val();
    const password = $("#password").val();
    const repassword = $("#repassword").val();

    if (password !== repassword) {
        alert("Maaf konfirmasi password yang and masukan tidak sesuai")
    } else {
        // Kirim data registrasi ke server menggunakan AJAX atau fetch
        $.ajax({
            url: "/api/v1/users/register", // Ganti dengan rute API registrasi Anda
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ name, email, password }),
            success: function (response) {
                // Tampilkan pesan sukses atau redirect ke halaman login
                alert("Registrasi berhasil! Silakan masuk.");
                window.location.href = "/";
            },
            error: function (error) {
                console.error("Terjadi kesalahan: " + JSON.stringify(error));
                alert("Gagal mendaftar. Silakan coba lagi.");
            },
        });
    }
});

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
