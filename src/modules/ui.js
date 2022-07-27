class UI {
    // method for displaying leaderboard
    static displayLearderboard() {
        const storedScore = [
            {
                name: 'Collins',
                scored: '100'
            },
            {
                name: 'Nayomie',
                scored: '100'
            },
            {
                name: 'Safari',
                scored: '100'
            },
            {
                name: 'Asante',
                scored: '100'
            },
            {
                name: 'Asante',
                scored: '100'
            }
        ]
        const scores = storedScore;
        scores.forEach((score) => UI.addScoreToList(score));
    }

    // addScoreToList
    static addScoreToList(score) {
        const list = document.querySelector('.show-scores');

        const addedScore = document.createElement('div');
        addedScore.innerHTML = `
        <div class="display-score">
        <p>${score.name}</p>
        <p>${score.scored}</p>
        </div>
        `;
        list.appendChild(addedScore);
    }
}

export default UI;