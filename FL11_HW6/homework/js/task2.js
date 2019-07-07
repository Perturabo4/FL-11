let a = + prompt('Enter a side'),
    b = + prompt('Enter b side'),
    c = + prompt('Enter c side'),
    minimal = 0;

if(a > minimal && b > minimal && c > minimal ) {
    if(a === b && b === c) {
        console.log('Eequivalent triangle');
    } else if(a === b || b === c || c === a) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}
