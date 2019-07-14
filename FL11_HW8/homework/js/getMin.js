const getMin = (...args) => {
    let min = Infinity;
    for(let i = 0; i < args.length; i++){
        min = args[i] < min ? args[i] : min;
    }
    return min;
}

getMin(-2, 6, 8, 0, -19);