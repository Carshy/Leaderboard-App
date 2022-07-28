// Fetching the API
const baseApiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const apiGameId = 'JStHFPgNXN8UYzCikGNk';

// Creating the game
const createGame = async (name) => {
  const response = await fetch(baseApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });

  const res = await response.json();
  return res;
};

// Creating user Data
const createUserData = async (data) => {
  const response = await fetch(`${baseApiUrl}${apiGameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  return res;
};
// Receiving User Data
const getUserEntry = async () => {
  const response = await fetch(`${baseApiUrl}${apiGameId}/scores/`);
  const userEntry = await response.json();
  return userEntry;
};

export { createGame, createUserData, getUserEntry };