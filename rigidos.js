function normalizarTexto(texto) {
    return texto.trim().toUpperCase();
}

// Configuração de setores
const setoresConfig = {
    [normalizarTexto("CONSERVAS")]: {
        elemento: "Controle de materiais rígidos e cortantes - CONSERVAS",
        tabela: "Tabela itens conserva"
    },
    [normalizarTexto("CHOCOLATE")]: {
        elemento: "Controle de materiais rígidos e cortantes - CHOCOLATE",
        tabela: "Tabela de itens - CHOCOLATE"
    },
    [normalizarTexto("FRUTAS E POLPAS")]: {
        elemento: "FRUTA E POLPA",
        tabela: "Tabela de itens - FRUTA E POLPA"
    },
    [normalizarTexto("PESAGEM")]: {
        elemento: "SALA DE PESAGEM",
        tabela: "Tabela de itens - SALA DE PESAGEM"
    },
    [normalizarTexto("LEITE")]: {
        elemento: "Controle de materiais rígidos e cortantes - LEITE",
        tabela: "Tabela de itens - LEITE"
    },
    [normalizarTexto("ENVASE")]: {
        elemento: "Controle de materiais rígidos e cortantes - ENVASE",
        tabela: "Tabela de itens - ENVASE"
    },
    [normalizarTexto("EMBALAGEM")]: {
        elemento: "Controle de materiais rígidos e cortantes - EMBALAGEM",
        tabela: "Tabela de itens - EMBALAGEM"
    },
    [normalizarTexto("SALAS DE REPROCESSO")]: {
        elemento: "Controle de materiais rígidos e cortantes - SALA DE REPROCESSO",
        tabela: "Tabela de itens - SALA DE REPROCESSO"
    },
    [normalizarTexto("PESAGEM CHOCOLATE")]: {
        elemento: "Controle de materiais rígidos e cortantes - PESAGEM CHOCOLATE",
        tabela: "Tabela de itens - PESAGEM CHOCOLATE"
    },
    [normalizarTexto("PESAGEM CONSERVAS")]: {
        elemento: "Controle de materiais rígidos e cortantes - PESAGEM CONSERVAS",
        tabela: "Tabela de itens - PESAGEM CONSERVAS"
    }
};

// Função para alternar exibição dos elementos
function atualizarElementos(setorSelecionado) {
    Object.keys(setoresConfig).forEach(setor => {
        const elemento = setoresConfig[setor].elemento;
        const tabela = setoresConfig[setor].tabela;

        console.log(`Processando setor: ${setor} | Elemento: ${elemento} | Tabela: ${tabela}`);

        // Simula manipulação dos elementos (substitua pelo que precisa fazer)
        if (setor === normalizarTexto(setorSelecionado)) {
            console.log(`Exibindo: ${elemento} e ${tabela}`);
        } else {
            console.log(`Ocultando: ${elemento} e ${tabela}`);
        }
    });
}

// Simula evento de mudança de seleção (substitua pelo real evento)
function simularMudanca() {
    const setorSelecionado = "CHOCOLATE"; // Simulação de valor alterado no sistema
    console.log(`Setor selecionado: ${setorSelecionado}`);
    atualizarElementos(setorSelecionado);
}

// Executa a simulação quando a página carrega
document.addEventListener("DOMContentLoaded", simularMudanca);
