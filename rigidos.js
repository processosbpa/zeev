function elementosId() {
    const pai = document.querySelector('[xname="inpsetorASerVerificado"]');
    const captionsParaOcultar = {
        CONSERVAS: "Tabela itens conserva",
        CHOCOLATE: "Tabela de itens - CHOCOLATE",
        "FRUTAS E POLPAS": "Tabela de itens - FRUTA E POLPA",
        PESAGEM: "Tabela de itens - SALA DE PESAGEM",
        LEITE: "Tabela de itens - LEITE",
        ENVASE: "Tabela de itens - ENVASE",
        EMBALAGEM: "Tabela de itens - EMBALAGEM",
        "SALAS DE REPROCESSO": "Tabela de itens - SALA DE REPROCESSO",
        "PESAGEM CHOCOLATE": "Tabela de itens - PESAGEM CHOCOLATE",
        "PESAGEM CONSERVAS": "Tabela de itens - PESAGEM CONSERVAS"
    };

    document.querySelectorAll("table caption").forEach(caption => {
        const tabela = caption.closest("table");
        const captionText = caption.textContent.trim();

        // Verifica se a legenda da tabela está no objeto captionsParaOcultar
        if (captionsParaOcultar[pai.value] === captionText) {
            tabela.style.display = "table"; // Exibe a tabela
        } else if (Object.values(captionsParaOcultar).includes(captionText)) {
            tabela.style.display = "none"; // Oculta as outras tabelas
        }
    });
}

function tabelasId() {
    const pai = document.querySelector('[xname="inpsetorASerVerificado"]');
    const elements = {
        CONSERVAS: document.getElementById("Controle de materiais rígidos e cortantes - CONSERVAS"),
        CHOCOLATE: document.getElementById("Controle de materiais rígidos e cortantes - CHOCOLATE"),
        "FRUTAS E POLPAS": document.getElementById("FRUTA E POLPA"),
        PESAGEM: document.getElementById("SALA DE PESAGEM"),
        LEITE: document.getElementById("Controle de materiais rígidos e cortantes - LEITE"),
        ENVASE: document.getElementById("Controle de materiais rígidos e cortantes - ENVASE"),
        EMBALAGEM: document.getElementById("Controle de materiais rígidos e cortantes - EMBALAGEM"),
        "SALAS DE REPROCESSO": document.getElementById("Controle de materiais rígidos e cortantes - SALA DE REPROCESSO"),
        "PESAGEM CHOCOLATE": document.getElementById("Controle de materiais rígidos e cortantes - PESAGEM CHOCOLATE"),
        "PESAGEM CONSERVAS": document.getElementById("Controle de materiais rígidos e cortantes - PESAGEM CONSERVAS")
    };

    const toggleElement = (element, show) => {
        element.style.display = show ? "block" : "none";
        element.disabled = !show;
    };

    Object.keys(elements).forEach(key => toggleElement(elements[key], key === pai.value));
}

// Função para executar primeiro, depois de 15 segundos executa a segunda função
function executarFuncoesSequenciais() {
    // Executa a primeira função
    elementosId();

    // Define um timeout de 15 segundos para executar a segunda função
    setTimeout(() => {
        tabelasId();
    }, 15000); // 15000 milissegundos = 15 segundos
}

// Chama a função principal para executar as funções em sequência
executarFuncoesSequenciais();
