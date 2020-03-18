import { Stage } from './stage';

export class Stage4 extends Stage {
  constructor() {
    super('Stage4')
    this.heights = [
      4, null, 7, 
      6, null, 6, 
      null, 5, 4,
      null, 7, 5,
      6, 7, 5,
      null, null, null,
      7, 6, 5
    ];
  }
}