const loadQuote = ()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => showData(data));
};

const showData = (quote)=>{
    const blockQuote= document.getElementById('quote');
    blockQuote.innerHTML=quote.quote;
    
}

loadQuote();