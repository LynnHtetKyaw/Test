const fetchData = functionParameter => {
    
    functionParameter('sdf');
    console.log(functionParameter);

};

// setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData(functionArgument => {
//         console.log(functionArgument);
//     });
// }, 2000);

console.log('hello');
console.log('Hi.');

fetchData(text => console.log('a'));
fetchData(text => console.log(text));
fetchData('azxcvzxcv');