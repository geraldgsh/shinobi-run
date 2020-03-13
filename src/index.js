import 'phaser';
import { SimpleScene } from './scenes/simple-scene';

const gameCanvas = document.getElementById('gameCanvas')

const gameConfig = {
  type: Phaser.CANVAS,
  canvas: gameCanvas,
  width: 680,
  height: 400,
  scene: SimpleScene
};

new Phaser.Game(gameConfig);