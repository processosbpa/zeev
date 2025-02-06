document.addEventListener("DOMContentLoaded", () => {
    const pai = document.querySelector('[xname="inpsetorASerVerificado"]');

    if (!pai) {
        console.error("Elemento pai não encontrado!");
        return;
    }

    // Normaliza os valores removendo espaços extras
    const normalize = (text) => text.trim().toUpperCase();

    // Configuração dos setores
    const setoresConfig = {
        [normalize("CONSERVAS")]: {
            elemento: "Controle de materiais rígidos e cortantes - CONSERVAS",
            tabela: "Tabela itens conserva"
        },
        [normalize("CHOCOLATE")]: {
            elemento: "Controle de materiais rígidos e cortantes - CHOCOLATE",
            tabela: "Tabela de itens - CHOCOLATE"
        },
        [normalize("FRUTAS E POLPAS")]: {
            elemento: "FRUTA E POLPA",
            tabela: "Tabela de itens - FRUTA E POLPA"
        },
        [normalize("PESAGEM")]: {
            elemento: "SALA DE PESAGEM",
            tabela: "Tabela de itens - SALA DE PESAGEM"
        },
        [normalize("LEITE")]: {
            elemento: "Controle de materiais rígidos e cortantes - LEITE",
            tabela: "Tabela de itens - LEITE"
        },
        [normalize("PESAGEM CHOCOLATE")]: {
            elemento: "Controle de materiais rígidos e cortantes - PESAGEM CHOCOLATE",
            tabela: "Tabela de itens - PESAGEM CHOCOLATE"
        },
        [normalize("PESAGEM CONSERVAS")]: {
            elemento: "Controle de materiais rígidos e cortantes - PESAGEM CONSERVAS",
            tabela: "Tabela de itens - PESAGEM CONSERVAS"
        }
    };

    // Esconde todos os elementos e tabelas
    function esconderTodos() {
        Object.values(setoresConfig).forEach(({ elemento, tabela }) => {
            const el = document.getElementById(elemento);
            const tab = [...document.querySelectorAll("table caption")].find(caption => normalize(caption.textContent) === normalize(tabela));

            if (el) {
                el.style.display = "none";
            }
            if (tab) {
                tab.closest("table").style.display = "none";
            }
        });
    }

    // Exibe apenas o elemento e tabela do setor selecionado
    function exibirSetor(setor) {
        const setorNormalizado = normalize(setor);
        if (!setoresConfig[setorNormalizado]) return;

        const { elemento, tabela } = setoresConfig[setorNormalizado];

        const el = document.getElementById(elemento);
        const tab = [...document.querySelectorAll("table caption")].find(caption => normalize(caption.textContent) === normalize(tabela));

        if (el) {
            el.style.display = "block";
            el.disabled = false;
        }
        if (tab) {
            tab.closest("table").style.display = "table";
        }
    }

    // Atualiza tudo em sequência
    function atualizarTudo() {
        esconderTodos();
        exibirSetor(pai.value);
    }

    // Chama a função ao carregar a página
    atualizarTudo();

    // Adiciona evento para atualizar ao mudar a seleção
    pai.addEventListener("change", atualizarTudo);
});
