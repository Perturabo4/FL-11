const reverseNumber = num => {
    let reverseNum = '',
        str = num.toString();
    
    for(let i = str.length - 1; i >= 0; i--){
        reverseNum = str[i] === '-'? str[i] + reverseNum : reverseNum + str[i]; 
    }
    return parseFloat(reverseNum);
}

reverseNumber(-697);