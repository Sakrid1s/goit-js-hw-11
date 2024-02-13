import { refs } from './refs';
export function createLoader() {
  const loader = document.createElement('span');
  loader.classList.add('loader');
  refs.container.append(loader);
}

// Function to hide the loader
export function removeLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}
