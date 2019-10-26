const lazyLoad = target => {
  const options = {
    rootMargin: '50px 0px',
    threshold: 0.01,
  };
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const imgUrl = img.dataset.lazy;
        img.setAttribute('src', imgUrl);
        observer.disconnect();
      }
    });
  }, options);

  io.observe(target);
};

const images = document.querySelectorAll('#menu img');

images.forEach(image => {
  lazyLoad(image);
});
