<script>
function normalizarTexto(texto) {
    return texto.trim().toUpperCase();
}

// Configuração de setores e suas tabelas
const setoresConfig = {
    "CONSERVAS": { elementoId: "controle-conservas", tabelaId: "tabela-itens-conservas" },
    "CHOCOLATE": { elementoId: "controle-chocolate", tabelaId: "tabela-itens-chocolate" },
    "FRUTAS E POLPAS": { elementoId: "controle-frutas-polpas", tabelaId: "tabela-itens-frutas-polpas" },
    "PESAGEM": { elementoId: "controle-pesagem", tabelaId: "tabela-itens-pesagem" },
    "LEITE": { elementoId: "controle-leite", tabelaId: "tabela-itens-leite" },
    "ENVASE": { elementoId: "controle-envase", tabelaId: "tabela-itens-envase" },
    "EMBALAGEM": { elementoId: "controle-embalagem", tabelaId: "tabela-itens-embalagem" },
    "SALAS DE REPROCESSO": { elementoId: "controle-sala-reprocesso", tabelaId: "tabela-itens-sala-reprocesso" },
    "PESAGEM CHOCOLATE": { elementoId: "controle-pesagem-chocolate", tabelaId: "tabela-itens-pesagem-chocolate" },
    "PESAGEM CONSERVAS": { elementoId: "controle-pesagem-conservas", tabelaId: "tabela-itens-pesagem-conservas" }
};

// Função para ocultar todas as tabelas
function ocultarTodosOsSetores() {
    console.log("Ocultando todos os setores...");
    Object.values(setoresConfig).forEach(({ elementoId, tabelaId }) => {
        let elemento = document.getElementById(elementoId);
        let tabela = document.getElementById(tabelaId);

        if (elemento) {
            elemento.style.display = "none";
            console.log(`Ocultado: ${elementoId}`);
        }

        if (tabela) {
            tabela.style.display = "none";
            console.log(`Ocultado: ${tabelaId}`);
        }
    });
}

// Função para exibir o setor correto
function atualizarElementos(setorSelecionado) {
    ocultarTodosOsSetores(); // Primeiro, esconde tudo

    let setorNormalizado = normalizarTexto(setorSelecionado);
    let setor = setoresConfig[setorNormalizado];

    if (setor) {
        let elemento = document.getElementById(setor.elementoId);
        let tabela = document.getElementById(setor.tabelaId);

        console.log(`Exibindo setor: ${setorSelecionado}`);

        if (elemento) {
            elemento.style.display = "block";
            console.log(`Exibindo: ${setor.elementoId}`);
        }

        if (tabela) {
            tabela.style.display = "block";
            console.log(`Exibindo: ${setor.tabelaId}`);
        }
    } else {
        console.warn(`Setor "${setorSelecionado}" não encontrado!`);
    }
}

// Simula evento de mudança de setor
function simularMudanca() {
    const setorSelecionado = "CHOCOLATE"; // Exemplo para teste
    console.log(`Setor selecionado: ${setorSelecionado}`);
    atualizarElementos(setorSelecionado);
}

// Executa a simulação quando a página carrega
document.addEventListener("DOMContentLoaded", simularMudanca);
</script>
