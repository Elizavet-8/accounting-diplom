(()=>{var e,i={408:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=new Swiper(".slider-img",{direction:"vertical",loop:!1,speed:2400,parallax:!0}),i=new Swiper(".slider-txt",{direction:"vertical",loop:!1,speed:2400,pagination:{el:".swiper-pagination",clickable:!0}});e.controller.control=i,i.controller.control=e;new Swiper(".sro-cooperation__list",{slidesPerView:3,speed:400,spaceBetween:16,breakpoints:{310:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2},1240:{slidesPerView:3},1650:{slidesPerView:3}}});var t=["1","2","3","4"];new Swiper(".addservices-slider",{pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,i){return'<span class="'+i+'">'+t[e]+"</span>"}},speed:2400,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".samples-slider",{slidesPerView:3,speed:1e3,spaceBetween:33,navigation:{nextEl:".swiper-button-next-unique",prevEl:".swiper-button-prev-unique"},breakpoints:{310:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2,spaceBetween:10},1240:{slidesPerView:3},1650:{slidesPerView:3}}});$(".dropdown").click((function(){$(this).attr("tabindex",1).focus(),$(this).toggleClass("active"),$(this).find(".dropdown-menu").slideToggle(300)})),$(".dropdown").focusout((function(){$(this).removeClass("active"),$(this).find(".dropdown-menu").slideUp(300)})),$(".dropdown .dropdown-menu li").click((function(){$(this).parents(".dropdown").find("span").text($(this).text()),$(this).parents(".dropdown").find("input").attr("value",$(this).attr("id"))})),$(document).ready((function(){$("#btn").on("click","a",(function(e){e.preventDefault();var i=$(this).attr("href"),t=$(i).offset().top;$("body,html").animate({scrollTop:t},1500)}))})),$(document).ready((function(){$(".btn-first").on("click","a",(function(e){e.preventDefault();var i=$(this).attr("href"),t=$(i).offset().top;$("body,html").animate({scrollTop:t},1500)}))}))}))},467:()=>{}},t={};function n(e){var r=t[e];if(void 0!==r)return r.exports;var o=t[e]={exports:{}};return i[e](o,o.exports,n),o.exports}n.m=i,e=[],n.O=(i,t,r,o)=>{if(!t){var s=1/0;for(d=0;d<e.length;d++){for(var[t,r,o]=e[d],a=!0,l=0;l<t.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((e=>n.O[e](t[l])))?t.splice(l--,1):(a=!1,o<s&&(s=o));if(a){e.splice(d--,1);var p=r();void 0!==p&&(i=p)}}return i}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[t,r,o]},n.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{var e={773:0,870:0};n.O.j=i=>0===e[i];var i=(i,t)=>{var r,o,[s,a,l]=t,p=0;if(s.some((i=>0!==e[i]))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var d=l(n)}for(i&&i(t);p<s.length;p++)o=s[p],n.o(e,o)&&e[o]&&e[o][0](),e[s[p]]=0;return n.O(d)},t=self.webpackChunkmy_app=self.webpackChunkmy_app||[];t.forEach(i.bind(null,0)),t.push=i.bind(null,t.push.bind(t))})(),n.O(void 0,[870],(()=>n(408)));var r=n.O(void 0,[870],(()=>n(467)));r=n.O(r)})();