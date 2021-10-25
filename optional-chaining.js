console.clear();
/**How to check for empty arrays traditionally */
let array = [];

const isArrayEmptyTraditional = (array) => {

    //Traditional
    console.log("Traditional");
    if(array.length){
        console.log('array is not empty');
    } else {
        console.log('array is empty');
    }
    console.log('\n');
    //Traditional ternary
    console.log("Traditional Ternary");
    array.length ? console.log('array is not empty') : console.log('array is empty');
    
    console.log('\n');
    /**What if the data that gets passed is not an array? JSON data, object, something we dont expect.
     * We don't want to assume that we'll be working with an array.
     */
    array = undefined; //same if null

    // return array.length ? false : true; //will then throw an error because array is not an array.


    /**To handle undefined and null values, we can check if the array exists*/
    console.log("Traditional Ternary that checks if array exists and if its not empty");
    array && array.length ? console.log('array is not empty') : console.log('array is empty');

}
isArrayEmptyTraditional(array);

console.log('\n');
console.log('\n');
console.log('Optional Chaining');
console.log('\n');

//With optional chaining
array = [];
const isArrayEmptyOptionalChaining = (array) => {
    console.log('Ternary Optional Chaining');
    array?.length ? console.log('array is not empty') : console.log('array is not an array or there is no length');

    console.log('\n');
    /**You can use the optional chaining operator more than once */
    console.log('Chaining Multiple Optional Chaining Operators');
    array = [{name: 'John'}];

    //why does this not work, but using first index [0] does?
    // array?.length?.name ? console.log('array exists, its not empty, and it contains a name property') : console.log('array does not exist, there is no length, or there is no name propety');
    array?.[0]?.name ? console.log('array exists, its not empty, and it contains a name property') : console.log('array does not exist, there is no length, or there is no name propety');
    //If the property does not exist
    array?.[0]?.id ? console.log('array exists, its not empty, and it contains a name property') : console.log('array does not exist, there is no length, or there is no name propety');

    console.log('\n');
    console.log('Null Coalescing operator with Opetional Chaining');
    console.log(array?.[0]?.name ?? 'Name property not found'); //if left side is true, return left side, if false, return right side
    console.log(array?.[0]?.id ?? 'ID property not found'); //if left side is true, return left side, if false, return right side

}
isArrayEmptyOptionalChaining(array);

console.log('\n');
console.log('\n');
console.log('Put it all together');
console.log('\n');

array = 'String';
const checkArray = (array) => {
    /**Checks is array exists and if its empty. Does not actually check if the data type is an array.
     * The array variable technically does exist, and it does have a length method because the value of array is a String
     * so it will evaluate as true.
     */
    console.log('\nNot actually checking if array is an array, but only if it exists and is not empty');
    array?.length ? console.log('Array is an array and is not empty') : console.log('Array is not an array or is not empty');
    
    //How to truly check if an array is an array
    console.log('\nTruly check if an array is an array');
    Array.isArray(array) ? console.log('Truly an array') : console.log('Truly not an array');

    console.log('\Truly check if an array is an array and if its not empty');
    Array.isArray(array) && array.length ? console.log('Truly a non-empty array') : console.log('Not truly an array or is empty');
    
    console.log('\nChecking JSON data');
    array = [{ 'name' : 'John'}]
    console.log('\nChecking JSON data for property');
    Array.isArray(array) && array[0]?.name ? console.log('Truly a non-empty array with property') : console.log('Not truly an array or is empty or could not find property');
    Array.isArray(array) && array[0]?.id ? console.log('Truly a non-empty array with property') : console.log('Not truly an array or is empty or could not find property');
    
}

checkArray(array);