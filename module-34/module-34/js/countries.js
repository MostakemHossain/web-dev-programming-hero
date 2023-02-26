const loadData= ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showData(data));
}

const showData=(countries)=>{
   // console.log(countries);
    const container= document.getElementById('all-countries');
    countries.forEach(country=>{
        //console.log(country)
        const div=document.createElement('div');
        div.classList.add('country');
        div.innerHTML=
        `
        <h1>Name : ${country.name.common}</h1>
        <h1>capital : ${country.capital ? country.capital[0]:"No name"}</h1>
        <button onClick="displayCountryDetails('${country.cca2}')">Details</button>
        `
        container.appendChild(div);

    })
}
const displayCountryDetails= (code)=>{
    const URL=`https://restcountries.com/v3.1/alpha/${code}`
    fetch(URL)
    .then(res => res.json())
    .then (data => countryDetails(data[0]));
}

const countryDetails= country=>{
    const container= document.getElementById('country-details');
    container.innerHTML=`
        <h2>Name: ${country.name.common}</h2>
        <img src="${country.flags.png}" alt="">
    `

}

loadData();