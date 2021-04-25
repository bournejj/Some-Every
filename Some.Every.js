

const hasOddNumber = function (arr) {
    return arr.some(function (val) {
        return val % 2 !== 0;
    });
}

const hasAZero = function (nums) {

    return nums.toString().split('').some(function (val) {
        return val === '0';

    });

}

const hasNoDuplicates = function (arr) {

    return arr.every(function (val) {
        return arr[val] === val;


    });

}

const hasOnlyOddNumbers = function (arr) {

    return arr.every(function (val) {
        return val % 2 !== 0;


    });

}

const hasCertainValue = function (arr, key, searchValue) {
    return arr.every(function (val) {
        return val[key] === searchValue;
    })

}

let cetrainKeyArr = [
    { title: "Instructor", first: 'Elie', last: "Schoppik" },
    { title: "Instructor", first: 'Tim', last: "Garcia", isCatOwner: true },
    { title: "Instructor", first: 'Matt', last: "Lane" },
    { title: "Instructor", first: 'Colt', last: "Steele", isCatOwner: true }
];

const hasCertainKey = function (arr, key) {

    return arr.every(function (val) {

        return key in val;
    })

}