(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();(()=>{const t=document.querySelector(".js-menu-container"),a=document.querySelector(".js-toggle-menu"),r=document.body,n=()=>{const e=a.getAttribute("aria-expanded")==="true"||!1;a.setAttribute("aria-expanded",!e),t.classList.toggle("is-open"),a.classList.toggle("is-open"),r.classList.toggle("scroll-hidden")};a.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{!e.matches||!t.classList.contains("is-open")||(t.classList.remove("is-open"),a.classList.remove("is-open"),a.setAttribute("aria-expanded",!1),r.classList.remove("scroll-hidden"))})})();(()=>{const t=document.querySelectorAll(".swiper-slide"),a=document.querySelectorAll(".swiper-button-prev"),r=document.querySelectorAll(".swiper-button-next");a.forEach(i=>{i.addEventListener("click",n)}),r.forEach(i=>{i.addEventListener("click",e)}),setInterval(()=>{e()},5e3);function n(){let i=t.length-1;for(let s=0;s<t.length;s++)if(t[s].classList.contains("active")){t[s].classList.remove("active"),s!==0?t[s-1].classList.add("active"):t[i].classList.add("active");return}}function e(){let i=t.length-1;for(let s=0;s<t.length;s++)if(t[s].classList.contains("active")){t[s].classList.remove("active"),s!==i?t[s+1].classList.add("active"):t[0].classList.add("active");return}}})();const l=[{id:1,name:"Pizza with Cheese and Basil",price:{standard:295,large:342},image:"pizza-1.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:2,name:"Supreme",price:{standard:290,large:338},image:"pizza-2.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:3,name:"Margherita Pizza",price:{standard:300,large:345},image:"pizza-3.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:4,name:"Pizza with mashrooms and tomatoes",price:{standard:300,large:343},image:"pizza-4.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:5,name:"Veggie Lover's",price:{standard:231,large:274},image:"pizza-5.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:6,name:"pizza 6",price:{standard:231,large:274},image:"pizza-6.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:7,name:"White Pizza (Ricotta and Mozzarella)",price:{standard:266,large:316},image:"pizza-7.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:8,name:"Mushroom and Olive",price:{standard:286,large:336},image:"pizza-8.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:9,name:"pizza 9",price:{standard:296,large:339},image:"pizza-9.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:10,name:"Homemade Pepperoni Pizza",price:{standard:268,large:319},image:"pizza-10.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:11,name:"Pizza With Mushrooms",price:{standard:290,large:338},image:"pizza-11.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:12,name:"Mascarpone And Mushrooms",price:{standard:279,large:323},image:"pizza-12.png",ingredients:["ingredient 1","ingredient 2","ingredient 3"]}],g="/napizza-project/assets/pizza-1-d189ba8e.png",p=(t,a,r)=>{const n=document.querySelectorAll(".card-btn-group"),e=document.querySelectorAll(".card-price span");a==="standard"&&(n[t].firstElementChild.classList.add("active"),n[t].lastElementChild.classList.remove("active"),e[t].innerHTML=r),a==="large"&&(n[t].lastElementChild.classList.add("active"),n[t].firstElementChild.classList.remove("active"),e[t].innerHTML=r),d()},d=()=>{u.forEach(t=>{const a=document.querySelector(".menu-card-list"),r=document.createElement("li"),{id:n,name:e,price:{standard:i,large:s},image:m,ingredients:c}=t;let o=i;r.classList.add("card-item"),r.innerHTML=`
      <div class="card-price"><span>${o}</span> UAH</div>
        <img class="card-image" src="${g}" alt="${e}">
        <h3 class="card-title">${e}</h3>
        <p class="card-text">${c.join(", ")}</p>
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
      `,a.appendChild(r)})},u=[...l];d();document.querySelectorAll(".menu .size-btn").forEach(a=>{const r=a.dataset.size,n=a.dataset.price,e=a.dataset.id;a.addEventListener("click",()=>p(e-1,r,n))});(()=>{const t=document.querySelectorAll(".accordion-content"),a=r=>{t.forEach((n,e)=>{if(r!==e){const i=n.querySelector(".accordion-list");n.classList.remove("open"),i.style.height="0px"}})};t.forEach((r,n)=>{r.querySelector(".accordion-title").addEventListener("click",()=>{const i=r.querySelector(".accordion-list");r.classList.toggle("open"),r.classList.contains("open")?i.style.height=`${i.scrollHeight}px`:i.style.height="0px",a(n)})})})();
