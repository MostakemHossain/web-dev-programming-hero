const loadData = ()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then (res => res.json())
    .then( data => showData(data))
}

const showData= (users)=>{
    console.log(users.results[0].picture.medium);
    const gender= document.getElementById('gender');
    gender.innerHTML=users.results[0].gender;
     const name = users.results[0].name.title + " "+users.results[0].name.first +" "+users.results[0].name.last;
     document.getElementById('name').innerHTML=name;
     const div=document.getElementById('img');
     div.innerHTML=`
     <img src="${users.results[0].picture.large}" alt="">

     `

    
     
    

}

loadData();