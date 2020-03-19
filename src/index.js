/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import 'phaser';
import { Stage1 } from './scenes/stage1';
import { Stage2 } from './scenes/stage2';
import { Stage3 } from './scenes/stage3';
import { Stage4 } from './scenes/stage4';

const gameCanvas = document.getElementById('gameCanvas');

const gameConfig = {
  type: Phaser.CANVAS,
  canvas: gameCanvas,
  width: 960,
  height: 640,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 550 },
      enableBody: true,
    },
  },
  scene: [Stage1, Stage2, Stage3, Stage4],
};

const game = new Phaser.Game(gameConfig);
