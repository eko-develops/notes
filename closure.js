/**
 * A good example of closure is a function having access to the parent score, even after the parent function has closed. -w3schools
 * 
 * A closure is created when we define a function, not when a function is executed.
 */


//the global scope
//-will not  have access to the parentFunction local scope variables
const globalMessage = `Hi I'm a from the global scope!`;

const parentFunction = () => {
    //parentFunction local scope
    //-has access to global scope variables
    //-does not have access to childFunction scope variables
    const parentMessage = `Hi I'm from the parent function!`;
    console.log('parent function ran');

    /**will throw an error because the variable childMessage is not
     * within the parentFunction local scope.
     */
    // console.log({globalMessage, parentMessage, childMessage});    //demonstrate variable not within parent scope
    // console.log({globalMessage, parentMessage});    //demonstrate access to global scope

    const childFunction = () => {
        //childFunction local scope
        //-has access to parentFunction local scope variables
        //-has access to global scope variables
        const childMessage = `Hi I'm from the child function!`;
        console.log('child function ran');

        /**
         * demonstrates lexical scope. an important part to distinguish is lexical scope vs closure.
         * lexical scope is an important part of closure but not the whole thing.
         */
        console.log({globalMessage, parentMessage, childMessage});
    }

    return childFunction;
}

// const result = parentFunction();


/**Try it */

//make a function factory for an adder function that adds 3 and 5 to a number

const adderFactory = (number) => {
    
    const adder = number

    const add = (number) => {
        return number + adder 
    }

    return add;


}

// const add3 = adderFactory(3);
// const add5 = adderFactory(5);

// console.log(add3(5));   //should return 8
// console.log(add5(5)); //should return 10




//IIFE
const invokeImmediately = (() => {
    console.log('I have been invoked immediately!');
})();

const counter = (() => {
    let count = 0;

    return () => { count += 1; console.log(count)}
    

})()

// counter();
// counter();
// counter();
// counter();
// counter();



/**IIFE function factory with parameter */

const iifeAdderFactory = ((num) => {
    let number = num

    return () => { number += 3; console.log(number)}
})(3)

iifeAdderFactory();
iifeAdderFactory();
iifeAdderFactory();
iifeAdderFactory();
iifeAdderFactory();