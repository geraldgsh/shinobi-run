import Phaser from '../dist/phaser';
import { Stage1 } from '../src/scenes/stage1';
import { Stage2 } from '../src/scenes/stage2';
import { Stage3 } from '../src/scenes/stage3';
import { Stage4 } from '../src/scenes/stage4';
import newPlayer from '../src/assetManager/player';

const gameCanvas = document.getElementById('gameCanvas');

export default function initiate() {
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
  return game;
}
