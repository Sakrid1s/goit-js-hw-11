import { refs } from './refs';
import { getPixabayImages } from './render-functions';
export function onFormSubmit(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  const userInputValue = refs.formInput.value;
  getPixabayImages(userInputValue);
  refs.form.reset();
}
