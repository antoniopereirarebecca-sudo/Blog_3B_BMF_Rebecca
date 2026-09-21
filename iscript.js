document.addEventListener("DOMContentLoaded", () => {
    prepararReacoes();
    prepararAnimacaoCards();
    criarBotaoTopo();
});

function prepararReacoes() {
    const artigos = document.querySelectorAll("article");

    artigos.forEach((artigo, indice) => {
        const botoes = artigo.querySelectorAll("button");

        if (botoes.length < 2) {
            return;
        }

        const botaoUm = botoes[0];
        const botaoDois = botoes[1];

        const contadorBotaoUm = botaoUm.querySelector("span");
        const contadorBotaoDois = botaoDois.querySelector("span");

        const idCard = `card-${indice + 1}`;

        const chaveBotaoUm = `${idCard}-botaoUm`;
        const chaveBotaoDois = `${idCard}-botaoDois`;

        let curtidas = Number(localStorage.getItem(chaveBotaoUm)) || 0;
        let rejeicoes = Number(localStorage.getItem(chaveBotaoDois)) || 0;

        contadorBotaoUm.textContent = curtidas;
        contadorBotaoDois.textContent = rejeicoes;

        botaoUm.addEventListener("click", () => {
            curtidas++;

            contadorBotaoUm.textContent = curtidas;
            localStorage.setItem(chaveBotaoUm, curtidas);
        });

        botaoDois.addEventListener("click", () => {
            rejeicoes++;

            contadorBotaoDois.textContent = rejeicoes;
            localStorage.setItem(chaveBotaoDois, rejeicoes);
        });
    });
}

function prepararAnimacaoCards() {
    const artigos = document.querySelectorAll("article");

    artigos.forEach((artigo) => {
        artigo.style.transition =
            "transform 0.3s ease, box-shadow 0.3s ease";

        artigo.addEventListener("mouseenter", () => {
            artigo.style.transform = "scale(1.02)";
            artigo.style.boxShadow =
                "4px 4px 15px rgba(0, 0, 0, 0.4)";
        });

        artigo.addEventListener("mouseleave", () => {
            artigo.style.transform = "scale(1)";
            artigo.style.boxShadow =
                "2px 2px 10px rgba(0, 0, 0, 0.3)";
        });
    });
}

function criarBotaoTopo() {
    const botaoTopo = document.createElement("button");

    botaoTopo.textContent = "Voltar ao topo";
    botaoTopo.id = "botaoTopo";

    botaoTopo.style.display = "none";
    botaoTopo.style.position = "fixed";
    botaoTopo.style.bottom = "20px";
    botaoTopo.style.right = "20px";
    botaoTopo.style.padding = "10px 15px";
    botaoTopo.style.cursor = "pointer";
    botaoTopo.style.border = "none";
    botaoTopo.style.borderRadius = "8px";
    botaoTopo.style.backgroundColor = "#43ABAB";
    botaoTopo.style.color = "white";

    document.body.appendChild(botaoTopo);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            botaoTopo.style.display = "block";
        } else {
            botaoTopo.style.display = "none";
        }
    });

    botaoTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
