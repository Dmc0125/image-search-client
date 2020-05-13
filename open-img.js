const modal = document.querySelector('.modal');

modal.addEventListener('click', () => {
  modal.classList.add('hide-modal');
});

// eslint-disable-next-line import/prefer-default-export
export function addImgListener(imgElement, data) {
  const { url, title, author, source } = data;

  imgElement.addEventListener('click', () => {
    modal.classList.remove('hide-modal');

    const h2 = modal.querySelector('h2');
    const bigImg = modal.querySelector('img');
    const authorLink = modal.querySelector('.author a');
    const imgSource = modal.querySelector('.source');

    h2.innerText = title;

    bigImg.setAttribute('src', url);
    bigImg.setAttribute('alt', title);

    authorLink.innerText = author;
    authorLink.setAttribute('href', `https://www.reddit.com/user/${author}`);
    authorLink.setAttribute('target', '_blank');

    imgSource.setAttribute('href', source);
  });
}
