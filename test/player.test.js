import { checkName, newPlayer } from './player.mock';

describe('Text if new player name was inputted', () => {
  const name = 'tester';
  const nameless = '';
  test('Name and default score is stored', () => {
    const response = newPlayer(name);
    expect(response).toBe(true);
  });
  test('Name was given', () => {
    expect(newPlayer(name)).toBe(true);
  });
  test('Name not given', () => {
    expect(checkName(nameless)).toBe(false);
  });
});