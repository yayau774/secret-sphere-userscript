// ==UserScript==
// @name         背景画像を非表示
// @namespace    https://github.com/yayau774/secret-sphere-userscript/
// @version      0.1
// @description  
// @author       yayau
// @updateURL    https://github.com/yayau774/secret-sphere-userscript/raw/main/yy-no-bgimage.user.js
// @match        http://www.sssloxia.jp/*
// @icon         https://www.google.com/s2/favicons?domain=sssloxia.jp
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    document.querySelector("body").style.backgroundImage = "unset";

})();
