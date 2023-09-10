(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();(()=>{const n=document.querySelector(".js-menu-container"),e=document.querySelector(".js-toggle-menu"),a=document.body,t=()=>{const i=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!i),n.classList.toggle("is-open"),e.classList.toggle("is-open"),a.classList.toggle("scroll-hidden")};e.addEventListener("click",t),window.matchMedia("(min-width: 768px)").addEventListener("change",i=>{!i.matches||!n.classList.contains("is-open")||(n.classList.remove("is-open"),e.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),a.classList.remove("scroll-hidden"))})})();const m="/napizza-project/assets/pizza-1-d189ba8e.png",v="/napizza-project/assets/pizza-2-737e868d.png",f="/napizza-project/assets/pizza-3-f07c9bf0.png",h="/napizza-project/assets/pizza-4-50061da7.png",L="/napizza-project/assets/pizza-5-22bf00c3.png",b="/napizza-project/assets/pizza-6-4c01313f.png",j="/napizza-project/assets/pizza-7-b6b1d76c.png",y="/napizza-project/assets/pizza-8-e352c0b0.png",w="/napizza-project/assets/pizza-9-2dc3050d.png",S="/napizza-project/assets/pizza-10-caa11414.png",$="/napizza-project/assets/pizza-11-e53daa4f.png",U="/napizza-project/assets/pizza-12-1f62e0db.png",p=[{id:1,name:"Pizza with Cheese and Basil",price:{standard:295,large:342},imageURL:m,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:2,name:"Supreme",price:{standard:290,large:338},imageURL:v,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:3,name:"Margherita Pizza",price:{standard:300,large:345},imageURL:f,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:4,name:"Pizza with mashrooms and tomatoes",price:{standard:300,large:343},imageURL:h,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:5,name:"Veggie Lover's",price:{standard:231,large:274},imageURL:L,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:6,name:"pizza 6",price:{standard:231,large:274},imageURL:b,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:7,name:"White Pizza (Ricotta and Mozzarella)",price:{standard:266,large:316},imageURL:j,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:8,name:"Mushroom and Olive",price:{standard:286,large:336},imageURL:y,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:9,name:"pizza 9",price:{standard:296,large:339},imageURL:w,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:10,name:"Homemade Pepperoni Pizza",price:{standard:268,large:319},imageURL:S,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:11,name:"Pizza With Mushrooms",price:{standard:290,large:338},imageURL:$,ingredients:["ingredient 1","ingredient 2","ingredient 3"]},{id:12,name:"Mascarpone And Mushrooms",price:{standard:279,large:323},imageURL:U,ingredients:["ingredient 1","ingredient 2","ingredient 3"]}],x=document.querySelector(".js-swiper"),r=document.querySelectorAll(".js-swiper-slide");let d;const M=()=>{const n=document.querySelector(".js-swiper"),a=p.filter(t=>t.id===10||t.id===11||t.id===12).map(t=>`
        <li class="swiper-slide js-swiper-slide ${t.id===10?"active":""}">
          <div class="wrapper">
            <div class="swiper-slide-image-wrapper">
              <img src="${t.imageURL}" alt="${t.name}" />
            </div>
            <div class="swiper-slide-content">
              <h3 class="description">${t.name}</h3>
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
      `).join("");n.insertAdjacentHTML("beforeend",a)},R=n=>{if(!n.target.classList.contains("js-onclick"))return;let e=n.target.closest("button");e.classList.contains("js-swiper-button-prev")?(k(),clearInterval(d),d=setInterval(o,5e3)):e.classList.contains("js-swiper-button-next")&&(o(),clearInterval(d),d=setInterval(o,5e3))},k=()=>{let n=r.length-1;for(let e=0;e<r.length;e++)if(r[e].classList.contains("active")){r[e].classList.remove("active"),e!==0?r[e-1].classList.add("active"):r[n].classList.add("active");return}},o=()=>{let n=r.length-1;for(let e=0;e<r.length;e++)if(r[e].classList.contains("active")){r[e].classList.remove("active"),e!==n?r[e+1].classList.add("active"):r[0].classList.add("active");return}};M();d=setInterval(o,5e3);x.addEventListener("click",R);const g=document.querySelector(".menu-card-list");(function(){const e=p.map(a=>{const{id:t,name:i,price:{standard:s,large:c},imageURL:l,ingredients:z}=a;return`
      <li class='card-item'>
        <div class="card-price"><span>${s}</span> UAH</div>
        <img class="card-image" src="${l}" alt="${i}">
        <h3 class="card-title">${i}</h3>
        <p class="card-text">${z.join(", ")}</p>
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
            id="${t}-${c}"
            data-size="large"
            data-id="${t}"
          >
            Large
          </button>
        </div>
        <input type="button" onclick="addToCart(${t})" value="add to cart" name="add_to_cart" class="add-to-cart-btn">
      </li>
    `}).join("");g.insertAdjacentHTML("beforeend",e)})();g.addEventListener("click",q);function q(n){const e=n.target;if(e.nodeName!=="BUTTON")return;let a=p.find(l=>l.id===Number(e.dataset.id)),t=e.dataset.size,i=a.price[e.dataset.size],s=e.closest("li");const c=s.querySelectorAll(".size-btn");s.querySelector("span").textContent=i,t==="standard"?(c[0].classList.add("active"),c[1].classList.remove("active")):t==="large"&&(c[0].classList.remove("active"),c[1].classList.add("active"))}const u=document.querySelectorAll(".accordion-content"),A=n=>{u.forEach((e,a)=>{if(n!==a){const t=e.querySelector(".accordion-list");e.classList.remove("open"),t.style.height="0px"}})};u.forEach((n,e)=>{n.querySelector(".accordion-title").addEventListener("click",()=>{const t=n.querySelector(".accordion-list");n.classList.toggle("open"),n.classList.contains("open")?t.style.height=`${t.scrollHeight}px`:t.style.height="0px",A(e)})});
