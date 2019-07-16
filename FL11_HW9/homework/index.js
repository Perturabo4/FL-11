const one = 1,
    two = 2,
    three = 3,
    five = 5,
    testArr = [one,two,three];
// 0. ************************************************************
const getNumbers = (str) => {
    let arr = [],
        i = 0,
        num;

    for( i; i <= str.length - 1; i++){
        num = parseInt(str[i]);
        if(num) {
            arr.push(num);
        }
    }
    return arr;
} 

getNumbers('wrt2nm,67jk8');
// 1. *************************************************************
const findTypes = (...args) => {
    const obj = {};
    let type;

    for(let i = 0; i < args.length; i++){
        type = typeof args[i];
        obj[type] ? obj[type]++ : obj[type] = 1;
    }
    return obj;
}

findTypes(null, five, 'hello');
// 2. *************************************************************
const executeforEach = (arr, fun) => {
    if(arr.length === 0){
        return;
    } 
    fun(arr[0]);
    return executeforEach(arr.slice(1), fun);  
}
executeforEach(testArr, function(el) { 
        console.log(el);
    }
 );
// 3. *************************************************************
const mapArray = (arr, fun) => {
    const newArr = [];
    const cover = f => (arg) => newArr.push(f(arg));
    
    executeforEach(arr, cover(fun));

    return newArr;
}
mapArray(testArr, el => el + three ); 
// 4. *************************************************************
const filterArray = (arr, fun) => {
    const newArr = [];
    const cover = (f) => (arg) => {
        if(f(arg)){
            newArr.push(arg);
        }
    } 
    executeforEach(arr, cover(fun));

    return newArr;
}
filterArray(testArr, el => el > two ); 
// 5. *************************************************************
const showFormattedDate = (date) => {
    const slicePos = 4;
    return date.toDateString() === 'Invalid Date' 
            ? `Date: Invalid Date` 
            : `Date: ${date.toDateString().slice(slicePos)}`;
};
showFormattedDate(new Date('2019-01-27T01:10:00')); 

// 6. *************************************************************
const canConvertToDate = (str) => new Date(str).toDateString() !== 'Invalid Date';
canConvertToDate('2016-13-18T00:00:00');

// 7. *************************************************************
const daysBetween = (date1, date2) => {
    const mSecondsInDay = 86400000,
          mSeconds = date1 < date2 ? date2 - date1 : date1 - date2,
          days = Math.round(mSeconds / mSecondsInDay);
    
    return days >= 1 ? days : 0;
}

daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));  

// 8. *************************************************************
const data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      ' birthday ': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      ' birthday ': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      ' birthday ': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      ' birthday ': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ];
  
const getAmountOfAdultPeople = (data) => {
    const daysInYear = 365;
    const adult = 18;
    const isAdult = (obj) => daysBetween(new Date(obj[' birthday ']), new Date()) / daysInYear >= adult;
    return filterArray(data, isAdult).length;
}
getAmountOfAdultPeople(data);

// 9. *************************************************************
const keys = (obj) => {
    const arr = [];

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            arr.push(key);
        }
    }
    return arr;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3}); 

// 10. *************************************************************

const values = (obj) => {
    const arr = [];

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            arr.push(obj[key]);
        }
    }
    return arr;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3}); 
