const loadData=(searchText)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then (res => res.json())
    .then( data => showMeals(data.meals));
}

const showMeals=(meals)=>{
    //console.log(meals);
    const container= document.getElementById('meals-container');
    container.innerHTML='';
    meals.forEach(meal =>{
        const div= document.createElement('div')
        div.classList.add('col')
       // console.log(meal)
        div.innerHTML=`
        <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <button onclick="loadMealDetail2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealModal">
            Details...
     </button>
      </div>
      
        
        `
        container.appendChild(div)
    })
}

const searchMeals=()=>{
    const searchField= document.getElementById('input-fields').value;
    console.log(searchField);
    loadData(searchField)
}
const loadMealDetail= idMeal=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]));
}

//async await
const loadMealDetail2 = async(idMeal)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    try{
        const res= await fetch(url)
        const data = await res.json();
        displayMealDetails(data.meals[0]);
    }
    catch(error){
        console.log(error)
    }
    
}




const displayMealDetails = meal =>{
    console.log(meal)
    document.getElementById('mealModalLabel').innerHTML=meal.strMeal;
    const mealDetailsBody= document.getElementById('mealDetailsBody');
     mealDetailsBody.innerText=meal.strInstructions;

}

loadData('meat');


