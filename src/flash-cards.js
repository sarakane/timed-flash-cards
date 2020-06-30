import { Cards } from './cards.js';

export class FlashCard {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.cards = new Cards();
  }
}
