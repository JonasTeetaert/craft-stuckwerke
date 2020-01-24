class Navigation {
  constructor() {
    this.overlay = document.querySelector('.m-nav__overlay');
    this.hamburger = document.querySelector('.m-nav .a-hamburger');
    this.btnClose = document.querySelector('.m-nav__close');

    this.hamburger.addEventListener('click', this.open.bind(this));
    this.btnClose.addEventListener('click', this.close.bind(this));

    this.init();
  }

  init() {
    this.overlay.classList.add('loaded');
  }

  open(e) {
    e.preventDefault();
    if (!this.overlay.classList.contains('open')) {
      this.overlay.classList.add('open');
    }
  }

  close(e) {
    e.preventDefault();
    if (this.overlay.classList.contains('open')) {
      this.overlay.classList.remove('open');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
});