import{i as l,S as u}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const s={gallery:document.querySelector(".gallery"),form:document.querySelector(".form"),formInput:document.querySelector(".form-input"),btn:document.querySelector(".button"),container:document.querySelector(".container")};function m(){const r=document.createElement("span");r.classList.add("loader"),s.container.append(r)}function f(){const r=document.querySelector(".loader");r&&r.remove()}function d(r){const o="https://pixabay.com/api/",a="?key=42339224-5f1cb7b0c825234adabadbe9d",c=`&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`,t=o+a+c;fetch(t).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0)l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const i=e.hits.map(n=>`<li class="gallery-item">
          <a href="${n.largeImageURL}">
          <img class="gallery-image" src="${n.webformatURL}" alt="${n.tags}"></a>
          <div class="text">
          <p><b>Likes: </b>${n.likes}</p>
          <p><b>Views: </b>${n.views}</p>
          <p><b>Comments: </b>${n.comments}</p>
          <p><b>Downloads: </b>${n.downloads}</p>
          </div>
          </li>`).join("");s.gallery.insertAdjacentHTML("afterbegin",i),new u(".gallery a",p).refresh()}}).catch(e=>console.log("Error:",e)).finally(()=>{f()})}const p={captionsData:"alt",captionDelay:250};function y(r){r.preventDefault(),m(),s.gallery.innerHTML="";const o=s.formInput.value;d(o),s.form.reset()}s.form.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
