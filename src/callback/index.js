//define the first function
function sum(num1, num2){
    return num1 +num2;
}

// define the second function that will receive the 
//the first function as a parameter, doing a callBack
function calc(num1, num2, callback){
    return callback(num1, num2);
};

//test of te function, whe we declare the function that will be called,
//don't have to do with parameters
console.log(calc(12,12, sum));

/*Set Time Out*/
// syntax setTimeout=>JavaScript Object(anonymous function(parameters or void)){body of the function},
// 3000 => time to wait and do the time out in milliseconds
setTimeout(function(){
    console.log("Hello JavaScript")
}, 3000);

//as a test and practice i'd defined a function that only do a console log with Hello and parameter name
function greeting(name){
    console.log(`Hello ${name}`);
}
// i do another time out, but this time i give the function greeting as a parameter,
// set the wait time in two seconds, and finally i add the parameter required in
// the function greeting 
setTimeout(greeting,2000, 'William');

