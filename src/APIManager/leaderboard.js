/* eslint-disable quote-props */
export default function updateLeaderboard() {
  const results = JSON.parse(localStorage.getItem('result'));
  const scoring = {
    user: results[0].user,
    score: results[0].score,
  };
  console.log(scoring);
  console.log(JSON.stringify({ scoring }));
  (async () => {
    const rawResponse = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9uEL592fTdE2ZHjkFVdT/scores', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(scoring),
    });
    const content = await rawResponse.json();
    console.log(content.result);
  })();
}