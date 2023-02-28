// function greetings(p){
//     console.log(p);

// }
// const name= 'Mostakem';
// const bool= true;
// const age=12;
// const arr= [10,20,30];
// const obj= { name:"mostakem",age:12,arr:[10,20,30]};
// console.log(name)
// console.log(bool)
// console.log(age)
// console.log(obj)
// console.log(arr)


function grettings(greetingHandler,name){
    greetingHandler(name);

}
function greetingHandler(name){
    console.log('Good morning ',name)
}

grettings(greetingHandler,'mostakem');
grettings(greetingHandler,'nafian');