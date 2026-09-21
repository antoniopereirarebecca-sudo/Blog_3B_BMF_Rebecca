document.addEventListener("DOMContentLoaded", () => {
    prepararReacoes();
    prepararAbas();
    prepararAnimacaoCards();
    criarBotaoTopo();
});

/* Contador de curtidas e rejeições */
function prepararReacoes() {
    const artigos = document.querySelectorAll("article");

    artigos.forEach((artigo, indice) => {
        const botaoCurtir = artigo.querySelector(".botao-curtir");
        const botaoNaoCurtir = artigo.querySelector(".botao-nao-curtir");

        if (!botaoCurtir || !botaoNaoCurtir) {
            return;
        }

        const contadorCurtidas =
            botaoCurtir.querySelector("span");

        const contadorNaoCurtidas =
            botaoNaoCurtir.querySelector("span");

        const idArtigo = `artigo-${indice + 1}`;

        const chaveCurtidas = `${idArtigo}-curtidas`;
        const chaveNaoCurtidas = `${idArtigo}-nao-curtidas`;

        let curtidas =
            Number(localStorage.getItem(chaveCurtidas)) || 0;

        let naoCurtidas =
            Number(localStorage.getItem(chaveNaoCurtidas)) || 0;

        contadorCurtidas.textContent = curtidas;
        contadorNaoCurtidas.textContent = naoCurtidas;

        botaoCurtir.addEventListener("click", () => {
            curtidas++;

            contadorCurtidas.textContent = curtidas;

            localStorage.setItem(
                chaveCurtidas,
                curtidas
            );
        });

        botaoNaoCurtir.addEventListener("click", () => {
            naoCurtidas++;

            contadorNaoCurtidas.textContent = naoCurtidas;

            localStorage.setItem(
                chaveNaoCurtidas,
                naoCurtidas
            );
        });
    });
}

/* Sistema de abas */
function prepararAbas() {
    const abas = document.querySelectorAll(".aba");
    const artigos = document.querySelectorAll("article");

    abas.forEach((aba) => {
        aba.addEventListener("click", () => {
            const categoriaEscolhida =
                aba.dataset.categoria;

            abas.forEach((item) => {
                item.classList.remove("ativa");
            });

            aba.classList.add("ativa");

            artigos.forEach((artigo) => {
                const categoriaArtigo =
                    artigo.dataset.categoria;

                if (
                    categoriaEscolhida === "todos" ||
                    categoriaArtigo === categoriaEscolhida
                ) {
                    artigo.style.display = "flex";
                } else {
                    artigo.style.display = "none";
                }
            });
        });
    });
}

/* A animação dos cards é feita pelo CSS */
function prepararAnimacaoCards() {
    const artigos = document.querySelectorAll("article");

    artigos.forEach((artigo) => {
        artigo.style.transition =
            "transform 0.3s ease, box-shadow 0.3s ease";
    });
}

/* Botão voltar ao topo */
function criarBotaoTopo() {
    const botaoTopo = document.createElement("button");

    botaoTopo.textContent = "Voltar ao topo";
    botaoTopo.id = "botaoTopo";

    botaoTopo.style.display = "none";
    botaoTopo.style.position = "fixed";
    botaoTopo.style.bottom = "20px";
    botaoTopo.style.right = "20px";
    botaoTopo.style.padding = "10px 15px";
    botaoTopo.style.border = "none";
    botaoTopo.style.borderRadius = "8px";
    botaoTopo.style.backgroundColor = "#23636E";
    botaoTopo.style.color = "white";
    botaoTopo.style.cursor = "pointer";
    botaoTopo.style.zIndex = "1000";

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
