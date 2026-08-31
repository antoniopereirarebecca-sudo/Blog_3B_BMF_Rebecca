document.addEventListener("DOMContentLoaded",() =>{
prepararReacoes();
prepararAnimacaoCards();
criarBotaoTopo();
})


function prepararReacoes() {
    const artigos = document.querySelectorAll("article");

    artigos.forEach((artigo, indice) => {

        const botoes = artigo.querySelectorAll("button");

        if(botoes.leght < 2){
            return; 
        } 

        const botaoUM = butoes[0];
        const botaoDOIS = botoes[1];

        const contadorBotaoUM = botaoUM.querySelector("span");
        

        })
}