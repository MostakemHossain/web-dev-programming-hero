/*
 8 ways to get undifined
*/

// 1-> variable is not initilized will give undifined
 let a;
 console.log(a);

 //2-> function with no return
 function second(a,b){
     const total= a+b;

 }
 const first= second();
 console.log(first)

//3-> parameter that will not passed its give undifined
function sum(a,b,c,d,e){
    console.log(a,b,c,d,e);
}

sum(1,2);

//4-> if return has nothing on the right side is show undifined

function isNegative(a,b){
    if(a<0 || b<0){
        return 
    }
    else{
        return a+b;
    }
}
const negative= isNegative(2,-5);
console.log(negative)


// 5-> property that doesn't exist in an object is return undifined

const student={
    id:12,
    age:144,
}
console.log(student.hello)

//6->accessing of the array in the index
const arr=[1,2,3];
console.log(arr[28]);

//7-> deleting an element inside in array use splice
 delete arr[1];


 // 8-> set a value directly to undifined
  const he= undefined; //use null


  console.log(typeof undefined, typeof null);