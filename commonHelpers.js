import{i as u,S as m}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();const s={gallery:document.querySelector(".gallery"),form:document.querySelector(".form"),formInput:document.querySelector(".form-input"),btn:document.querySelector(".button"),container:document.querySelector(".container")};function f(i){const r="https://pixabay.com/api/",l="?key=42339224-5f1cb7b0c825234adabadbe9d",c=`&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`,t=r+l+c;fetch(t).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0)u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const n=e.hits.map(o=>`<li class="gallery-item">
          <a href="${o.largeImageURL}">
          <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}"></a>
          <div class="text">
          <p><b>Likes: </b>${o.likes}</p>
          <p><b>Views: </b>${o.views}</p>
          <p><b>Comments: </b>${o.comments}</p>
          <p><b>Downloads: </b>${o.downloads}</p>
          </div>
          </li>`).join(""),a={captionsData:"alt",captionDelay:250};s.gallery.insertAdjacentHTML("afterbegin",n),new m(".gallery a",a).refresh()}}).catch(e=>console.log("Error:",e))}function p(i){i.preventDefault(),s.gallery.innerHTML="";const r=s.formInput.value;f(r),s.form.reset()}s.form.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
