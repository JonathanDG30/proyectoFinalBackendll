const epiRick=async(epi)=>{
    let url="https://rickandmortyapi.com/api/episode?page="+epi;
    const api= await fetch(url);
    const data= await api.json();
    console.log(data);
    divRes=document.querySelector("#resultado");
    divRes.innerHTML=""
    data.results.map(item=>{
        divItem=document.createElement('div')
        divItem.innerHTML=`
        <div class="card" style="width: 18rem;">
            
            <div class="card-body">
                <h5 class="card-title"><b>ID: </b>${item.id}</h5>
                <p class="card-text"><b>Nombre: </b>${item.name}</p>
                <p class="card-text"><b>Fecha de episodio: </b>${item.air_date}</p>
                <p class="card-text"><b>Episodio: </b>${item.episode}</p>
                
                
                
            </div>
        </div>
        `
        divRes.appendChild(divItem);
    })
}
epiRick(1)



