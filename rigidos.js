function normalizarTexto(texto) {
    return texto.trim().toUpperCase();
}

// Configuração de setores
const setoresConfig = {
    [normalizarTexto("CONSERVAS")]: {
        elementoId: "controle-conservas",
        tabelaId: "tabela-itens-conservas"
    },
    [normalizarTexto("CHOCOLATE")]: {
        elementoId: "controle-chocolate",
        tabelaId: "tabela-itens-chocolate"
    },
    [normalizarTexto("FRUTAS E POLPAS")]: {
        elementoId: "controle-frutas-polpas",
        tabelaId: "tabela-itens-frutas-polpas"
    },
    [normalizarTexto("PESAGEM")]: {
        elementoId: "controle-pesagem",
        tabelaId: "tabela-itens-pesagem"
    },
    [normalizarTexto("LEITE")]: {
        elementoId: "controle-leite",
        tabelaId: "tabela-itens-leite"
    },
    [normalizarTexto("ENVASE")]: {
        elementoId: "controle-envase",
        tabelaId: "tabela-itens-envase"
    },
    [normalizarTexto("EMBALAGEM")]: {
        elementoId: "controle-embalagem",
        tabelaId: "tabela-itens-embalagem"
    },
    [normalizarTexto("SALAS DE REPROCESSO")]: {
        elementoId: "controle-sala-reprocesso",
        tabelaId: "tabela-itens-sala-reprocesso"
    },
    [normalizarTexto("PESAGEM CHOCOLATE")]: {
        elementoId: "controle-pesagem-chocolate",
        tabelaId: "tabela-itens-pesagem-chocolate"
    },
    [normalizarTexto("PESAGEM CONSERVAS")]: {
        elementoId: "controle-pesagem-conservas",
        tabelaId: "tabela-itens-pesagem-conservas"
    }
};

// Função para ocultar todos os setores
function ocultarTodosOsSetores() {
    Object.values(setoresConfig).forEach(({ elementoId, tabelaId }) => {
        let elemento = document.getElementById(elementoId);
        let tabela = document.getElementById(tabelaId);
        if (elemento) elemento.style.display = "none";
        if (tabela) tabela.style.display = "none";
    });
}

// Função para atualizar exibição
function atualizarElementos(setorSelecionado) {
    ocultarTodosOsSetores(); // Primeiro, esconde todos

    let setorNormalizado = normalizarTexto(setorSelecionado);
    let setor = setoresConfig[setorNormalizado];

    if (setor) {
        let elemento = document.getElementById(setor.elementoId);
        let tabela = document.getElementById(setor.tabelaId);

        if (elemento) elemento.style.display = "block";
        if (tabela) tabela.style.display = "block";
    } else {
        console.warn(`Setor "${setorSelecionado}" não encontrado.`);
    }
}

// Simula evento de mudança de seleção (substitua pelo real evento)
function simularMudanca() {
    const setorSelecionado = "CHOCOLATE"; // Simulação
    atualizarElementos(setorSelecionado);
}

// Executa a simulação quando a página carrega
document.addEventListener("DOMContentLoaded", simularMudanca);
