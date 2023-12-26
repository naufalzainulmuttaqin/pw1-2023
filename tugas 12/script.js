document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var waktu = document.getElementById("waktu").value;
    var tiket = document.getElementById("tiket").value;
  
    var isValid = true;
  
    if (nama === "") {
      document.getElementById("namaError").innerHTML = "Nama harus diisi";
      isValid = false;
    } else {
      document.getElementById("namaError").innerHTML = "";
    }
  
    if (email === "") {
      document.getElementById("emailError").innerHTML = "Email harus diisi";
      isValid = false;
    } else {
      document.getElementById("emailError").innerHTML = "";
    }
  
    if (waktu === "") {
      document.getElementById("waktuError").innerHTML = "Waktu keberangkatan harus diisi";
      isValid = false;
    } else {
      document.getElementById("waktuError").innerHTML = "";
    }
  
    if (tiket === "") {
      document.getElementById("tiketError").innerHTML = "Jumlah tiket harus diisi";
      isValid = false;
    } else {
      document.getElementById("tiketError").innerHTML = "";
    }
  
    if (isValid) {
      alert("Form berhasil dikirim!");
      document.getElementById("myForm").reset();
    }
  });