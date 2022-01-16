// ==UserScript==
// @name         戦闘設定画面を見やすくするやつ
// @namespace    https://github.com/yayau774/secret-sphere-userscript/
// @version      0.2
// @description  戦闘設定画面の魔法陣を消す/アイコンリスト非表示をデフォルト化
// @author       yayau
// @updateURL    https://github.com/yayau774/secret-sphere-userscript/raw/main/yy-battle-0.user.js
// @match        http://www.sssloxia.jp/d/battle.aspx*
// @icon         https://www.google.com/s2/favicons?domain=sssloxia.jp
// @grant        none
// ==/UserScript==

(function(){
    'use strict';

    // 戦闘宣言画面の魔法陣を消す
    const magiccircle = document.querySelector("td.magiccircle");
    magiccircle.classList.remove("magiccircle");

    // アイコンリストの初期設定をcloseに
    const icondiv = document.querySelector("div#icondiv");
    icondiv.classList.add("close");

})();
