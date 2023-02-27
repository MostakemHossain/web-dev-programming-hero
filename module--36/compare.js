// const first={a:2};
// const second={a:2};
// const third=second;

// if(first===second){
//     console.log("same");
// }else{
//     console.log("different")
// }
// if(third ===second){
//     console.log("same");
// }else{
//     console.log("different")
// }

// do not use this method object or array
// const first={a:2};
// const second={a:2};
// const firstString=JSON.stringify(first);
// const secondString=JSON.stringify(second);

// if(firstString ===secondString){
//     console.log("same");
// }else{
//     console.log("different")
// }

const first={a:2,b:5,d:4,k:4};
const second={a:2,b:5,c:4};

function compare(first,second){
    const firstKeys=Object.keys(first);
    const secondKeys=Object.keys(second);
    if(firstKeys.length===secondKeys.length){
        for(const key of firstKeys){
            if(first[key]!==second[key]){
                return false;
            }else{
                return true;
            }
        }
    }else{
        return false;
    }

}
const isSame=compare(first,second);
console.log(isSame);


