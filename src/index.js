/* eslint-disable max-classes-per-file */

import './style.css';
import { createUserData, getUserEntry } from './modules/leaderboardApi.js';

// Displaying Scores
const refreshBtn = document.getElementById('refresh-btn');

const showScores = async () => {
  const displayScores = document.getElementById('display-scores');

  while (displayScores.firstChild) {
    displayScores.removeChild(displayScores.firstChild);
  }

  const userEntry = await getUserEntry();

  userEntry.result.forEach((entry) => displayScores.insertAdjacentHTML('beforeend', `
    <div id="display-score">
    <p>${entry.user}:</p>
    <p> ${entry.score}</p>
    </div>  
  `));
};

refreshBtn.addEventListener('click', showScores);

const userDataSubmit = document.getElementById('add-score');

userDataSubmit.addEventListener('click', async () => {
  let userName = document.getElementById('user-name').value;
  let userScore = document.getElementById('user-score').value;
  if (userName !== '' && userScore !== '') {
    const data = {
      user: userName,
      score: userScore,
    };

    await createUserData(data);

    userName = '';
    userScore = '';
  }
  showScores();
});

document.addEventListener('DOMContentLoaded', () => {
  showScores();
});

/* eslint-disable max-classes-per-file */