//dynamic type language


//premitive
const a=10;
const b='Hello js'
const c= true;



// non premitive-multiple value
const d= [1,2,3,4,5];
const student={
    id:10,
    name:"Mostakem"
}
console.log(typeof a,typeof b,typeof c,typeof d, typeof student);


let x=5;
let y=x;
console.log(x,y);
y=7;
console.log(x,y);

let a1={ jon:'web developer'}
let a2=a1;
console.log(a1,a2)
// a2={    jon:'backend'}
// console.log(a1,a2)

a2.jon='backend dwhjegwukhkb';
console.log(a1,a2)