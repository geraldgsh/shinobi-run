/* eslint-disable import/prefer-default-export */
import { Stage } from './stage';

export class Stage2 extends Stage {
  constructor() {
    super('Stage2');
    this.heights = [
      5, 4, null,
      4, 6, 4,
      6, 5, 4,
      null, null, 7,
      6, 5, 4,
      null, 7, null,
      7, 4, 1,
    ];
  }

  preload() {
    this.load.image('cityBGNight', 'assets/city/city_bg_night.png');
  }

  create() {
    this.add.image(2560, 320, 'cityBGNight');
  }
}