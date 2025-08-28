export default class Counter {
  constructor(start, container) {
    this.count = start;
    this.container = container;
  }

  init() {
    const btn = document.createElement('button');
    const display = document.createElement('span');
    display.textContent = this.count;
    btn.textContent = 'Додати';
    btn.onclick = () => {
      this.count++;
      display.textContent = this.count;
    };
    this.container.append(display, btn);
  }
}