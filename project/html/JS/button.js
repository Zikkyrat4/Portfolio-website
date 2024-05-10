var count = 0;
document.getElementById("myButton").onclick = function () {
    count++;
    if (count % 2 == 0){
        document.getElementById("demo").innerHTML = "";
    }else{
        var img = document.createElement("img");
        img.src = "Images/eg.jpg"
        document.getElementById("demo").appendChild(img);
    }

}

"https://gas-kvas.com/grafic/uploads/posts/2023-10/1696609395_gas-kvas-com-p-kartinki-kota-malenkaya-1.jpg"