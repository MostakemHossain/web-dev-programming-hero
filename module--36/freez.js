const bottle={

    name:'bottle',
    price:50,
    ispure:true
}
const keys= Object.keys(bottle);
console.log(keys);
const values= Object.values(bottle);
console.log(values);
const pair=Object.entries(bottle)
console.log(pair);
Object.freeze(bottle)
//Object.seal(bottle)
bottle.height=12;
delete bottle.ispure;
console.log(bottle)