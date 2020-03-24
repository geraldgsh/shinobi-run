/* eslint-disable prefer-destructuring */
export default function ranking(ranks) {
  const content = document.getElementById('content');
  content.innerHTML = '';
  let count = 11;
  for (let i = 10; i > 0; i -= 1) {
    count -= 1;
    const row = content.insertRow(0);
    row.setAttribute('data-index', `${i}`);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = count;
    cell2.innerHTML = ranks[i][0];
    cell3.innerHTML = ranks[i][1];
  }
}