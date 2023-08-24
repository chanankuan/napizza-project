(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();(()=>{const t=document.querySelector(".js-menu-container"),n=document.querySelector(".js-toggle-menu"),s=document.body,r=()=>{const e=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!e),t.classList.toggle("is-open"),n.classList.toggle("is-open"),s.classList.toggle("scroll-hidden")};n.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{!e.matches||!t.classList.contains("is-open")||(t.classList.remove("is-open"),n.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),s.classList.remove("scroll-hidden"))})})();(()=>{const t=document.querySelectorAll(".swiper-slide"),n=document.querySelectorAll(".swiper-button-prev"),s=document.querySelectorAll(".swiper-button-next");n.forEach(i=>{i.addEventListener("click",r)}),s.forEach(i=>{i.addEventListener("click",e)}),setInterval(()=>{e()},5e3);function r(){let i=t.length-1;for(let a=0;a<t.length;a++)if(t[a].classList.contains("active")){t[a].classList.remove("active"),a!==0?t[a-1].classList.add("active"):t[i].classList.add("active");return}}function e(){let i=t.length-1;for(let a=0;a<t.length;a++)if(t[a].classList.contains("active")){t[a].classList.remove("active"),a!==i?t[a+1].classList.add("active"):t[0].classList.add("active");return}}})();const p=[{id:1,name:"Pizza with Cheese and Basil",price:{standard:295,large:342},image:"pizza-1.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:2,name:"Supreme",price:{standard:290,large:338},image:"pizza-2.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:3,name:"Margherita Pizza",price:{standard:300,large:345},image:"pizza-3.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:4,name:"Pizza with mashrooms and tomatoes",price:{standard:300,large:343},image:"pizza-4.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:5,name:"Veggie Lover's",price:{standard:231,large:274},image:"pizza-5.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:6,name:"pizza 6",price:{standard:231,large:274},image:"pizza-6.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:7,name:"White Pizza (Ricotta and Mozzarella)",price:{standard:266,large:316},image:"pizza-7.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:8,name:"Mushroom and Olive",price:{standard:286,large:336},image:"pizza-8.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:9,name:"pizza 9",price:{standard:296,large:339},image:"pizza-9.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:10,name:"Homemade Pepperoni Pizza",price:{standard:268,large:319},image:"pizza-10.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:11,name:"Pizza With Mushrooms",price:{standard:290,large:338},image:"pizza-11.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:12,name:"Mascarpone And Mushrooms",price:{standard:279,large:323},image:"pizza-12.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]}],u=(t,n,s)=>{const r=document.querySelectorAll(".card-btn-group"),e=document.querySelectorAll(".card-price span");n==="standard"&&(r[t].firstElementChild.classList.add("active"),r[t].lastElementChild.classList.remove("active"),e[t].innerHTML=s),n==="large"&&(r[t].lastElementChild.classList.add("active"),r[t].firstElementChild.classList.remove("active"),e[t].innerHTML=s),c()},c=()=>{const t="./img/";m.forEach(n=>{const s=document.querySelector(".menu-card-list"),r=document.createElement("li"),{id:e,name:i,price:{standard:a,large:d},image:o,ingredients:l}=n;let g=a;r.classList.add("card-item"),r.innerHTML=`
        <div class="card-price"><span>${g}</span> UAH</div>
        <img class="card-image" src="${t+o}" alt="${i}">
        <h3 class="card-title">${i}</h3>
        <p class="card-text">${l.join(", ")}</p>
        <div class="card-btn-group btn-group-${e}">
          <button
            type="button"
            class="size-btn active"
            data-size="standard"
            data-price="${a}"
            data-id="${e}"
            id="${e}-${a}"
          >
            Standard size
          </button>

          <button
            type="button"
            class="size-btn"
            data-size="large"
            data-price="${d}"
            data-id="${e}"
            id="${e}-${d}"
          >
            Large
          </button>
        </div>
        <input type="button" onclick="addToCart(${e})" value="add to cart" name="add_to_cart" class="add-to-cart-btn">
      `,s.appendChild(r)})},m=[...p];c();document.querySelectorAll(".menu .size-btn").forEach(n=>{const s=n.dataset.size,r=n.dataset.price,e=n.dataset.id;n.addEventListener("click",()=>u(e-1,s,r))});(()=>{const t=document.querySelectorAll(".accordion-content"),n=s=>{t.forEach((r,e)=>{if(s!==e){const i=r.querySelector(".accordion-list");r.classList.remove("open"),i.style.height="0px"}})};t.forEach((s,r)=>{s.querySelector(".accordion-title").addEventListener("click",()=>{const i=s.querySelector(".accordion-list");s.classList.toggle("open"),s.classList.contains("open")?i.style.height=`${i.scrollHeight}px`:i.style.height="0px",n(r)})})})();
