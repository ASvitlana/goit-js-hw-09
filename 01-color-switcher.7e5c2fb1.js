!function(){console.log(896);var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),n=null;t.disabled=!0,e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,n=setInterval((function(){document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.addEventListener("click",(function(){clearInterval(n),e.disabled=!1,t.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.7e5c2fb1.js.map