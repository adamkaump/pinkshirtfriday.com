// Opens and closes the header's menu at phone width.
const button = document.querySelector('.menu-button');
button.addEventListener('click', () => {
  button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') !== 'true');
});
