/* eslint-disable no-console, quote-props */
import ranking from '../DOM/ranking';

const sorter = (object) => {
  const scoreArr = [];
  for (let i = 0; i < object.length; i += 1) {
    scoreArr.push([object[i].user, object[i].score]);
  }
  return Array.from(scoreArr).sort((a, b) => b[1] - a[1]);
};

const getLeaderboard = () => {
  (async () => {
    try {
      const scores = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/l4D6EKOnCSG2nZhU4FzI/scores',
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
      const content = await scores.json();
      ranking(sorter(content.result));
    } catch (err) {
      throw new Error('Unable to fetch JSON response');
    }
  })();
};

export default function updateLeaderboard() {
  const results = JSON.parse(localStorage.getItem('result'));
  (async () => {
    const scoring = {
      user: results[0].user,
      score: results[0].score,
    };
    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/l4D6EKOnCSG2nZhU4FzI/scores',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(scoring),
        });
      const content = await response.json();
      console.log(content.result);
    } catch (err) {
      throw new Error('Unable to fetch JSON response');
    }
  })();
  getLeaderboard();
}