// ==UserScript==
// @name         テーブルの背景透過を避ける
// @namespace    https://github.com/yayau774/secret-sphere-userscript/
// @version      0.2
// @description  
// @author       yayau
// @updateURL    https://github.com/yayau774/secret-sphere-userscript/raw/main/yy-no-transparent.user.js
// @match        http://www.sssloxia.jp/*
// @icon         https://www.google.com/s2/favicons?domain=sssloxia.jp
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    // Your code here...
    document.querySelector("head").insertAdjacentHTML("beforeend","<style> table * {background-color:rgb(0, 0, 25)}</style>");
})();
