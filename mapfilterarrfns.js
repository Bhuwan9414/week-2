// map, filter and arrow functions :


//  normal way of writing functions
// function sum(a,b){
//     return a + b;
// }

// const ans = sum(2,2);
// console.log(ans);


//  using arrow functions to write functions :
// const sum = (a,b) => {
//     return a + b;
// }

// const value = sum(5,5);
// console.log(value);

// Map :

// normal way:
// const arr = [1,2,3,4];

// const newarr = [];

// for(let i = 0 ; i < arr.length ; i++){
//     newarr.push(arr[i] * 2);
// }
// console.log(newarr);


// using map :

// const arr = [1,2,3,4,5]

// function transform(i){
//     return i * 2;
// }

// const ans = arr.map(transform);
// console.log(ans);


// another cleaner way :
// const arr2 = [1,2,3,4,5];

// const ans2 = arr2.map(function(i){
//     return i * 2;
// });

// console.log(ans2);



// filter :

// given an array sort all the even elements in it and create a new array of the even elements

// normal way of doing above problem :
// const arr = [1,2,3,4,5]

// const newarr = []

// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] % 2 === 0){
//         newarr.push(arr[i]);
//     }
// }

// console.log(newarr);


// writing the code for the above problem using filter fn:

// const arr = [1,2,3,4,5];

// const newarr = []

// function filtering(n){
//     if(n % 2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const ans = arr.filter(filtering);
// console.log(ans);

// again a more cleaner way of writing above code :

const arr = [1,2,3,4,5];

const newarr = [];

const ans = arr.filter(function(n){
    if(n % 2 == 0){
        return true;
    }
    else{
        return false;
    }
})

console.log(ans);

