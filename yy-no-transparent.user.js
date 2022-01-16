// ==UserScript==
// @name         テーブルの背景透過を避ける
// @namespace    https://github.com/yayau774/secret-sphere-userscript/
// @version      0.4
// @description  
// @author       yayau
// @updateURL    https://github.com/yayau774/secret-sphere-userscript/raw/main/yy-no-transparent.user.js
// @match        http://www.sssloxia.jp/*
// @exclude      http://www.sssloxia.jp/d/rp2*
// @icon         https://www.google.com/s2/favicons?domain=sssloxia.jp
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    // css取得
    const rules = document.styleSheets[0].cssRules;

    //  rgba(r, g, b, alpha)からrgbaを取得するための正規表現
    const re_rgba = /rgba\((\d+), (\d+), (\d+), (\d+\.\d+)\)/;

    //  ルールを見ていく
    for(let rule of rules){
        //  背景色の指定があるとき、それがrgba指定ならrgb化する
        if(rule?.style?.getPropertyValue("background-color")){
            let bgc = rule.style.getPropertyValue("background-color");
            console.log("rgba to rgb: " + rule.selectorText);
            rule.style.setProperty("background-color", bgc.replace(re_rgba, (match, p1, p2, p3, p4, offset, string) => {
                //console.log("rgba to rgb: " + rule.selectorText);
                //console.log(`rgba(${p1}, ${p2}, ${p3}, ${p4}) to rgb(${p1}, ${p2}, ${p3})`);
                return `rgb(${p1}, ${p2}, ${p3})`;
            }));
        }
    }
})();
