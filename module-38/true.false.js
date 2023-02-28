/* 
Truthy:
1.true
2. any positive and negative value return true other then zero
3.any string is truthy except empty string
4. object is truth also empty object
6. empty array or array giv truthy




Falsy:
1.true
2.zero give false
3.empty striny
4. undified
5.null



*/

let x=0

if(x){
    console.log('x is true')
}else{
    console.log('x is false')
}


//optional 
//falsy check
let d='';
if(!d){
    console.log('falsy')
}

//truthy check

let k=[];
if(!!k){
    console.log('truthy')
}