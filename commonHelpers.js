import"./assets/vite-promo-8a86c75b.js";/* empty css                      */import{f,i as h}from"./assets/vendor-77e16229.js";let u=null,a=null;function o(t){return t.toString().padStart(2,"0")}function y(t){const i=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:d,minutes:l,seconds:m}}f("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(!t.length)return;const e=t[0];if(e<new Date){h.error({title:"Error",message:"Please choose a date in the future"}),s();return}u=e,b()}});function S(){const t=u;a=setInterval(()=>{const e=t-new Date,n=y(e);if(e<=0){clearInterval(a),p();return}c(n)},1e3)}function p(){s(),c({days:0,hours:0,minutes:0,seconds:0})}function c({days:t,hours:e,minutes:n,seconds:r}){document.querySelector("[data-days]").textContent=o(t),document.querySelector("[data-hours]").textContent=o(e),document.querySelector("[data-minutes]").textContent=o(n),document.querySelector("[data-seconds]").textContent=o(r)}function b(){document.querySelector("[data-start]").removeAttribute("disabled")}function s(){document.querySelector("[data-start]").setAttribute}const q=document.querySelector("button[data-start]");q.addEventListener("click",S);
//# sourceMappingURL=commonHelpers.js.map