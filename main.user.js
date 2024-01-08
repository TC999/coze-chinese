// ==UserScript==
// @name         Coze中文化插件
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动将公共组件翻译为中文，使用ChatGPT编写
// @author       TC999
// @match        http://www.coze.com/*
// @grant        none
// @require      https://raw.githubusercontent.com/TC999/coze-chinese/main/locals.js
// ==/UserScript==

(function() {
    // 一种假设你的翻译字典在trans.js文件中，并且它被封装在一个对象中的情况
    // 需要确保你的trans.js文件包含类似的对象，并且被正确引入 
    // 例如: var translations = { "Hello": "Hola", "Goodbye": "Adiós" }
    // 你需要使用真实的翻译源文件
    $.getScript("https://raw.githubusercontent.com/TC999/coze-chinese/main/locals.js", function( data, textStatus, jqxhr ) {
        console.log("Translation script loaded!");
    });

    const targetNode = document.querySelector('body');
    var config = { childList: true, subtree: true };
    let callback = function(mutationsList, observer) {
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // 在网页上找到所有的段落元素，然后翻译它们的文本
                $('p').each(function() {
                    let originalText = $(this).text();
                    let translatedText = translations[originalText];
                    if(translatedText) {
                        $(this).text(translatedText);
                    }
                });
            }
        }
    };
    let observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
})();