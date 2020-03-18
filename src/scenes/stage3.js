import { Stage } from './stage';

export class Stage3 extends Stage {
  constructor() {
    super('Stage3')
    this.heights = [
      6, null, 6, 
      4, 6, 4, 
      5, null, 4,
      8, 6, 4,
      null, 7, null,
      7, 5, 4,
      3, null, null
    ];
  }
}