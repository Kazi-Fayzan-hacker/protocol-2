//for(Let i = 0; i < 10; i++){
//    console.log(i);
// }

//i=0
//i=1
//i=2
//i=3

let fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
//for(let i = 0; i < fruits.length; i++){
//    console.log(fruits[i]);
//}

//2 x 1 = 2
//2 x 2 = 4
//2 x 3 = 6
//2 x 4 = 8
//2 x 5 = 10
//2 x 9 = 18
//2 x 10 = 20
//for(let i = 1; i <= 10; i++){
//    console.log(`2 x ${i} = ${2 * i}`);
//}
 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNumbers = numbers.map(function(number){
    return number * 2;
});
//console.log(newNumbers);


