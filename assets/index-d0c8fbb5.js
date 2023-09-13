(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const p=()=>{const e=document.querySelector(".js-menu-container"),n=document.querySelector(".js-toggle-menu");e.classList.remove("is-open"),n.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),document.body.classList.remove("scroll-hidden")},z=document.querySelector(".js-menu-container"),c=document.querySelector(".js-toggle-menu"),b=document.body,y=()=>{const e=c.getAttribute("aria-expanded")==="true"||!1;c.setAttribute("aria-expanded",!e),z.classList.toggle("is-open"),c.classList.toggle("is-open"),b.classList.toggle("scroll-hidden"),e||window.addEventListener("keydown",v)};c.addEventListener("click",y);window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{!e.matches||!z.classList.contains("is-open")||p()});const v=e=>{e.key==="Escape"&&(p(),window.removeEventListener("keydown",v))},w="/assets/pizza-1-d189ba8e.png",j="/assets/pizza-2-737e868d.png",S="/assets/pizza-3-f07c9bf0.png",k="/assets/pizza-4-50061da7.png",q="/assets/pizza-5-22bf00c3.png",$="/assets/pizza-6-4c01313f.png",E="/assets/pizza-7-b6b1d76c.png",M="/assets/pizza-8-e352c0b0.png",U="/assets/pizza-9-2dc3050d.png",x="/assets/pizza-10-caa11414.png",R="/assets/pizza-11-e53daa4f.png",A="/assets/pizza-12-1f62e0db.png",u=[{id:1,name:"Pizza with Cheese and Basil",price:{standard:295,large:342},imageURL:w,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:2,name:"Supreme",price:{standard:290,large:338},imageURL:j,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:3,name:"Margherita Pizza",price:{standard:300,large:345},imageURL:S,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:4,name:"Pizza with mashrooms and tomatoes",price:{standard:300,large:343},imageURL:k,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:5,name:"Veggie Lover's",price:{standard:231,large:274},imageURL:q,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:6,name:"pizza 6",price:{standard:231,large:274},imageURL:$,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:7,name:"White Pizza (Ricotta and Mozzarella)",price:{standard:266,large:316},imageURL:E,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:8,name:"Mushroom and Olive",price:{standard:286,large:336},imageURL:M,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:9,name:"pizza 9",price:{standard:296,large:339},imageURL:U,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:10,name:"Homemade Pepperoni Pizza",price:{standard:268,large:319},imageURL:x,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:11,name:"Pizza With Mushrooms",price:{standard:290,large:338},imageURL:R,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:12,name:"Mascarpone And Mushrooms",price:{standard:279,large:323},imageURL:A,ingredients:["ingredient 1","ingredient 2","ingredient 3"]}],m="/assets/symbol-defs-229538d2.svg",T=document.querySelector(".js-swiper");let o;const I=()=>{const e=document.querySelector(".js-swiper"),t=u.filter(i=>i.id===10||i.id===11||i.id===12).map(i=>`
        <li class="swiper-slide js-swiper-slide ${i.id===10?"active":""}">
          <div class="wrapper">
            <div class="swiper-slide-image-wrapper">
              <img src="${i.imageURL}" alt="${i.name}" />
            </div>
            <div class="swiper-slide-content">
              <h3 class="description">${i.name}</h3>
              <div class="button-wrapper">
                <button class="swiper-button-prev js-swiper-button-prev js-onclick">
                  <svg class="chevron-icon icon js-onclick" width="20" height="20">
                    <use class="js-onclick" href="${m}#chevron-left"></use>
                  </svg>
                </button>
                <button class="swiper-button-next js-swiper-button-next js-onclick">
                  <svg class="chevron-icon icon js-onclick" width="20" height="20">
                    <use class="js-onclick" href="${m}#chevron-right"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
      `).join("");e.insertAdjacentHTML("beforeend",t)},P=e=>{if(!e.target.classList.contains("js-onclick"))return;let n=e.target.closest("button");n.classList.contains("js-swiper-button-prev")?(B(),clearInterval(o),o=setInterval(d,5e3)):n.classList.contains("js-swiper-button-next")&&(d(),clearInterval(o),o=setInterval(d,5e3))},B=()=>{const e=document.querySelectorAll(".js-swiper-slide");let n=e.length-1;for(let t=0;t<e.length;t++)if(e[t].classList.contains("active")){e[t].classList.remove("active"),t!==0?e[t-1].classList.add("active"):e[n].classList.add("active");return}},d=()=>{const e=document.querySelectorAll(".js-swiper-slide");let n=e.length-1;for(let t=0;t<e.length;t++)if(e[t].classList.contains("active")){e[t].classList.remove("active"),t!==n?e[t+1].classList.add("active"):e[0].classList.add("active");return}};I();o=setInterval(d,5e3);T.addEventListener("click",P);const f=document.querySelector(".js-menu-list"),C=()=>{const e=u.map(n=>{const{id:t,name:i,price:{standard:s,large:a},imageURL:r,ingredients:l}=n;return`
      <li class='card-item'>
        <div class="card-price"><span>${s}</span> UAH</div>
        <img class="card-image" src="${r}" alt="${i}">
        <h3 class="card-title">${i}</h3>
        <p class="card-text">${l.join(", ")}</p>
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
    `}).join("");f.insertAdjacentHTML("beforeend",e)};C();const O=e=>{const n=e.target;if(n.nodeName!=="BUTTON")return;let t=u.find(l=>l.id===Number(n.dataset.id)),i=n.dataset.size,s=t.price[n.dataset.size],a=n.closest("li");const r=a.querySelectorAll(".size-btn");a.querySelector("span").textContent=s,i==="standard"?(r[0].classList.add("active"),r[1].classList.remove("active")):i==="large"&&(r[0].classList.remove("active"),r[1].classList.add("active"))};f.addEventListener("click",O);const h=document.querySelectorAll(".accordion-content"),N=e=>{h.forEach((n,t)=>{if(e!==t){const i=n.querySelector(".accordion-list");n.classList.remove("open"),i.style.height="0px"}})};h.forEach((e,n)=>{e.querySelector(".accordion-title").addEventListener("click",()=>{const i=e.querySelector(".accordion-list");e.classList.toggle("open"),e.classList.contains("open")?i.style.height=`${i.scrollHeight}px`:i.style.height="0px",N(n)})});const g=document.getElementById("js-to-top-btn");window.onscroll=function(){H()};g.addEventListener("click",W);function H(){document.body.scrollTop>200||document.documentElement.scrollTop>200?g.classList.add("show"):g.classList.remove("show")}function W(){window.scrollTo({top:0,behavior:"smooth"})}const _=document.querySelector(".js-navbar"),D=e=>{const n=document.querySelector(".js-menu-container");if(e.target.nodeName!=="A")return;const t=e.target.getAttribute("data-section");let i=document.getElementById(`${t}`).offsetTop;window.scrollTo({top:i-64,behavior:"smooth"}),n.classList.contains("is-open")&&p()};_.addEventListener("click",D);const F=document.querySelector("[data-cart-open]"),K=document.querySelector("[data-cart-close]"),V=document.querySelector("[data-cart]"),L=()=>{V.classList.toggle("active")};F.addEventListener("click",L);K.addEventListener("click",L);