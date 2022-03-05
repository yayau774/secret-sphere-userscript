// ==UserScript==
// @name         ひみたま売店リスト内スペルリストの表示をよくする
// @namespace    https://github.com/yayau774/secret-sphere-userscript/
// @version      0.3
// @description  調律済みを消したり出したり
// @author       yayau
// @updateURL    https://github.com/yayau774/secret-sphere-userscript/raw/main/yy-spelllist-arrange.user.js
// @match        http://www.sssloxia.jp/d/spelllist.aspx
// @icon         https://www.google.com/s2/favicons?domain=sssloxia.jp
// @grant        none
// ==/UserScript==

(function(){
    'use strict';


    //  独自スペルのtableを得る
    const tblTuned = Array.from(document.querySelectorAll("table")).filter((tbl)=>{
        return !tbl.id.endsWith("osgv");
    })


    //  切り替えボタンを追加
    const btnTgl = document.createElement("button");
    btnTgl.type = "button";
    btnTgl.textContent = "TGを与えられたスペルを隠す";
    btnTgl.style.marginLeft = "auto";
    btnTgl.addEventListener("click", toggleTunedVisibility);

    const h1 = document.querySelector("div.h1");
    h1.parentElement.insertBefore(btnTgl, h1.nextElementSibling);

    //  head最後にスタイルシートを追加
    //  表示切替の時にdisplay:none;をつけたり消したり出来るように。
    document.querySelector('head').insertAdjacentHTML('beforeend', `
    <style>
    .yy-display-none {display:none;}
    </style>`);

    //  きりかえ
    function toggleTunedVisibility(ev){
        ev.preventDefault();
        btnTgl.textContent = (btnTgl.textContent == "TGを与えられたスペルを隠す" ? "TGを与えられたスペルを表示する" : "TGを与えられたスペルを隠す");
        tblTuned.forEach(tbl=>{
            tbl.classList.toggle("yy-display-none");
        });
    }
    

    
})();
