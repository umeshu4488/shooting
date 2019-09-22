(function() {
    "use strict";

    var dot1 = document.getElementById("dot1"),
        dot2 = document.getElementById("dot2"),
        dot3 = document.getElementById("dot3"),        
        gotohome = document.getElementById("gotohome"),
        hand1 = document.getElementById("hand1"),
        hand1 = document.getElementById("hand1"),
        eye = document.getElementById("eye"),
        second = 0;

//-------------------------------------------------------

    var dotdisplay = function() {
        function dotting() {
            second++;

            switch (second) {
                case 1:
                    dot1.style.color = "white";
                    hand1.innerHTML = "~";
                    hand2.innerHTML = "~";
                    eye.innerHTML = "o o";
                    break;
                case 2:
                    dot2.style.color = "white";
                    hand1.innerHTML = "m";
                    hand2.innerHTML = "m";
                    eye.innerHTML = ". .";
                    break;
                case 3:
                    dot3.style.color = "white";
                    hand1.innerHTML = "~";
                    hand2.innerHTML = "~";
                    eye.innerHTML = "o o";
                    break;
                case 4:
                    dot1.style.color = "black";
                    dot2.style.color = "black";
                    dot3.style.color = "black";
                    hand1.innerHTML = "m";
                    hand2.innerHTML = "m";
                    eye.innerHTML = ". .";
                    second = 0;
                    break;
            }
        }
        setInterval(function() {dotting()},777);
    }
    window.addEventListener("load",dotdisplay);

//-------------------------------------------------------

    gotohome.addEventListener("click",function() {
        window.location.href = "./home.html";
    });

})();