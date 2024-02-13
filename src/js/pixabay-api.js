import { refs } from './refs';
import { getPixabayImages } from './render-functions';
import { createLoader } from './css-loader';
export function onFormSubmit(event) {
  event.preventDefault();
  createLoader();
  refs.gallery.innerHTML = '';
  const userInputValue = refs.formInput.value;
  getPixabayImages(userInputValue);
  refs.form.reset();
}
