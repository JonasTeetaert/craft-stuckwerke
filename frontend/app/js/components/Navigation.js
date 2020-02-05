class Navigation {
  constructor() {
    this.overlay = document.querySelector('.m-nav__overlay');
    this.hamburger = document.querySelector('.m-nav .a-hamburger');
    this.btnClose = document.querySelector('.m-nav__close');

    this.hamburger.addEventListener('click', this.open.bind(this));
    this.btnClose.addEventListener('click', this.close.bind(this));
  }

  open(e) {
    if (e) e.preventDefault();
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
  const nav = new Navigation();
  if (document.cookie.replace(/(?:(?:^|.*;\s*)firstVisit\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
    nav.open();
    console.log('cookie');
    document.cookie = "firstVisit=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  }
});