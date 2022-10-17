//Your Code here
let userName = window.prompt("Please enter your name:")
let userScore = 0;

for(let i = 0; i < question.length; i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if(userAnswer === question.correctAnswer){
        userScore = userScore + 10
    }
}
window.alert("your score is: "+userScore)

let serializedGames = localstorage.getItem("games")

let games;
if(serializedGames === null){
    games = []
} else {
    games = JSON.parse(serializedGames)
}

let game = {
    user: userName,
    score: userScore
}

games.push(game)

serializedGames = JSON.stringify(games)
localStorage.setItem("games", serializedGames)

let highestScoringGame = games[0]
for(let i = 0; i < games.length; i++){
    let game = games[i]
    if(game.score > highestScoringGame.score){
        highestScoringGame = game
    }
}
window.alert("the high score is: "+highestScoringGame.score)
