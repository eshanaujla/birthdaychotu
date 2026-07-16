if (!card.classList.contains('opened')) {
  audio.play();
}
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');

  const buttons = document.querySelectorAll('.top-right-button');
  buttons.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      const url = button.getAttribute('href') || button.dataset.href;
      if (url) {
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = url;
        }, 1000);
      } else {
        console.warn('No URL found on button');
      }
    });
  });
});
