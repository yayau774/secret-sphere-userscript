// ==UserScript==
// @name         ひみたま売店リスト内スペルリストの表示をよくする
// @namespace    https://github.com/yayau774/secret-sphere-userscript/
// @version      0.2
// @description  調律済みを消したり出したり
// @author       yayau
// @updateURL    https://github.com/yayau774/secret-sphere-userscript/raw/main/yy-spelllist-arrange.user.js
// @match        http://www.sssloxia.jp/d/spelllist.aspx
// @icon         https://www.google.com/s2/favicons?domain=sssloxia.jp
// @grant        none
// ==/UserScript==

(function(){
    'use strict';

    /*

    スペルリストの表示が変わったので、一回ぜんぶコメントアウトして昨日を無効化しておく！

    //  テーブルを取得して、調律済み（TG欄になんか書いてあるもの）のtrにy-tunedクラスを割り当てる
    const tbl = document.querySelector("table#GridView1");
    tbl.querySelectorAll("tr").forEach(tr => {
        //  各行の10番目のtdの中身が1文字以上のときにtunedクラスを追加（見出し行でtdを見つけられず事故るので ?. を使う）
        if(tr.querySelector("td:nth-child(10)")?.textContent?.length > 0){
            console.log(tr.querySelector("td:nth-child(10)").textContent);
            tr.classList.add("yy-tuned");
        }
    });

    //  tunedなtrを改めて取得（ボタンによる切り替え操作で使う）
    const trTuned = tbl.querySelectorAll("tr.yy-tuned");

    //  切り替えボタンを追加
    const btnTgl = document.createElement("button");
    btnTgl.type = "button";
    btnTgl.textContent = "TGを与えられたスペルを隠す";
    btnTgl.style.marginLeft = "auto";
    btnTgl.addEventListener("click", toggleTunedVisibility);
    tbl.insertAdjacentElement('beforebegin', btnTgl);

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
        trTuned.forEach(tr=>{
            tr.classList.toggle("yy-display-none");
        });
    }
    

    */
})();
