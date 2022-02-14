function setupCookieBar(){function e(){if(document.cookie.length>0||null!==window.localStorage&&window.localStorage.length>0){var e=c();void 0===e?C=!0:I=!0}else C=!1;y("always")&&(C=!0),!0===C&&!1===I&&t()}function t(){var e=a(),t="";y("theme")&&(t="-"+y("theme"));var n=E.replace(/[^\/]*$/,""),i=E.indexOf(".min")>-1?".min":"",c=document.createElement("link");c.setAttribute("rel","stylesheet"),c.setAttribute("href",n+"themes/cookiebar"+t+i+".css"),document.head.appendChild(c);var r=new XMLHttpRequest;r.open("GET",n+"lang/"+e+".html",!0),r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){var e=document.createElement("div");e.innerHTML=r.responseText,document.getElementsByTagName("body")[0].appendChild(e),g=document.getElementById("cookie-bar"),k=document.getElementById("cookie-bar-button"),b=document.getElementById("cookie-bar-button-no"),f=document.getElementById("cookie-bar-prompt"),v=document.getElementById("cookie-bar-prompt-button"),h=document.getElementById("cookie-bar-prompt-close"),promptContent=document.getElementById("cookie-bar-prompt-content"),B=document.getElementById("cookie-bar-no-consent"),thirdparty=document.getElementById("cookie-bar-thirdparty"),tracking=document.getElementById("cookie-bar-tracking"),customize=document.getElementById("cookie-bar-customize-block"),buttonCustomize=document.getElementById("cookie-bar-button-customize"),buttonSaveCustomized=document.getElementById("cookiebar-save-customized"),customizeBlock=document.getElementById("cookie-bar-customize-block"),customizeTracking=document.getElementById("cookiebar-tracking-input"),customizeThirdParty=document.getElementById("cookiebar-third-party-input"),scrolling=document.getElementById("cookie-bar-scrolling"),privacyPage=document.getElementById("cookie-bar-privacy-page"),privacyLink=document.getElementById("cookie-bar-privacy-link"),mainBarPrivacyLink=document.getElementById("cookie-bar-main-privacy-link"),y("showNoConsent")||(B.style.display="none",b.style.display="none"),y("showCustomConsent")&&(buttonCustomize.style.display="none"),y("blocking")&&(d(f,500),h.style.display="none"),y("thirdparty")?(thirdparty.style.display="block",customizeThirdParty.style.display="block"):(thirdparty.style.display="none",customizeThirdParty.style.display="none"),y("tracking")?(tracking.style.display="block",customizeTracking.style.display="block"):(tracking.style.display="none",customizeTracking.style.display="none"),y("hideDetailsBtn")&&(v.style.display="none"),y("scrolling")&&(scrolling.style.display="inline-block"),y("top")?(g.style.top=0,m("top")):(g.style.bottom=0,m("bottom")),y("privacyPage")&&(privacyLink.href=o(),privacyPage.style.display="inline-block"),y("showPolicyLink")&&y("privacyPage")&&(mainBarPrivacyLink.href=o(),mainBarPrivacyLink.style.display="inline-block"),y("customize")?(customizeBlock.style.display="block",buttonCustomize.style.display="block"):(customizeBlock.style.display="none",buttonCustomize.style.display="none"),p(),d(g,250),m()}},r.send()}function o(){return decodeURIComponent(y("privacyPage"))}function n(){var e=document.getElementsByTagName("script");for(i=0;i<e.length;i+=1)if(e[i].hasAttribute("src")&&(path=e[i].src,path.indexOf("cookiebar")>-1))return path}function a(){var e=y("forceLang");return!1===e&&(e=navigator.language||navigator.userLanguage),e=e.substr(0,2),CookieLanguages.indexOf(e)<0&&(e="en"),e}function c(){var e=document.cookie.match(/(;)?cookiebar=([^;]*);?/);return null==e?void 0:decodeURI(e[2])}function r(e,t){var o=30;y("remember")&&(o=y("remember"));var n=new Date;n.setDate(n.getDate()+parseInt(o));var i=encodeURI(t)+(null===o?"":"; expires="+n.toUTCString()+";path=/");document.cookie=e+"="+i}function l(){document.cookie.split(";").forEach(function(e){document.cookie=e.replace(/^\ +/,"").replace(/\=.*/,"=;expires="+(new Date).toUTCString()+";path=/")}),null!==localStorage&&localStorage.clear()}function d(e,t){var o=e.style;o.opacity=0,o.display="block",function e(){!((o.opacity-=-.1)>.9)&&setTimeout(e,t/10)}()}function s(e,t){var o=e.style;o.opacity=1,function e(){(o.opacity-=.1)<.1?o.display="none":setTimeout(e,t/10)}()}function m(e){setTimeout(function(){var t=document.getElementById("cookie-bar").clientHeight,o=document.getElementsByTagName("body")[0],n=o.currentStyle||window.getComputedStyle(o);switch(e){case"top":o.style.marginTop=parseInt(n.marginTop)+t+"px";break;case"bottom":o.style.marginBottom=parseInt(n.marginBottom)+t+"px"}},300)}function u(){var e=document.getElementById("cookie-bar").clientHeight;if(y("top")){var t=parseInt(document.getElementsByTagName("body")[0].style.marginTop);document.getElementsByTagName("body")[0].style.marginTop=t-e+"px"}else{var o=parseInt(document.getElementsByTagName("body")[0].style.marginBottom);document.getElementsByTagName("body")[0].style.marginBottom=o-e+"px"}}function y(e){var t=E.split(e+"=");return!!t[1]&&t[1].split(/[&?]+/)[0]}function p(){if(k.addEventListener("click",function(){r("cookiebar","CookieAllowed"),u(),s(f,250),s(g,250),y("refreshPage")&&window.location.reload()}),b.addEventListener("click",function(){var e=B.textContent.trim(),t=!0;y("noConfirm")||(t=window.confirm(e)),!0===t&&(l(),r("cookiebar","CookieDisallowed"),u(),s(f,250),s(g,250))}),buttonSaveCustomized.addEventListener("click",function(){r("cookiebar","CookieCustomized"),r("cookiebar-tracking",document.getElementById("cookiebar-tracking").checked),r("cookiebar-third-barty",document.getElementById("cookiebar-third-party").checked),u(),s(f,250),s(g,250),y("refreshPage")&&window.location.reload()}),v.addEventListener("click",function(){d(f,250)}),h.addEventListener("click",function(){s(customize,0),s(f,250)}),buttonCustomize.addEventListener("click",function(){d(customize,0),d(f,250)}),y("scrolling")){var e=document.body.getBoundingClientRect().top,t=!1;window.addEventListener("scroll",function(){!1===t&&(document.body.getBoundingClientRect().top-e>250||document.body.getBoundingClientRect().top-e<-250)&&(r("cookiebar","CookieAllowed"),u(),s(f,250),s(g,250),t=!0,y("refreshPage")&&window.location.reload())})}}var g,k,b,f,v,h,B,E=n(),C=!1,I=!1,w=c();if("CookieDisallowed"==w&&(l(),r("cookiebar","CookieDisallowed")),void 0===w)if(y("noGeoIp"))C=!0,e();else{var T=new XMLHttpRequest;T.open("GET","https://freegeoip.app/json/",!0),T.onreadystatechange=function(){if(4===T.readyState){if(clearTimeout(L),200===T.status){var t=JSON.parse(T.responseText).country_code;cookieLawStates.indexOf(t)>-1?C=!0:(I=!0,r("cookiebar","CookieAllowed"),y("refreshPage")&&window.location.reload())}else C=!0;e()}};var L=setTimeout(function(){console.log("cookieBAR - Timeout for ip geolocation"),T.onreadystatechange=function(){},T.abort(),C=!0,e()},1500);T.send()}}var CookieLanguages=["bg","br","ca","cs","da","de","el","en","es","fi","fr","hr","hu","it","nl","no","oc","pl","pt","ro","ru","se","sk","sl","tr"],cookieLawStates=["AT","BE","BG","BR","CY","CZ","DE","DK","EE","EL","ES","FI","FR","GB","HR","HU","IE","IT","LT","LU","LV","MT","NL","NO","PL","PT","RO","SE","SI","SK"];document.addEventListener("DOMContentLoaded",function(){setupCookieBar()});