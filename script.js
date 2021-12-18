const list_Kategori = {
    "Sosial" : {
      "abodemen" : 10000,
      "tarif" : 300,
      "pajak" : 0
    },
    "Rumah" : {
      "abodemen" : 30000,
      "tarif" : 500,
      "pajak" : 0.10
    },
    "Apartemen" : {
      "abodemen" : 50000,
      "tarif" : 750,
      "pajak" : 0.15
    },
    "Industri" : {
      "abodemen" : 75000,
      "tarif" : 1000,
      "pajak" : 0.20
    },
    "Villa" : {
      "abodemen" : 100000,
      "tarif" : 1250,
      "pajak" : 0.25
    },
  }




function Calculate(){

    var nama = document.getElementById("nama").value;
    var jumlah=document.getElementById("jumlah").value;
    if(nama=="")
    {
        alert("fields Nama Pelanggan harus diisi!!");
        return;
    }   
    else if(jumlah==""){
        alert("fields Jumlah Pemakaian harus diisi!");
        return;
    }
    else if(jumlah>30){
        alert("Jumlah hari tidak valid");
        return;
    }

    
    var kategori = document.getElementById("kategori").value;
    var jumlah=document.getElementById("jumlah").value;
    let data = list_Kategori[kategori];
    document.getElementById("det_nama").innerText=nama;
    document.getElementById("det_kat").innerText=kategori;
    document.getElementById("det_juml").innerText=jumlah;
    for (let i = 1; i <=jumlah; i++) {

        
        var newRow = display.insertRow(i);
        var cell1=newRow.insertCell(0);
        var cell2=newRow.insertCell(1);
        var cell3=newRow.insertCell(2);
        var cell4=newRow.insertCell(3);
        
        
        var subtotal=(data.tarif*i)+data.abodemen;
        var pajak = data.pajak*subtotal;
        var total = pajak+subtotal;
        cell1.innerHTML = i;
        cell2.innerHTML = data.tarif*i;
        cell3.innerHTML = data.abodemen;
        cell4.innerHTML = subtotal;
    }
    document.getElementById("subtotal").innerHTML=subtotal;
    document.getElementById("pajak").innerHTML=pajak;
    document.getElementById("total").innerHTML=total;


}
