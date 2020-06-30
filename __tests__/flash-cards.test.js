import { FlashCard } from './../src/flash-cards.js';
import { Cards } from './../src/cards.js';

describe ('FlashCard', () => {
  let flashCard;

  beforeEach(() => {
    flashCard = new FlashCard("Bob");
  });

  test('Should create a new FlashCard object', () => {
    expect(flashCard).toMatchObject({name: "Bob", score: 0, cards:  new Cards()});
  });
});