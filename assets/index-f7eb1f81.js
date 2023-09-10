(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();(()=>{const e=document.querySelector(".js-menu-container"),i=document.querySelector(".js-toggle-menu"),t=document.body,n=()=>{const s=i.getAttribute("aria-expanded")==="true"||!1;i.setAttribute("aria-expanded",!s),e.classList.toggle("is-open"),i.classList.toggle("is-open"),t.classList.toggle("scroll-hidden")};i.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{!s.matches||!e.classList.contains("is-open")||(e.classList.remove("is-open"),i.classList.remove("is-open"),i.setAttribute("aria-expanded",!1),t.classList.remove("scroll-hidden"))})})();const z="/napizza-project/assets/pizza-1-d189ba8e.png",m="/napizza-project/assets/pizza-2-737e868d.png",v="/napizza-project/assets/pizza-3-f07c9bf0.png",f="/napizza-project/assets/pizza-4-50061da7.png",h="/napizza-project/assets/pizza-5-22bf00c3.png",L="/napizza-project/assets/pizza-6-4c01313f.png",b="/napizza-project/assets/pizza-7-b6b1d76c.png",j="/napizza-project/assets/pizza-8-e352c0b0.png",y="/napizza-project/assets/pizza-9-2dc3050d.png",w="/napizza-project/assets/pizza-10-caa11414.png",S="/napizza-project/assets/pizza-11-e53daa4f.png",$="/napizza-project/assets/pizza-12-1f62e0db.png",p=[{id:1,name:"Pizza with Cheese and Basil",price:{standard:295,large:342},imageURL:z,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:2,name:"Supreme",price:{standard:290,large:338},imageURL:m,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:3,name:"Margherita Pizza",price:{standard:300,large:345},imageURL:v,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:4,name:"Pizza with mashrooms and tomatoes",price:{standard:300,large:343},imageURL:f,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:5,name:"Veggie Lover's",price:{standard:231,large:274},imageURL:h,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:6,name:"pizza 6",price:{standard:231,large:274},imageURL:L,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:7,name:"White Pizza (Ricotta and Mozzarella)",price:{standard:266,large:316},imageURL:b,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:8,name:"Mushroom and Olive",price:{standard:286,large:336},imageURL:j,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:9,name:"pizza 9",price:{standard:296,large:339},imageURL:y,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:10,name:"Homemade Pepperoni Pizza",price:{standard:268,large:319},imageURL:w,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:11,name:"Pizza With Mushrooms",price:{standard:290,large:338},imageURL:S,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:12,name:"Mascarpone And Mushrooms",price:{standard:279,large:323},imageURL:$,ingredients:["ingredient 1","ingredient 2","ingredient 3"]}],k=document.querySelector(".js-swiper");let o;const U=()=>{const e=document.querySelector(".js-swiper"),t=p.filter(n=>n.id===10||n.id===11||n.id===12).map(n=>`
        <li class="swiper-slide js-swiper-slide ${n.id===10?"active":""}">
          <div class="wrapper">
            <div class="swiper-slide-image-wrapper">
              <img src="${n.imageURL}" alt="${n.name}" />
            </div>
            <div class="swiper-slide-content">
              <h3 class="description">${n.name}</h3>
              <div class="button-wrapper">
                <button class="swiper-button-prev js-swiper-button-prev js-onclick">
                  <svg class="chevron-icon icon js-onclick" width="20" height="20">
                    <use class="js-onclick" href="./img/symbol-defs.svg#chevron-left"></use>
                  </svg>
                </button>
                <button class="swiper-button-next js-swiper-button-next js-onclick">
                  <svg class="chevron-icon icon js-onclick" width="20" height="20">
                    <use class="js-onclick" href="./img/symbol-defs.svg#chevron-right"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
      `).join("");e.insertAdjacentHTML("beforeend",t)},q=e=>{if(!e.target.classList.contains("js-onclick"))return;let i=e.target.closest("button");i.classList.contains("js-swiper-button-prev")?(x(),clearInterval(o),o=setInterval(c,5e3)):i.classList.contains("js-swiper-button-next")&&(c(),clearInterval(o),o=setInterval(c,5e3))},x=()=>{const e=document.querySelectorAll(".js-swiper-slide");let i=e.length-1;for(let t=0;t<e.length;t++)if(e[t].classList.contains("active")){e[t].classList.remove("active"),t!==0?e[t-1].classList.add("active"):e[i].classList.add("active");return}},c=()=>{const e=document.querySelectorAll(".js-swiper-slide");let i=e.length-1;for(let t=0;t<e.length;t++)if(e[t].classList.contains("active")){e[t].classList.remove("active"),t!==i?e[t+1].classList.add("active"):e[0].classList.add("active");return}};U();o=setInterval(c,5e3);k.addEventListener("click",q);const g=document.querySelector(".js-menu-list"),E=()=>{const e=p.map(i=>{const{id:t,name:n,price:{standard:s,large:a},imageURL:r,ingredients:d}=i;return`
      <li class='card-item'>
        <div class="card-price"><span>${s}</span> UAH</div>
        <img class="card-image" src="${r}" alt="${n}">
        <h3 class="card-title">${n}</h3>
        <p class="card-text">${d.join(", ")}</p>
        <div class="card-btn-group btn-group-${t}">
          <button
            type="button"
            class="size-btn active"
            id="${t}-${s}"
            data-size="standard"
            data-id="${t}"
          >
            Standard size
          </button>

          <button
            type="button"
            class="size-btn"
            id="${t}-${a}"
            data-size="large"
            data-id="${t}"
          >
            Large
          </button>
        </div>
        <input type="button" onclick="addToCart(${t})" value="add to cart" name="add_to_cart" class="add-to-cart-btn">
      </li>
    `}).join("");g.insertAdjacentHTML("beforeend",e)};E();const M=e=>{const i=e.target;if(i.nodeName!=="BUTTON")return;let t=p.find(d=>d.id===Number(i.dataset.id)),n=i.dataset.size,s=t.price[i.dataset.size],a=i.closest("li");const r=a.querySelectorAll(".size-btn");a.querySelector("span").textContent=s,n==="standard"?(r[0].classList.add("active"),r[1].classList.remove("active")):n==="large"&&(r[0].classList.remove("active"),r[1].classList.add("active"))};g.addEventListener("click",M);const u=document.querySelectorAll(".accordion-content"),R=e=>{u.forEach((i,t)=>{if(e!==t){const n=i.querySelector(".accordion-list");i.classList.remove("open"),n.style.height="0px"}})};u.forEach((e,i)=>{e.querySelector(".accordion-title").addEventListener("click",()=>{const n=e.querySelector(".accordion-list");e.classList.toggle("open"),e.classList.contains("open")?n.style.height=`${n.scrollHeight}px`:n.style.height="0px",R(i)})});const l=document.getElementById("js-to-top-btn");window.onscroll=function(){A()};l.addEventListener("click",T);function A(){document.body.scrollTop>200||document.documentElement.scrollTop>200?l.classList.add("show"):l.classList.remove("show")}function T(){window.scrollTo({top:0,behavior:"smooth"})}const I=document.querySelector(".js-navbar"),P=e=>{if(e.target.nodeName!=="A")return;const i=e.target.getAttribute("data-section");let t=document.getElementById(`${i}`).offsetTop;window.scrollTo({top:t-64,behavior:"smooth"})};I.addEventListener("click",P);
