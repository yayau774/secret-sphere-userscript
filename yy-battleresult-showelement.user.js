// ==UserScript==
// @name         ひみたま）各戦闘結果で属性を表示する
// @namespace    https://github.com/yayau774/secret-sphere-userscript/
// @version      0.1
// @description  せつめい
// @author       yayau
// @updateURL    https://github.com/yayau774/secret-sphere-userscript/raw/main/yy-battleresult-showelement.user.js
// @match        http://www.sssloxia.jp/result/*/b/*
// @match        http://www.sssloxia.jp/result/*/pk/*
// @match        http://www.sssloxia.jp/result/*/prc/*
// @match        http://www.sssloxia.jp/result/*/rank/*
// @icon         https://www.google.com/s2/favicons?domain=sssloxia.jp
// @grant        none
// ==/UserScript==

/**
 * 余談
 * cssを用いて::beforeを使っているので、良くも悪くもテキストとしてはコピーできないんだ
 */

(function(){
    'use strict';


    //  head最後にスタイルシートを追加
    document.querySelector('head').insertAdjacentHTML('beforeend', `
    <style>
    *[title]::before{
        content: "[" attr(title) "]";
        color: silver;
        font-size: small;
    }
    </style>`);

})();
