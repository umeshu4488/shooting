(function (){
    "use strict";

    var winner = document.getElementById("winner"),
        strong = document.getElementById("strong"),
        start = document.getElementById("start"),
        count = document.getElementById("count"),
        ball0 = document.getElementById("ball0"),
        ball1 = document.getElementById("ball1"),
        ball2 = document.getElementById("ball2"),
        ball3 = document.getElementById("ball3"),
        user1 = document.getElementById("user1"),
        user2 = document.getElementById("user2"),
        user3 = document.getElementById("user3"),
        fire1 = document.getElementById("fire1"),
        fire2 = document.getElementById("fire2"),
        fire3 = document.getElementById("fire3"),
        move1 = document.getElementById("move1"),
        move2 = document.getElementById("move2"),
        move3 = document.getElementById("move3"),
        body = document.getElementById("body"),
        time = document.getElementById("time"),
        gameover = document.getElementById("gameover"),
        mainmenu = document.getElementById("mainmenu"),
        character = document.getElementById("character");

        user2.style.display = "inline-block";
        move1.style.display = "inline-block";
        move3.style.display = "inline-block";
        
        var win = 0;
        winner.innerHTML = "winners : " + win;
        
//---------------------------------------------------------------
//start button -> countdown
    start.addEventListener("mousedown", function() {
        this.className = "pushed";
    });
    start.addEventListener("mouseup", function() {
        this.className = "";
    });

    var countdown = function (){
            strong.style.visibility = "hidden";
            start.style.visibility = "hidden";

            count.style.display = "inline-block";
            var i = 3,
                cc;
            count.innerHTML = i;

            function output() {
                i--;
                count.innerHTML = i;
                if (i === 0) {
                    count.innerHTML = "Start";
                    ball();                    
                    prewatcher();
                }
                if (i === -1) {
                    count.style.display = "none";
                    clearInterval(cc);
                }
            }
            cc = setInterval(function() {output()},1000); //cancel count
        }
        start.addEventListener("click",countdown);

//---------------------------------------------------------------
//timer
    var o = 60;
    function prewatcher() {
        function watcher() {
            time.style.display = "inline-block";

            var ct; //cancel timer
            if (o !== 0) {
                time.innerHTML = o;
                o--;            
            }
            if (o === 0) {
                o = 0;
                win++;
                wninner.innerHTML = "Winner: " + win;
                time.innerHTML = "Finish!";
                time.style.fontSize = "50px";
                clearInterval(ct);
                clearInterval(ball());
            }
            if (fire1.style.display === "inline-block" ||
                fire2.style.display === "inline-block" ||
                fire3.style.display === "inline-block") {
                //gameover.style.display = "inline-block";
                clearInterval(ct);
                var retry = "Do you want to retry with the same character?\nIf yes, please click \"OK\".\nIf no, please click \"Cancel\". You can select a character again."
                if (window.confirm(retry)) {
                    window.location.reload();
                } else {
                    window.location.href = "home.html";
                }
            }
        }
        ct = setInterval(function() {watcher()},1000);
    }

//---------------------------------------------------------------
//ball
    function ball() {        
    function ballgo1() {
        var random = Math.floor(Math.random()*3);    
//---------------------------------------------------
//ball1
        if (random === 0) {
            var j = 200,
                c1;
            ball0.style.display = "none";
            ball1.style.display = "inline-block";
            ball1.style.position = "absolute";
        
            function ball1go() {//function to move ball right
                j += 20;
                ball1.style.left = j +"px";
                if (j === 820) {
                    if (user1.style.display === "inline-block") {
                        fire1.style.display = "inline-block";
                    }
                    ball1.style.display = "none";
                    ball1.style.left = "-820px";              
                    clearInterval(c1);
                }
                if (fire1.style.display === "inline-block" ||
                    fire2.style.display === "inline-block" ||
                    fire3.style.display === "inline-block") {
                    time.style.display = "none";
                    gameover.innerHTML = "Game Over...";
                    gameover.style.display = "inline-block";
                    move1.style.display = "none";
                    user1.style.display = "none";
                    clearInterval(c1);
                    clearInterval(ball());
                }
                if (o === 0) {
                    clearInterval(c1);
                    ball1.style.display = "none";
                    ball2.style.display = "none";
                    ball3.style.display = "none";
                    user1.style.disply = "none";
                    user2.style.display = "none";
                    user3.style.display = "none";
                    gameover.style.color = "darkred";
                    gameover.innerHTML = "Congratulations!!";
                    gameover.style.width = "360px";
                    gameover.style.display = "inline-block";
                    time.innerHTML = "Finish!";
                    time.style.fontSize = "50px";
                    win++;
                    wninner.innerHTML = "Winner: " + win;
                    clearInterval(ct);
                    clearInterval(ball());                    
                }
            }
            c1 = setInterval(function() {ball1go()},10);

//---------------------------------------------------
//ball2
        } else if (random === 1) {
            if (random === 1) {
            ball2.style.display = "none";                
            }
            var k = 200,
                c2;
            ball0.style.display = "none";
            ball2.style.display = "inline-block";
            ball2.style.position = "absolute";
        
            function ball2go() {
                k += 10;
                ball2.style.left = k +"px";
                if (k === 820) {
                    if (user2.style.display === "inline-block") {
                        fire2.style.display = "inline-block";
                    }
                    ball2.style.display = "none";
                    ball2.style.left = "-820px";
                    clearInterval(c2);
                }
                if (fire1.style.display === "inline-block" ||
                    fire2.style.display === "inline-block" ||
                    fire3.style.display === "inline-block") {
                    time.style.display = "none";
                    gameover.innerHTML = "Game Over...";                    
                    gameover.style.display = "inline-block";
                    move2.style.display = "none";
                    user2.style.display = "none";
                    clearInterval(c2);
                }
                if (o === 0) {
                    clearInterval(c2);
                    ball1.style.display = "none";
                    ball2.style.display = "none";
                    ball3.style.display = "none";
                    user1.style.display = "none";
                    user2.style.display = "none";
                    user3.style.display = "none";
                    gameover.innerHTML = "Congratulations!!";
                    gameover.style.width = "360px";
                    gameover.style.display = "inline-block";
                    time.innerHTML = "Finish!";
                    time.style.fontSize = "50px";                    
                }
            }
            c2 = setInterval(function() {ball2go()},10);

//---------------------------------------------------
//ball3
        } else {
            if (random === 2) {
                ball3.style.display = "none";                
                }      
            var l = 200,
                c3;
            ball0.style.display = "none";
            ball3.style.display = "inline-block";
            ball3.style.position = "absolute";

            function ball3go() {
                l += 5;
                ball3.style.left = l +"px";
                if (l === 820) {
                    if (user3.style.display === "inline-block") {
                        fire3.style.display = "inline-block";
                    }
                    ball3.style.display = "none";
                    ball3.style.left = "-820px";                                
                    clearInterval(c3);
                }
                if (fire1.style.display === "inline-block" ||
                    fire2.style.display === "inline-block" ||
                    fire3.style.display === "inline-block") {
                    time.style.display = "none";
                    gameover.innerHTML = "Game Over...";
                    gameover.style.display = "inline-block";
                    move3.style.display = "none";
                    user3.style.display = "none";
                    clearInterval(c3);
                }
                if (o === 0) {
                    clearInterval(c3);
                    ball1.style.display = "none";
                    ball2.style.display = "none";
                    ball3.style.display = "none";
                    user1.style.display = "none";
                    user2.style.display = "none";
                    user3.style.display = "none";
                    gameover.innerHTML = "Congratulations!!";
                    gameover.style.width = "360px";
                    gameover.style.display = "inline-block";
                    time.innerHTML = "Finish!";
                    time.style.fontSize = "50px";
                }
            }
            c3 = setInterval(function() {ball3go()},10);
        }
    }
    var cs1 = setInterval(function() {ballgo1()},2000);
    }

//---------------------------------------------------

mainmenu.addEventListener("click",function(){
    window.location.href = "./index.html";
});

character.addEventListener("click",function(){
    window.location.href = "./home.html";
});
        
//---------------------------------------------------
//move character
    var character1 = function() {
        move1.style.display = "none";
        move2.style.display = "inline-block";
        move3.style.display = "inline-block";
        user1.style.display = "inline-block";
        user2.style.display = "none";
        user3.style.display = "none";
    }
    move1.addEventListener("click",character1);

    var character2 = function() {
        move1.style.display = "inline-block";
        move2.style.display = "none";
        move3.style.display = "inline-block";
        user1.style.display = "none";
        user2.style.display = "inline-block";
        user3.style.display = "none";
    }
    move2.addEventListener("click",character2);

    var character3 = function() {
        move1.style.display = "inline-block";
        move2.style.display = "inline-block";
        move3.style.display = "none";
        user1.style.display = "none";
        user2.style.display = "none";
        user3.style.display = "inline-block";
        
    }
    move3.addEventListener("click",character3);

//---------------------------------------------------
//u:85 d:68
/*    var n = "none",
        i = "inline-block",
        u = 85,
        d = 68;

    function move(e) {
    if ((user1.style.display === i) && 
    (user2.style.display === n) && 
    (user3.style.display === n)) {
        if (e.keyCode === u) {
            user1.style.display = i;
            user2.style.display = n;
            user3.style.display = n;
        } else if (e.keyCode === d) {
            user1.style.display = n;
            user2.style.display = i;
            user3.style.display = n;
        } else {
            user1.style.display = i;
            user2.style.display = n;
            user3.style.display = n;
        }
    }

    if ((user1.style.display === n) && 
    (user2.style.display === i) && 
    (user3.style.display === n)) {
        if (e.keyCode === u) {
            user1.style.display = i;
            user2.style.display = n;
            user3.style.display = n;
        } else if (e.keyCode === d) {
            user1.style.display = n;
            user2.style.display = n;
            user3.style.display = i;
        } else {
            user1.style.display = n;
            user2.style.display = i;
            user3.style.display = n;
        }
    }

    if ((user1.style.display === n) && 
    (user2.style.display === n) && 
    (user3.style.display === i)) {
        if (e.keyCode === u) {
            user1.style.display = n;
            user2.style.display = i;
            user3.style.display = n;
        } else if (e.keyCode === d) {
            user1.style.display = n;
            user2.style.display = n;
            user3.style.display = i;
        } else {
            user1.style.display = n;
            user2.style.display = n;
            user3.style.display = i;
        }
    }
    }
    document.addEventListener("keydown",move(e));
*/

//---------------------------------------------------
//random number
/*
var random = math.floor(math.random()*3);
var ballgo = function() {
    if (random === 0) {
        case1;
    } else if (random === 1) {
        case2;
    } else {
        case3;
    }
}
*/
//---------------------------------------------------
    /*mainmenu.addEventListener("click",function(){
        window.location.href = "./index.html";
    });*/

//---------------------------------------------------

})();