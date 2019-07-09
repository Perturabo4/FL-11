let max = 9,
    min = 0,
    attempts = 3,
    rangeStep = 4,
    prizeStep = 2,
    att = attempts,
    num,
    userNum,
    cash = 0,
    maxPrize = 100,
    half = 2,
    quarter = 4, 
    prize = [maxPrize / quarter, maxPrize / half, maxPrize],
    playAgain = true,
    defaultSettings = {
        max: 9,
        cash: 0
    };

if(confirm('Do you want to play a game?')){
    while(playAgain){
        num = Math.floor(Math.random() * (max - min)) + min;
        while (att >=0 && playAgain) {
            if(att === 0){
                alert(`Thank you for your participation. Your prize is: ${cash}$`);
                prize = [maxPrize / quarter, maxPrize / half, maxPrize];
                max = defaultSettings.max;
                cash = defaultSettings.cash;
                playAgain = confirm('Do you want to play again?');
                if(playAgain){
                    att = attempts;
                }
                break;
            }else {
                userNum = + prompt(`Choose a roulette pocket number from ${min} to ${max - 1} ${'\n'}` +
                                    `Attemts left: ${att} ${'\n'}`+
                                    `Total prize: ${cash}$ ${'\n'}`+
                                    `Possible prize for current attempt: ${prize[att - 1]}$`);
                if(num === userNum){
                    cash += prize[att - 1];
                    playAgain = confirm(`Congratulation, you won! Your prize is: ${cash}$. Do you want to continue?`);
                    if(!playAgain){
                        alert(`Thank you for your participation. Your prize is: ${cash}$`);
                        playAgain = confirm('Do you want to play again?');
                        prize = [maxPrize / quarter, maxPrize / half, maxPrize];
                        max = defaultSettings.max;
                        cash = defaultSettings.cash;
                    }else{
                        max += rangeStep;
                        for(let i = 0; i < prize.length; i++){
                            prize[i] *= prizeStep;
                        }
                        att = attempts;
                    }
                    break;
                }else if(!userNum && userNum !== 0){
                    playAgain = false;
                    break;
                }
            }
            att --;
        }
    }
}else {
    alert('You did not become a billionaire, but can.');
}