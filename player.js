class Player {
  constructor() {
    this.size = 50;
    this.x = this.size;
    this.y = height - 50;
    this.vilocityY = 0;
    this.gravity = 0.7;
  }
  show() {
    image(pl, this.x, this.y, this.size, this.size);
  }
  jump() {
    this.vilocityY = -14;
  }
  move() {
    this.vilocityY = this.vilocityY + this.gravity;
    this.y = this.y + this.vilocityY;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collided(currentObs) {
    let iscolliding = collideRectRect(
      this.x,
      this.y,
      this.size - 15,
      this.size - 15,
      currentObs.x,
      currentObs.y,
      currentObs.size - 15,
      currentObs.size - 15
    );
    return iscolliding;
  }
}
