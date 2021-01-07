function btnBamDi(event) {
    event.preventDefault();
    var num = document.getElementById("giaiThua").value;
    var i = 0;
    var giaiThua = 0;
    do {
        i++
        giaiThua *= i
    } while (i < num)
    var div = document.createElement("div");
    document.getElementById("card-body").appendChild(div) = giaiThua;
}