import { Stage } from './stage';

export class Stage1 extends Stage {
  constructor() {
    super('Stage1');
    this.heights = [
      4, 7, 5, 
      null, 5, 4, 
      null, 4, 5, 
      3, null, 7, 
      5, 4, null, 
      null, 7, 6, 
      4, null, 4
    ];
  }
}