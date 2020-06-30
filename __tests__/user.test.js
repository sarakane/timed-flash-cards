import { User } from './../src/user.js';
import { FlashCard } from './../src/flash-cards.js'

describe ('FlashCard', () => {
  let reusableUser;

  beforeEach(() => {
    reusableUser = new User("Bob");
  });

  test('Should create a new User object', () => {
    expect(reusableUser).toMatchObject({name: "Bob", score: 0, cards:  new FlashCard()});
  });
});