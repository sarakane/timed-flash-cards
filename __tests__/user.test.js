import { User } from './../src/user.js';
import { FlashCard } from './../src/flash-cards.js'

describe ('FlashCard', () => {
  jest.useFakeTimers();
  let reusableUser;

  beforeEach(() => {
    reusableUser = new User("Bob");
    
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('Should create a new User object', () => {
    expect(reusableUser).toMatchObject({name: "Bob", score: 0, cards:  new FlashCard()});
  });

  test('Should return false if user is not a winner', () => {
    reusableUser.gameTimer();
    jest.advanceTimersByTime(300001);
    expect(reusableUser.isAWinner).toBe(false);
  });

  test('Should return true if user is a winner', () => {
    reusableUser.score = 5;
    reusableUser.gameTimer();
    jest.advanceTimersByTime(300001);
    expect(reusableUser.isAWinner).toBe(true);
  })
});