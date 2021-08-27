class Obstacle {
  constructor() {
    this.size = 50;
    this.x = width;
    this.y = height - this.size;
    this.option = random(1);
  }
  show() {
    if (this.option > 0 && this.option < 0.25) {
    } else if (this.option > 0.25 && this.option < 0.5) {
      image(obstnt, this.x, this.y, this.size, this.size);
    } else if (this.option > 0.5 && this.option < 0.75) {
      image(obswitherboss, this.x, this.y, this.size, this.size);
    } else if (this.option > 0.75 && this.option < 1) {
      image(obspiglen, this.x, this.y, this.size, this.size);
    }
  }
  move() {
    this.x = this.x - 6;
  }
}
