(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();(()=>{const i=document.querySelector(".js-menu-container"),t=document.querySelector(".js-toggle-menu"),s=document.body,r=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),i.classList.toggle("is-open"),t.classList.toggle("is-open"),s.classList.toggle("scroll-hidden")};t.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{!e.matches||!i.classList.contains("is-open")||(i.classList.remove("is-open"),t.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),s.classList.remove("scroll-hidden"))})})();(()=>{const i=document.querySelectorAll(".swiper-slide"),t=document.querySelectorAll(".swiper-button-prev"),s=document.querySelectorAll(".swiper-button-next");t.forEach(n=>{n.addEventListener("click",r)}),s.forEach(n=>{n.addEventListener("click",e)}),setInterval(()=>{e()},5e3);function r(){let n=i.length-1;for(let a=0;a<i.length;a++)if(i[a].classList.contains("active")){i[a].classList.remove("active"),a!==0?i[a-1].classList.add("active"):i[n].classList.add("active");return}}function e(){let n=i.length-1;for(let a=0;a<i.length;a++)if(i[a].classList.contains("active")){i[a].classList.remove("active"),a!==n?i[a+1].classList.add("active"):i[0].classList.add("active");return}}})();const p=[{id:1,name:"Pizza with Cheese and Basil",price:{standard:295,large:342},image:"pizza-1.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:2,name:"Supreme",price:{standard:290,large:338},image:"pizza-2.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:3,name:"Margherita Pizza",price:{standard:300,large:345},image:"pizza-3.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:4,name:"Pizza with mashrooms and tomatoes",price:{standard:300,large:343},image:"pizza-4.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:5,name:"Veggie Lover's",price:{standard:231,large:274},image:"pizza-5.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:6,name:"pizza 6",price:{standard:231,large:274},image:"pizza-6.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:7,name:"White Pizza (Ricotta and Mozzarella)",price:{standard:266,large:316},image:"pizza-7.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:8,name:"Mushroom and Olive",price:{standard:286,large:336},image:"pizza-8.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:9,name:"pizza 9",price:{standard:296,large:339},image:"pizza-9.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:10,name:"Homemade Pepperoni Pizza",price:{standard:268,large:319},image:"pizza-10.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:11,name:"Pizza With Mushrooms",price:{standard:290,large:338},image:"pizza-11.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:12,name:"Mascarpone And Mushrooms",price:{standard:279,large:323},image:"pizza-12.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]}],m=(i,t,s)=>{const r=document.querySelectorAll(".card-btn-group"),e=document.querySelectorAll(".card-price span");t==="standard"&&(r[i].firstElementChild.classList.add("active"),r[i].lastElementChild.classList.remove("active"),e[i].innerHTML=s),t==="large"&&(r[i].lastElementChild.classList.add("active"),r[i].firstElementChild.classList.remove("active"),e[i].innerHTML=s),c()},c=()=>{const i="./img/";u.forEach(t=>{const s=document.querySelector(".menu-card-list"),r=document.createElement("li"),{id:e,name:n,price:{standard:a,large:d},image:o,ingredients:l}=t;let g=a;r.classList.add("card-item"),r.innerHTML=`
        <div class="card-price"><span>${g}</span> UAH</div>
        <img class="card-image" src="${i+o}" alt="${n}">
        <h3 class="card-title">${n}</h3>
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
      `,s.appendChild(r)})},u=[...p];c();document.querySelectorAll(".menu .size-btn").forEach(t=>{const s=t.dataset.size,r=t.dataset.price,e=t.dataset.id;t.addEventListener("click",()=>m(e-1,s,r))});
