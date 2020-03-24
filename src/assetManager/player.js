/* eslint-disable no-alert */
import { Player, result } from '../constructor/constructor';

const checkName = (name) => {
  if (name === '') {
    alert('Names can`t be blank!');
    return false;
  }
  return true;
};

export default function newPlayer() {
  const canvas = document.getElementById('gameCanvas');
  const results = JSON.parse(localStorage.getItem('result'));
  const player1Name = document.getElementById('player1name').value;
  if (checkName(player1Name)) {
    canvas.style.display = 'block';
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
}
