// ==UserScript==
// @name         なまえ
// @namespace    https://github.com/yayau774/secret-sphere-userscript/
// @version      0.0
// @description  せつめい
// @author       yayau
// @updateURL    https://github.com/yayau774/secret-sphere-userscript/raw/main/なんとかかんとか
// @match        URLるーる
// @icon         https://www.google.com/s2/favicons?domain=sssloxia.jp
// @grant        none
// ==/UserScript==

(function(){
    'use strict';


    //  head最後にスタイルシートを追加
    document.querySelector('head').insertAdjacentHTML('beforeend', `
    <style>
    </style>`);

    //  bodyてっぺんにDOMを追加
    document.querySelector('body').insertAdjacentHTML('beforebegin', `
    <div></div>
    </div>`);

})();
