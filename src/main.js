import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './js/refs';
const modalOptions = {
  captionsData: 'alt',
  captionDelay: 250,
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  const userInputValue = refs.formInput.value;
  getPixabayImages(userInputValue);
  refs.form.reset();
}

function getPixabayImages(inputValue) {
  const BASE_URL = 'https://pixabay.com/api/';
  const PIXABAY_KEY = '?key=42339224-5f1cb7b0c825234adabadbe9d';
  const PARAMS = `&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true`;
  const url = BASE_URL + PIXABAY_KEY + PARAMS;
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        console.log(data);
        const markup = data.hits
          .map(data => {
            return `<li class="gallery-item">
          <a href="${data.largeImageURL}">
          <img class="gallery-image" src="${data.webformatURL}" alt="${data.tags}"></a>
          <p><b>Likes: </b>${data.likes}</p>
          <p><b>Views: </b>${data.views}</p>
          <p><b>Comments: </b>${data.comments}</p>
          <p><b>Downloads: </b>${data.downloads}</p>
          </li>`;
          })
          .join('');
        refs.gallery.insertAdjacentHTML('afterbegin', markup);
        const gallery = new SimpleLightbox('.gallery a', modalOptions);
        gallery.on('show.simplelightbox');
        gallery.refresh();
      }
    })
    .catch(error => console.log('Error:', error));
}
