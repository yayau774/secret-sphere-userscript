// ==UserScript==
// @name         ひみたま）wikiの背景画像を非表示
// @namespace    https://github.com/yayau774/secret-sphere-userscript/
// @version      0.2
// @description  この@matchのURLを　.jp/rule/*　から　.jp/*　にするとひみたまサイトの全ページで背景が消えるようになり、透過させないユーザースクリプトは要らなくなる
// @author       yayau
// @updateURL    https://github.com/yayau774/secret-sphere-userscript/raw/main/yy-no-bgimage.user.js
// @match        http://www.sssloxia.jp/rule/*
// @icon         https://www.google.com/s2/favicons?domain=sssloxia.jp
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector("body").style.backgroundImage = "unset";

})();
