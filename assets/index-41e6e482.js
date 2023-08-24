(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();(()=>{const t=document.querySelector(".js-menu-container"),r=document.querySelector(".js-toggle-menu"),a=document.body,n=()=>{const e=r.getAttribute("aria-expanded")==="true"||!1;r.setAttribute("aria-expanded",!e),t.classList.toggle("is-open"),r.classList.toggle("is-open"),a.classList.toggle("scroll-hidden")};r.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{!e.matches||!t.classList.contains("is-open")||(t.classList.remove("is-open"),r.classList.remove("is-open"),r.setAttribute("aria-expanded",!1),a.classList.remove("scroll-hidden"))})})();(()=>{const t=document.querySelectorAll(".swiper-slide"),r=document.querySelectorAll(".swiper-button-prev"),a=document.querySelectorAll(".swiper-button-next");r.forEach(i=>{i.addEventListener("click",n)}),a.forEach(i=>{i.addEventListener("click",e)}),setInterval(()=>{e()},5e3);function n(){let i=t.length-1;for(let s=0;s<t.length;s++)if(t[s].classList.contains("active")){t[s].classList.remove("active"),s!==0?t[s-1].classList.add("active"):t[i].classList.add("active");return}}function e(){let i=t.length-1;for(let s=0;s<t.length;s++)if(t[s].classList.contains("active")){t[s].classList.remove("active"),s!==i?t[s+1].classList.add("active"):t[0].classList.add("active");return}}})();const p=[{id:1,name:"Pizza with Cheese and Basil",price:{standard:295,large:342},image:"pizza-1.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:2,name:"Supreme",price:{standard:290,large:338},image:"pizza-2.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:3,name:"Margherita Pizza",price:{standard:300,large:345},image:"pizza-3.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:4,name:"Pizza with mashrooms and tomatoes",price:{standard:300,large:343},image:"pizza-4.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:5,name:"Veggie Lover's",price:{standard:231,large:274},image:"pizza-5.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:6,name:"pizza 6",price:{standard:231,large:274},image:"pizza-6.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:7,name:"White Pizza (Ricotta and Mozzarella)",price:{standard:266,large:316},image:"pizza-7.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:8,name:"Mushroom and Olive",price:{standard:286,large:336},image:"pizza-8.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:9,name:"pizza 9",price:{standard:296,large:339},image:"pizza-9.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:10,name:"Homemade Pepperoni Pizza",price:{standard:268,large:319},image:"pizza-10.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:11,name:"Pizza With Mushrooms",price:{standard:290,large:338},image:"pizza-11.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:12,name:"Mascarpone And Mushrooms",price:{standard:279,large:323},image:"pizza-12.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]}],u=(t,r,a)=>{const n=document.querySelectorAll(".card-btn-group"),e=document.querySelectorAll(".card-price span");r==="standard"&&(n[t].firstElementChild.classList.add("active"),n[t].lastElementChild.classList.remove("active"),e[t].innerHTML=a),r==="large"&&(n[t].lastElementChild.classList.add("active"),n[t].firstElementChild.classList.remove("active"),e[t].innerHTML=a),c()},c=()=>{m.forEach(t=>{const r=document.querySelector(".menu-card-list"),a=document.createElement("li"),{id:n,name:e,price:{standard:i,large:s},image:d,ingredients:o}=t,l="/napizza-project/"+d;let g=i;a.classList.add("card-item"),a.innerHTML=`
      <div class="card-price"><span>${g}</span> UAH</div>
        <img class="card-image" src="${l+d}" alt="${e}">
        <h3 class="card-title">${e}</h3>
        <p class="card-text">${o.join(", ")}</p>
        <div class="card-btn-group btn-group-${n}">
          <button
            type="button"
            class="size-btn active"
            data-size="standard"
            data-price="${i}"
            data-id="${n}"
            id="${n}-${i}"
          >
            Standard size
          </button>

          <button
            type="button"
            class="size-btn"
            data-size="large"
            data-price="${s}"
            data-id="${n}"
            id="${n}-${s}"
          >
            Large
          </button>
        </div>
        <input type="button" onclick="addToCart(${n})" value="add to cart" name="add_to_cart" class="add-to-cart-btn">
      `,r.appendChild(a)})},m=[...p];c();document.querySelectorAll(".menu .size-btn").forEach(r=>{const a=r.dataset.size,n=r.dataset.price,e=r.dataset.id;r.addEventListener("click",()=>u(e-1,a,n))});(()=>{const t=document.querySelectorAll(".accordion-content"),r=a=>{t.forEach((n,e)=>{if(a!==e){const i=n.querySelector(".accordion-list");n.classList.remove("open"),i.style.height="0px"}})};t.forEach((a,n)=>{a.querySelector(".accordion-title").addEventListener("click",()=>{const i=a.querySelector(".accordion-list");a.classList.toggle("open"),a.classList.contains("open")?i.style.height=`${i.scrollHeight}px`:i.style.height="0px",r(n)})})})();
