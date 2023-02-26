const loadData= async(searchText,dataLimit)=>{
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res= await fetch(url)
    const data= await res.json()
    displayPhones(data.data,dataLimit);
}
const displayPhones=(phones,dataLimit)=>{
    //console.log(phones)
    const phoneContainer= document.getElementById('phone-container');
    phoneContainer.innerHTML=''
    const showAll= document.getElementById('show-All');
    if(dataLimit &&  phones.length>10){

      phones=phones.slice(0,10);
      showAll.classList.remove('d-none')
      
    }else{
      showAll.classList.add('d-none');
    }

    const notFound= document.getElementById('not-found');
    if(phones==0){
      notFound.classList.remove('d-none');
    }else{
      notFound.classList.add('d-none');
    }
    

    
    phones.forEach(phone =>{
        //console.log(phone.slug)
        const div= document.createElement('div');
        div.classList.add('col');
       
        div.innerHTML=`
        <div class="card p-4">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">${phone.slug}</p>
          <button onclick="showPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show Details</button>
        
          
        </div>
      </div>
        
        `
        phoneContainer.appendChild(div);
    })
    //stop loader
    isToggleLooder(false);
}
const processData=(dataLimit)=>{
  isToggleLooder(true);
  const searchField= document.getElementById('input-field');
  const searchText= searchField.value;
  loadData(searchText,dataLimit);
}
    
document.getElementById('btn-search').addEventListener('click',function(){

  //spinner loader
  processData(10)
  
})

const isToggleLooder= loading=>{
  const loadingToggle= document.getElementById('toggle-loder');
  if(loading){
    loadingToggle.classList.remove('d-none');
  }else{
    loadingToggle.classList.add('d-none');

  }
}

document.getElementById('btn-show-all').addEventListener('click',function(){
  processData();
})

const showPhoneDetails=async id=>{
  const url=`https://openapi.programming-hero.com/api/phone/${id}`
  const res= await fetch(url);
  const data = await res.json();
  displayPhoneDetails(data.data);
}

const displayPhoneDetails=phone=>{
  console.log(phone)

  const phoneDetailsModalLabel= document.getElementById('phoneDetailsModalLabel');
  phoneDetailsModalLabel.innerHTML=phone.name;
  const phoneDetails= document.getElementById('phone-details');
  phoneDetails.innerHTML=`
    <p>Release Date:${phone.releaseDate
    }</p>

  `

}

// event handler enter key button 
document.getElementById('input-field').addEventListener('keypress', function (e) {
 
  if (e.key === 'Enter') {
    // code for enter
    processData(10)
  }
});


loadData('apple');