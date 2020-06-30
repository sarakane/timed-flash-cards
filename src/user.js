import { FlashCard } from './flash-cards.js';

export class User {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.cards = new FlashCard();
  }
}
