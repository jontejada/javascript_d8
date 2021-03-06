
//.sort() orders an array accorging to its string Unicode code points, NOT its numerical value 


/*
from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
If compareFunction(a, b) is less than 0, sort a to a lower index than b, i.e. a comes first.
If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behaviour, and thus not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
If compareFunction(a, b) is greater than 0, sort b to a lower index than a.
compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned then the sort order is undefined.
*/

var myArray = [3,1,2,4,9,10,0,15];

//myArray.sort() will reorder the array as [0,1,10,15,2,3,4,9]

function sortNumber(a,b) {
    return a - b;
}

//myArray.sort(sortNumber) will reorder it numerically