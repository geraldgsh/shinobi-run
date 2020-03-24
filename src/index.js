/* eslint-disable no-unused-vars, import/no-unresolved */
import Phaser from '../dist/phaser';
import { Stage1 } from './scenes/stage1';
import { Stage2 } from './scenes/stage2';
import { Stage3 } from './scenes/stage3';
import { Stage4 } from './scenes/stage4';
import newPlayer from './assetManager/player';

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

const eventHandler = (() => {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start').addEventListener('click', () => {
      newPlayer();
    });
  });
  document.getElementById('new').addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
  });
})();