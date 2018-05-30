import Phaser from 'phaser-ce'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.movement = 10;
  }

  update () {
    this.angle += 1
    this.x += this.movement
    if (this.x >= this.game.width)
      this.movement *= -1;
    else if (this.x <= 0)
      this.movement *= -1;
  }
}
