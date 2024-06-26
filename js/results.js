document.addEventListener('DOMContentLoaded', () => {
    const localStorageValues = JSON.parse(localStorage.getItem('gameData'))
    console.log(localStorageValues);

    if (!localStorageValues.allGamesComplete) return;
    const ranks = [
        "Padawan",
        "Jedi Knight",
        "Jedi Master"
    ]
    document.querySelector('.results-content').style.display = 'block'; 
    document.querySelector('.all-trails-incomplete').style.display = 'none'; 

    const memoryResult = ranks[localStorageValues.memory.result-1];


    const agilityResult = ranks[localStorageValues['whack-a-droid'].result-1];


    const wisdomResult = ranks[localStorageValues.wordle.result-1];
    
    const overallScore = ranks[localStorageValues.totalScore-1];


    const memoryResultSpan = document.querySelector('#memory-result span');
    const agilityResultSpan = document.querySelector('#agility-result span');
    const wisdomResultSpan = document.querySelector('#wisdom-result span');
    const overallRank = document.querySelector('#overall-result');

    memoryResultSpan.innerText = memoryResult;
    agilityResultSpan.innerText = agilityResult;
    wisdomResultSpan.innerText = wisdomResult;
    overallRank.innerText = overallScore;
})