export default function updateLeaderboard() {
  const results = JSON.parse(localStorage.getItem('result'));
  const scoring = {
    user: results[0].user,
    score: results[0].score,
  };

  console.log(scoring);
}