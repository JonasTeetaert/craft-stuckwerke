class Modal {
  constructor(modal, target) {
    this.modal = modal;
    this.target = target;
    this.btnClose = modal.querySelector('.m-modal__close');
    this.audio = modal.querySelector('audio');

    this.target.addEventListener('click', this.open.bind(this));
    this.btnClose.addEventListener('click', this.close.bind(this));
  }

  open(e) {
    e.preventDefault();
    this.modal.classList.add('active');
    document.body.classList.add('no-scroll');
  }

  close(e) {
    e.preventDefault();
    this.modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
    if (this.audio) this.audio.pause();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('[data-target="modal"]');
  targets.forEach(target => {
    const trigger = target.querySelector('a');
    const modal = target.querySelector('.m-modal');
    new Modal(modal, trigger);
  });
});