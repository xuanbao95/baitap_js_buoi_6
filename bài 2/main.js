document.getElementById("btnLuyThua").addEventListener("click", function () {
    var num1 = document.getElementById("nhapX").value;
    var num2 = document.getElementById("nhapN").value;
    var s = 0;
    for (var i = 0; i < num2; i++) {
        num1 *= num2;
        s += num1;
    }
    document.getElementById("ketQua").innerHTML = s;
});