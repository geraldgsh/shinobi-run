import initiate from './index.mock';

describe('Testing mock index file', () => {
  const game = initiate();
  test('Object respond when initiate runs', () => {
    expect(typeof game).toBe('object');
  });
  test('Expect loaded scene', () => {
    expect(typeof game.scene.scenes).toBe('object');
  });
});
