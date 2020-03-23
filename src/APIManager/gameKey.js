/* eslint-disable dot-notation */
/* eslint-disable quote-props */
import { Key } from '../constructor/constructor';

const keyGen = [];

export default function makeGameKey(gamekey) {
  console.log(gamekey);
  const key = JSON.parse(localStorage.getItem('keyGen'));
  if (key === null) {
    const gamekey1 = Key(gamekey);
    keyGen.push(gamekey1);
    window.localStorage.setItem('keyGen', JSON.stringify(keyGen));
  } else if (key[0]) {
    keyGen.splice(0, 1);
    const gamekey1 = Key(gamekey);
    keyGen.push(gamekey1);
    window.localStorage.setItem('keyGen', JSON.stringify(keyGen));
  }
}

(async () => {
  const rawResponse = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'Shinobi Run' }),
  });
  const content = await rawResponse.json();
  const gamekey = content['result'].slice(14, 35);
  makeGameKey(gamekey);
})();
