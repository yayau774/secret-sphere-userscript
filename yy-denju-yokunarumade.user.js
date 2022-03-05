// ==UserScript==
// @name         スペル伝授が公式でよりよくなるまでの仮のやつ
// @namespace    https://github.com/yayau774/secret-sphere-userscript/
// @version      0.1
// @description  反映ボタンを使え
// @author       yayau
// @updateURL    https://github.com/yayau774/secret-sphere-userscript/raw/main/yy-denju-yokunarumade.user.js
// @match        http://www.sssloxia.jp/d/spellteach.aspx*
// @icon         https://www.google.com/s2/favicons?domain=sssloxia.jp
// @grant        none
// ==/UserScript==


//  各チェックボックスのonclickを削除
const chkboxes = document.querySelectorAll("input[type=checkbox]");
chkboxes.forEach(c => {
    c.removeAttribute('onclick');
});

//  submitの追加
const btn = document.createElement("button");
btn.type = "submit";
btn.innerText = "チェックを反映して送信";
chkboxes[0].closest("tbody").prepend(btn);

