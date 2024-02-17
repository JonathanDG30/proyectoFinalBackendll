const locRick = async (loc) => {
    let url = "https://rickandmortyapi.com/api/location?page="+ loc;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    divRes=document.querySelector("#resultado");
    divRes.innerHTML=""
    data.results.map(item=>{
        divItem=document.createElement('div')
        divItem.innerHTML=`
        <div class="card" style="width: 18rem;">
            
            <div class="card-body">
                <h5 class="card-title"><b>Nombre: </b>${item.name}</h5>
                <p class="card-text"><b>Typo: </b>${item.type}</p>
                <p class="card-text"><b>Dimension: </b>${item.dimension}</p>
            </div>
        </div>
        `
        divRes.appendChild(divItem);
    })
}
locRick(1)
