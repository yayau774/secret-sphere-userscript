// ==UserScript==
// @name         ひみたま個人結果になびばーをつける
// @namespace    https://github.com/yayau774/secret-sphere-userscript/
// @version      0.2
// @description  なびばーをつける。
// @author       yayau
// @updateURL    https://github.com/yayau774/secret-sphere-userscript/raw/main/yy-navibar.user.js
// @match        http://www.sssloxia.jp/result/*/c/*.html
// @icon         https://www.google.com/s2/favicons?domain=sssloxia.jp
// @grant        none
// ==/UserScript==


(function(){
    'use strict';

    //  div.mainのheightが0で、これを解除しないとナビバーを固定できない
    window.addEventListener("load", () => {
        console.log("onload");
        document.querySelector("div.main").style.height = "unset";
    });

    //  bodyの最初にナビバーを追加
    yyAddNavibar();

    //	iframe#PCData の参照するurlでweekが指定されていないときは新規登録の結果っぽい。
    //	途中参加のひとの新規回を開いたとき、URLがnowだった場合にそれが第何回更新かわからない。
    const pcdataWeek = new URL(document.getElementById("PCData").src).searchParams.get("Week") ?? 1;
    
    //	[a, b, c] = array　みたいなのを分割代入っていうんだって
    //	更新回の部分とファイル名から拡張子を除いた部分をそれぞれ取得
    //	再更新結果のURL形式がわかったら調整すること
    //	  [空, "result", week, "c", file, "html"]　これが基本
    const [  ,         , week,    , file, ] = window.location.pathname.split(/[\/\.]/);
    const isNow = (week == "now");

    //  LocalStorageに保存してある最新weekを必要なら更新
    updateLocalstrageNow();

    //  naviのinputにこのページの更新回とPNoを突っ込む
    const naviWeek = document.querySelector("#yy-navi-week");
    const naviPNo  = document.querySelector("#yy-navi-pno");
    naviWeek.value = week;
    naviPNo.value  = file;

    //  各ボタンにジャンプ機能を設定
    document.getElementById("yyNaviJump").addEventListener("submit", e => {
        e.preventDefault();
        naviJump(naviWeek.value, naviPNo.value);
    });
    document.getElementById("yyNaviPrev").addEventListener("click", e => {
        let week = parseInt(naviWeek.value, 10);
        week = isNaN(week) ? getNow() : week;
        naviJump( (week > 1 ? week - 1 : 1), naviPNo.value);
    });
    document.getElementById("yyNaviNext").addEventListener("click", e=>{
        let week = parseInt(naviWeek.value, 10);
        week = isNaN(week) ? getNow() : week;
        naviJump( (week+1 >= getNow() ? "now" : week + 1), naviPNo.value);
    });
    document.getElementById("yyNaviNow").addEventListener("click", e=>{
        naviJump("now", naviPNo.value);
    });
    

    //  localstorageにあるnowを更新
    function updateLocalstrageNow(){
        //  最新回　かつ　PCDataの参照するweekがローカルストレージ内の最新回よりも進んでいたら更新
        if( isNow && (Number(pcdataWeek) > (window.localStorage.getItem("yy-navi-now") ?? 0)))
        {
            window.localStorage.setItem("yy-navi-now", pcdataWeek);
        }
        console.log("最新回: "+ window.localStorage.getItem("yy-navi-now"));
    }
    
    //  naviをつくる
    function yyAddNavibar(){
        document.querySelector('head').insertAdjacentHTML('beforeend', `
            <style>
            div#yy-navibar{
                position: sticky;
                top: 0;
                background-color: black;
                z-index: 10;
                padding: 1em;
            }
            div#yy-navibar * {
                vertical-align: bottom;
                margin: 0;
                padding: 0;
                font-family: 'Meiryo';
            }
            div#yy-navibar button {	padding: 0 0.5em; }
            div#yy-navibar form   {
                display: inline;
                margin-left: 1em;
                margin-right: 3em;
            }
            div#yy-navibar input  {
                width: 3em;
                padding-right: 0.3em;
                text-align: right;
            }
            div#yy-navibar a{
                font-weight: bolder;
                color: orange;
            }
            </style>`);
        document.querySelector('body').insertAdjacentHTML('beforebegin', `
            <div id="yy-navibar" style="display:sticky; top:0">　
                <form id="yyNaviJump">
                    <button id="yyNaviPrev" type="button">&lt;</button>
                    <input type="text" id="yy-navi-week" name="week" placeholder="now">
                    <button id="yyNaviNext" type="button">&gt;</button>
                    <button id="yyNaviNow"  type="button">now</button>　
                    <input type="text" id="yy-navi-pno" name="pno" placeholder="pno" inputmode="numeric">
                    <button type="submit">jump</button>
                </form>

                <a href="http://www.sssloxia.jp/rule/" target="_blank">ルール</a>　　,
                <a href="http://www.sssloxia.jp/d/shoplist.aspx" target="_blank">売店リスト</a>　　,
                <a href="#PCData">PCデータ</a>　　,
                <a href="https://data.teiki.org/hmtm/" target="_blank">データ小屋</a>
            </div>`);
        console.log("navibar added");
    }

    //  最新回を取得
    function getNow(){
        return Number(window.localStorage.getItem("yy-navi-now"));
    }
    
    //	じゃんぷ。これは個人結果にしか飛べない。
    function naviJump(week, file){
        window.location.href = `../../${week}/c/${file}.html`;
    }
    
})();
