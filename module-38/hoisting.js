print5(); //hoisting 
print10();//error dibe


for(var i=0;i<5;i++){
    console.log(i)
}
console.log('outside 'i) // output dibe
for(let i=0;i<5;i++){
    console.log(i)
}
console.log('outside 'i) // error dibe

function print5(){
    console.log(5);
}
const print10= function print10(){
    console.log(10);
}