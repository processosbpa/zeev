document.addEventListener("DOMContentLoaded", () => {
    const pai = document.querySelector('[xname="inpsetorASerVerificado"]');

    if (!pai) {
        console.error("Elemento pai não encontrado!");
        return;
    }

    // Associa nomes de setores com IDs de elementos e tabelas
    const setoresConfig = {
        CONSERVAS: {
            elemento: "Controle de materiais rígidos e cortantes - CONSERVAS",
            tabela: "Tabela itens conserva"
        },
        CHOCOLATE: {
            elemento: "Controle de materiais rígidos e cortantes - CHOCOLATE",
            tabela: "Tabela de itens - CHOCOLATE"
        },
        "FRUTAS E POLPAS": {
            elemento: "FRUTA E POLPA",
            tabela: "Tabela de itens - FRUTA E POLPA"
        },
        PESAGEM: {
            elemento: "SALA DE PESAGEM",
            tabela: "Tabela de itens - SALA DE PESAGEM"
        },
        LEITE: {
            elemento: "Controle de materiais rígidos e cortantes - LEITE",
            tabela: "Tabela de itens - LEITE"
        },
        ENVASE: {
            elemento: "Controle de materiais rígidos e cortantes - ENVASE",
            tabela: "Tabela de itens - ENVASE"
        },
        EMBALAGEM: {
            elemento: "Controle de materiais rígidos e cortantes - EMBALAGEM",
            tabela: "Tabela de itens - EMBALAGEM"
        },
        "SALAS DE REPROCESSO": {
            elemento: "Controle de materiais rígidos e cortantes - SALA DE REPROCESSO",
            tabela: "Tabela de itens - SALA DE REPROCESSO"
        },
        "PESAGEM CHOCOLATE": {
            elemento: "Controle de materiais rígidos e cortantes - PESAGEM CHOCOLATE",
            tabela: "Tabela de itens - PESAGEM CHOCOLATE"
        },
        "PESAGEM CONSERVAS": {
            elemento: "Controle de materiais rígidos e cortantes - PESAGEM CONSERVAS",
            tabela: "Tabela de itens - PESAGEM CONSERVAS"
        }
    };

    // Esconde todos os elementos e tabelas
    function esconderTodos() {
        Object.values(setoresConfig).forEach(({ elemento, tabela }) => {
            const el = document.getElementById(elemento);
            const tab = [...document.querySelectorAll("table caption")].find(caption => caption.textContent.trim() === tabela);

            if (el) {
                el.style.display = "none";
                el.disabled = true;
            }
            if (tab) {
                tab.closest("table").style.display = "none";
            }
        });
    }

    // Exibe apenas o elemento e tabela do setor selecionado
    function exibirSetor(setor) {
        if (!setoresConfig[setor]) return;

        const { elemento, tabela } = setoresConfig[setor];

        const el = document.getElementById(elemento);
        const tab = [...document.querySelectorAll("table caption")].find(caption => caption.textContent.trim() === tabela);

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
