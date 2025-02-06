document.addEventListener("DOMContentLoaded", () => {
    const pai = document.querySelector('[xname="inpsetorASerVerificado"]');

    // Mapeamento dos itens (tabelas e IDs a serem exibidos)
    const elementos = {
        CONSERVAS: {
            tabela: "Tabela de itens - PESAGEM CONSERVAS",
            elemento: "Controle de materiais rígidos e cortantes - PESAGEM CONSERVAS"
        },
        CHOCOLATE: {
            tabela: "Tabela de itens - CHOCOLATE",
            elemento: "Controle de materiais rígidos e cortantes - CHOCOLATE"
        },
        "FRUTAS E POLPAS": {
            tabela: "Tabela de itens - FRUTA E POLPA",
            elemento: "FRUTA E POLPA"
        },
        PESAGEM: {
            tabela: "Tabela de itens - SALA DE PESAGEM",
            elemento: "SALA DE PESAGEM"
        },
        LEITE: {
            tabela: "Tabela de itens - LEITE",
            elemento: "Controle de materiais rígidos e cortantes - LEITE"
        },
        ENVASE: {
            tabela: "Tabela de itens - ENVASE",
            elemento: "Controle de materiais rígidos e cortantes - ENVASE"
        },
        "PESAGEM CHOCOLATE": {
            tabela: "Tabela de itens - PESAGEM CHOCOLATE",
            elemento: "Controle de materiais rígidos e cortantes - PESAGEM CHOCOLATE"
        },
        "PESAGEM CONSERVAS": {
            tabela: "Tabela de itens - PESAGEM CONSERVAS",
            elemento: "Controle de materiais rígidos e cortantes - PESAGEM CONSERVAS"
        }
    };

    // Função para mostrar ou ocultar os elementos e tabelas
    const atualizarExibicao = () => {
        const valorSelecionado = pai.value;
        console.log("Valor selecionado:", valorSelecionado);

        // Itera sobre cada item no mapeamento e aplica a lógica
        for (const key in elementos) {
            const { tabela, elemento } = elementos[key];

            // Seleciona os elementos e tabelas pelo ID
            const elElemento = document.getElementById(elemento);
            const elTabela = Array.from(document.querySelectorAll("table caption"))
                                    .find(caption => caption.textContent.trim() === tabela)
                                    ?.closest("table");

            if (valorSelecionado === key) {
                // Exibe o elemento e a tabela se o valor selecionado for igual à chave
                if (elElemento) {
                    elElemento.style.display = "block";
                    elElemento.disabled = false;
                }
                if (elTabela) {
                    elTabela.style.display = "table";
                }
            } else {
                // Oculta o elemento e a tabela caso contrário
                if (elElemento) {
                    elElemento.style.display = "none";
                    elElemento.disabled = true;
                }
                if (elTabela) {
                    elTabela.style.display = "none";
                }
            }
        }
    };

    // Inicializa a função ao carregar a página
    atualizarExibicao();

    // Adiciona evento para atualizar a exibição sempre que o seletor mudar
    pai.addEventListener("change", atualizarExibicao);
});
