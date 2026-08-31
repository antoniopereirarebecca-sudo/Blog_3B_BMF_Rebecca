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
        const contadorBotaoDOIS = botaoDOIS.querySelector("span");

         const idCard = `card-${indice + 1}`;

         const chavebotaoUM = `${idCard}-botaoUM`;
         const chavebotaoDOIS = `${idCard}-botaoDOIS`;

        let UM = Number(localStorage.getItem(chavebotaoUM)) ||0;
        let DOIS = Number(localStorage.getItem(chavebotaoDOIS)) ||0;
        
        contadorBotaoUM.textContent = UM;
        contadorBotaoDOIS.textContent = DOIS;

        botaoUM.addEventListener("click", () =>{
            UM++;
            contadorBotaoUM.textContent = UM;

            localStorage.setItem(
                chavebotaoUM,UM
            );
        });
        botaoDOIS.addEventListener("click", () =>{
            DOIS++;
            contadorBotaoDOIS.textContent = DOIS;

            localStorage.setItem(
                chavebotaoDOIS,DOIS
            );
        });
    })


}