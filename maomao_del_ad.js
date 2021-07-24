// ==UserScript==
// @name         maomao
// @namespace    http://mfff56.com/miey/*
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://mfff56.com/*.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.whichButton = function (){
        // A S  上下页
        if(event.keyCode==65){
            document.querySelector("body > div:nth-child(10) > div.mainAreaBlack > h3:nth-child(1) > span.last > a").click();
        }
        if(event.keyCode==83){
            document.querySelector("body > div:nth-child(10) > div.mainAreaBlack > h3:nth-child(1) > span.next > a").click();
        }
    }
    document.querySelector("body").setAttribute("onkeydown","whichButton(event)");
    document.querySelector("body > div:nth-child(9)")


    var auto = setInterval(function(){
        console.log("del ad ...");
        var url = window.location.href;
        try{document.querySelector("body > div.nav_bar").style.display="none";}catch(e){};
        try{document.querySelector("body > div.bdshare-slide-button-box.bdshare-slide-style-r5").style.display="none";}catch(e){};

        try{document.querySelector("#span_ed1").style.display="none";}catch(e){};
        try{document.querySelector("#span_ed3").style.display="none";}catch(e){};
        try{document.querySelector("#span_ed5").style.display="none";}catch(e){};
        try{document.querySelector("#span_ed7").style.display="none";}catch(e){};
        try{document.querySelector("#span_ed8").style.display="none";}catch(e){};

        //         导航栏  列表页
        if (url.indexOf("gera")!=-1){
            try{document.querySelector("body > div.layout").style.display="none";}catch(e){};
            try{document.querySelectorAll("body > div.layout.mt10")[0].style.display="none";}catch(e){};
            try{document.querySelectorAll("body > div.layout.mt10")[1].style.display="none";}catch(e){};
            try{document.querySelectorAll("body > div.layout.mt10")[3].style.display="none";}catch(e){};
        }

        //             图片页
        if (url.indexOf("miey")!=-1){
            try{document.querySelector("body > div.layout").style.display="none";}catch(e){};
            try{document.querySelectorAll("body > div.layout.mt10")[0].style.display="none";}catch(e){};
            try{document.querySelectorAll("body > div.layout.mt10")[1].style.display="none";}catch(e){};
            try{document.querySelectorAll("body > div.layout.mt10")[2].style.display="none";}catch(e){};
            try{document.querySelectorAll("body > div.layout.mt10")[4].style.display="none";}catch(e){};

        }

        //         try{document.querySelector("body > div:nth-child(6)").style.display="none";}catch(e){};
        //         try{document.querySelector("body > div:nth-child(7)").style.display="none";}catch(e){};
        //         try{document.querySelector("body > div:nth-child(8)").style.display="none";}catch(e){};
        //         try{document.querySelector("body > div:nth-child(9)").style.display="none";}catch(e){};
        //         try{document.querySelector("body > div:nth-child(10) > div.mainArea.px9").style.display="none";}catch(e){};
        //         try{document.querySelector("body > div:nth-child(11)").style.display="none";}catch(e){};

    },100);

    // Your code here...
})();