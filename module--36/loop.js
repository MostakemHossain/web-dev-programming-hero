const numbers= [10,20,30,40,50]
// for(const number of numbers){
//     console.log(number);
// }


const bottle={

    name:'bottle',
    price:50,
    ispure:true
}


//for of cannot be used in object
// for(const key of bottle){
//          console.log(number);
//      }
// 3 ways to read object properties
// bottle.name
//bottle['name']
//bottle[key]
const keys= Object.keys(bottle);
for(const key of keys){
    console.log(bottle[key])
}

// for in loop
for(const key in bottle){
    console.log(key,bottle[key])
}

//advanced system

for(const [key,value] of Object.entries(bottle)){
    console.log(key,value);
}