export default class {
  constructor(options) {
    const { x, y, color } = options;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getColor() {
    return this.color;
  }
}
