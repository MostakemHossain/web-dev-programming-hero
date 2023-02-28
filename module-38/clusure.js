function kitchen(){
    let roast=0;
    return function(){
        roast++;
        return roast;

    }
}
const first= kitchen();
const second= kitchen();
console.log(first());
console.log(second());

console.log(first());
console.log(first());
console.log(first());
console.log(second());