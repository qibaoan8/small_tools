// ==UserScript==
// @name         maomao
// @namespace    http://mfff56.com/miey/*
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include        http://mfff56.com/*.html
// @include        http://mfff60.com/*.html
// @include        http://mfff61.com/*.html
// @include        http://mfff62.com/*.html


// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //     ��body�¼�
    document.querySelector("body").setAttribute("onkeydown","whichButton(event)");

    window.whichButton = function (){
        // A S  ����ҳ
        if(event.keyCode==65){
            try{document.querySelector("body > div:nth-child(10) > div.mainAreaBlack > h3:nth-child(1) > span.last > a").click();}catch(e){};
            try{document.querySelector("body > div.center.margintop.border.clear.main > div.pagea > a:nth-child(1)").click();}catch(e){};
        }
        if(event.keyCode==83){
            try{document.querySelector("body > div:nth-child(10) > div.mainAreaBlack > h3:nth-child(1) > span.next > a").click();}catch(e){};
            try{document.querySelector("body > div.center.margintop.border.clear.main > div.pagea > a:nth-child(3)").click();}catch(e){};
        }
    }


    var auto = setInterval(function(){
        console.log("del ad ...");
        var url = window.location.href;
        try{document.querySelector("body > div.nav_bar").style.display="none";}catch(e){};
        try{document.querySelector("body > div.bdshare-slide-button-box.bdshare-slide-style-r5").style.display="none";}catch(e){};

        try{document.querySelector("#span_ed1").style.display="none";}catch(e){};
        try{document.querySelector("#span_ed2").style.display="none";}catch(e){};

        try{document.querySelector("#span_ed3").style.display="none";}catch(e){};
        try{document.querySelector("#span_ed4").style.display="none";}catch(e){};

        try{document.querySelector("#span_ed5").style.display="none";}catch(e){};
        try{document.querySelector("#span_ed7").style.display="none";}catch(e){};
        try{document.querySelector("#span_ed8").style.display="none";}catch(e){};

        //         ������  �б�ҳ
        if (url.indexOf("gera")!=-1 || url.indexOf("liuc")!=-1){
            try{document.querySelector("body > div.layout").style.display="none";}catch(e){};
            try{document.querySelectorAll("body > div.layout.mt10")[0].style.display="none";}catch(e){};
            try{document.querySelectorAll("body > div.layout.mt10")[1].style.display="none";}catch(e){};
            try{document.querySelectorAll("body > div.layout.mt10")[3].style.display="none";}catch(e){};

            //         liuc
            try{document.querySelector("body > div.center.border.top").style.display="none";}catch(e){};
            try{document.querySelector("body > div.center.margintop.border.clear.menu").style.display="none";}catch(e){};
        }
        document.querySelector("body > div.center.border.top")

        //             ͼƬҳ
        if (url.indexOf("miey")!=-1){
            try{document.querySelector("body > div.layout").style.display="none";}catch(e){};
            try{document.querySelectorAll("body > div.layout.mt10")[0].style.display="none";}catch(e){};
            try{document.querySelectorAll("body > div.layout.mt10")[1].style.display="none";}catch(e){};
            try{document.querySelectorAll("body > div.layout.mt10")[2].style.display="none";}catch(e){};
            try{document.querySelectorAll("body > div.layout.mt10")[4].style.display="none";}catch(e){};
        }
        if(url.indexOf("rrxz")!=-1){
            try{document.querySelector("body > div.center.border.top").style.display="none";}catch(e){};
            try{document.querySelector("body > div.center.margintop.border.clear.menu").style.display="none";}catch(e){};

        }

    },100);

    // Your code here...
})();