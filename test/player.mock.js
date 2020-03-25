/* eslint-disable no-alert */
import { Player, result } from '../src/constructor/constructor';

export function checkName(name) {
  if (name === '') {
    return false;
  }
  return true;
}

export function newPlayer(player1Name) {
  const results = JSON.parse(localStorage.getItem('result'));
  if (checkName(player1Name)) {
    return true;
  }
  if (results === null) {
    const player1 = Player(player1Name, 0);
    result.push(player1);
    window.localStorage.setItem('result', JSON.stringify(result));
  } else if (results[0].user !== player1Name) {
    result.splice(0, 1);
    const player1 = Player(player1Name, 0);
    result.push(player1);
    window.localStorage.setItem('result', JSON.stringify(result));
  } else {
    alert('Please use another name.');
  }
  return results;
}
