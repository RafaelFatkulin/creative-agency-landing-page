(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const c=document.querySelector(".header__burger"),d=document.querySelector(".header__menu"),i=document.querySelector("html");let r=!0;const u=o=>(o.preventDefault(),o.stopPropagation(),!1),f=()=>i.addEventListener("wheel",u,{passive:!1}),m=()=>i.removeEventListener("wheel",u);c.addEventListener("click",()=>{c.classList.toggle("active"),d.classList.toggle("active"),r?(f(),console.log(r)):(m(),console.log(r)),r=!r});
