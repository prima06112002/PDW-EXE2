function kirimData() {
    var nama = document.getElementById("nama").value;
    var tanggal = document.getElementById("tanggal").value;
    var day = document.getElementById("Day").value;
    var tempat = document.querySelector('input[name="Plan"]:checked').value;
    var jumlahTiket = document.getElementById("Jumlah").value;
    var contact = document.getElementById("Contact").value;
  
    alert("Data yang dikirim:\n\n" +
      "Nama: " + nama + "\n" +
      "Tanggal: " + tanggal + "\n" +
      "Day: " + day + "\n" +
      "Tempat: " + tempat + "\n" +
      "Jumlah Tiket: " + jumlahTiket + "\n" +
      "Contact: " + contact);
  }
  