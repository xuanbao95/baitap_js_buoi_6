function btnBamDi(event) {
    event.preventDefault();
    var num = document.getElementById("soNguyen").value;
    var i = 0;
    var min = 0
    for (i; i < num; i++) {
        min += i;
    }
    document.getElementById("footer").innerHTML = i;
}