(function() {
    "use strict";

    var man = document.getElementById("man"),
        woman = document.getElementById("woman"),
        dog = document.getElementById("dog"),
        btnman = document.getElementById("btnman"),
        btnwoman = document.getElementById("btnwoman"),
        btndog = document.getElementById("btndog"),
        determine = document.getElementById("determine"),
        warn = document.getElementById("hide"),
        mainmenu = document.getElementById("mainmenu"),        
        select = 0;



    //for changing color
    var selectm = function (){
        btnman.style.backgroundColor = "blue";
        btnwoman.style.backgroundColor = "";
        btndog.style.backgroundColor = "";
        warn.style.color = "";
        warn.style.borderColor = "";
        select = 1;
    }
    btnman.addEventListener("click",selectm);
    man.addEventListener("click",selectm);

    var selectw = function (){
        btnwoman.style.backgroundColor = "blue";
        btnman.style.backgroundColor = "";
        btndog.style.backgroundColor = "";
        warn.style.color = "";
        warn.style.borderColor = "";
        select = 1;
    }
    btnwoman.addEventListener("click",selectw);
    woman.addEventListener("click",selectw);
    
    var selectd = function (){
        btndog.style.backgroundColor = "blue";
        btnwoman.style.backgroundColor = "";
        btnman.style.backgroundColor = "";
        warn.style.color = "";
        warn.style.borderColor = "";
        select = 1;
    }
    btndog.addEventListener("click",selectd);
    dog.addEventListener("click",selectd);

    //determine button effect
    determine.addEventListener("mousedown", function() {
        this.className = "pushed";
    })
    determine.addEventListener("mouseup", function() {
        this.className = "";
    })

    //for going to next page
    btnman.addEventListener("click",function (){
        determine.addEventListener("click",function(){
            window.location.href = "./game-m.html";
        });
    });
    man.addEventListener("click",function (){
        determine.addEventListener("click",function(){            
            window.location.href = "./game-m.html";
        });
    });

    btnwoman.addEventListener("click",function (){
        determine.addEventListener("click",function(){           
            window.location.href = "./game-w.html";
        });
    });
    woman.addEventListener("click",function (){
        determine.addEventListener("click",function(){            
            window.location.href = "./game-w.html";
        });
    });

    btndog.addEventListener("click",function (){
        determine.addEventListener("click",function(){            
            window.location.href = "./game-d.html";
        });
    });
    dog.addEventListener("click",function (){
        determine.addEventListener("click",function(){            
            window.location.href = "./game-d.html";
        });
    });
    
    determine.addEventListener("click",function(){
        if (select === 0) {
            warn.style.color = "white";
            warn.style.borderColor = "white";
        }
    });

    mainmenu.addEventListener("click",function(){
        window.location.href = "./index.html";
    });

})();