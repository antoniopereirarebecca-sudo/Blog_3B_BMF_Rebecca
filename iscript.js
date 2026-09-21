document.addEventListener("DOMContentLoaded", () => {
    prepararReacoes();
    prepararFiltro();
});

/*
 * Contador de curtidas e rejeições
 */
function prepararReacoes() {
    const artigos = document.querySelectorAll("article");

    artigos.forEach((artigo, indice) => {
        const botoes = artigo.querySelectorAll("button");

        /*
         * Cada article possui dois botões:
         * primeiro botão: curtida;
         * segundo botão: rejeição.
         */
        if (botoes.length < 2) {
            return;
        }

        const botaoCurtir = botoes[0];
        const botaoNaoCurtir = botoes[1];

        const contadorCurtidas =
            botaoCurtir.querySelector("span");

        const contadorNaoCurtidas =
            botaoNaoCurtir.querySelector("span");

        if (!contadorCurtidas || !contadorNaoCurtidas) {
            return;
        }

        const chaveCurtidas =
            `card-${indice + 1}-curtidas`;

        const chaveNaoCurtidas =
            `card-${indice + 1}-nao-curtidas`;

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

/*
 * Filtro das notícias pelas abas
 */
function prepararFiltro() {
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
