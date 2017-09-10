function randcol() {
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    var bgcolor = getRandomColor();
    document.body.style.backgroundColor = bgcolor;
    document.getElementById("hexcode").innerHTML = "<h1>" + bgcolor + "</h1>";
}
//setTimeout("location.reload()", 500);
randcol();

document.body.onkeydown = function(e){
    if(e.keyCode == 32 || e.keyCode == 0){
randcol();
    }
}