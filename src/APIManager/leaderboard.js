/* eslint-disable no-console, quote-props */
export default function updateLeaderboard() {
  const results = JSON.parse(localStorage.getItem('result'));
  (async () => {
    const scoring = {
      user: results[0].user,
      score: results[0].score,
    };
    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9uEL592fTdE2ZHjkFVdT/scores',
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
}