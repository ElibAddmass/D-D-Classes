export default class ThemeHandler {
  constructor() {

  }
  btn = document.querySelector('.js-light-dark-theme-btn');
  status = localStorage.getItem('status') || 'dark';

  initiate() {
    this.update();
    this.btn.addEventListener('click', (e) => {
      this.status = this.status === 'dark' ? 'light' : 'dark';
      this.update();
    });
  }

  update() {
    const root = document.querySelector(':root');
    if (this.status === 'dark') {
      root.style.setProperty('--c', 'white');
      root.style.setProperty('--bc', 'black');
    } else {
      root.style.setProperty('--c', 'black');
      root.style.setProperty('--bc', 'white');
    }
    this.btn.innerHTML = `${this.status.at(0).toUpperCase() + this.status.slice(1)} Theme`;
    localStorage.setItem('status', this.status);
  }
}