function btnSoNguyen(event) {
    event.preventDefault();
    var num = document.getElementById("inSoNguyen").value;
    var soNguyen = "";
    for (var i = 0; i < num; i++) {
        soNguyen += " " + i;
    }
    // var para = document.createElement("p");
    // document.getElementById("footer").appendChild(para) = soNguyen;
    document.getElementById("footer").innerHTML = soNguyen;
}