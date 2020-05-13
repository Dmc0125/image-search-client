import getImages from './api.js';
import { addImgListener } from './open-img.js';

const form = document.querySelector('.search');
const main = document.querySelector('main');

form.addEventListener('submit', async e => {
  e.preventDefault();
  main.innerHTML = '';

  const formData = new FormData(form);
  const searchTerm = formData.get('searchterm');

  const images = await getImages(searchTerm);

  appendImages(images);
});

function appendImages(images) {
  images.forEach(({ url, title, source, author }) => {
    const div = document.createElement('div');

    const img = document.createElement('img');
    img.setAttribute('src', url);
    img.setAttribute('alt', title);
    div.appendChild(img);

    addImgListener(img, { url, title, source, author });

    main.appendChild(div);
  });
}
