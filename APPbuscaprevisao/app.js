function DadosTela(dados){
    console.log(dados)
    document.querySelector('.titulo-cidade').innerHTML = "Tempo em" + dados.name
    document.querySelector('.graus').innerHTML = Math.floor(dados.main.temp) + "° C"
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.umidade').innerHTML = "umidade é" + " " + dados.main.humidity + "°"
    document.querySelector('.previsao-tempo').innerHTML = dados.weather[0].description 

}



const key = "9121d34f33148a91ffe1b36280e015da"
async function BuscarDados(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json());
    DadosTela(dados)
}





function CliqueBotao(){

    const cidade = document.querySelector('.input-cidade').value
    BuscarDados(cidade)

}