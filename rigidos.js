document.addEventListener("DOMContentLoaded", () => {
    const pai = document.querySelector('[xname="inpsetorASerVerificado"]');

    if (!pai) {
        console.error("Elemento pai não encontrado!");
        return;
    }

    // Mapeamento de elementos para exibição
    const elements = {
        CONSERVAS: document.getElementById("Controle de materiais rígidos e cortantes - CONSERVAS"),
        CHOCOLATE: document.getElementById("Controle de materiais rígidos e cortantes - CHOCOLATE"),
        "FRUTAS E POLPAS": document.getElementById("FRUTA E POLPA"),
        PESAGEM: document.getElementById("SALA DE PESAGEM"),
        LEITE: document.getElementById("Controle de materiais rígidos e cortantes - LEITE"),
        ENVASE: document.getElementById("Controle de materiais rígidos e cortantes - ENVASE"),
        EMBALAGEM: document.getElementById("Controle de materiais rígidos e cortantes - EMBALAGEM"),
        SALA DE REPROCESSO: document.getElementById("Controle de materiais rígidos e cortantes - SALA DE REPROCESSO"),
        "PESAGEM CHOCOLATE": document.getElementById("Controle de materiais rígidos e cortantes - PESAGEM CHOCOLATE"),
        "PESAGEM CONSERVAS": document.getElementById("Controle de materiais rígidos e cortantes - PESAGEM CONSERVAS")
    };

    // Mapeamento de legendas para ocultação de tabelas
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

    // Função para exibir ou ocultar elementos
    const atualizarElementos = () => {
        const selectedValue = pai.value;
        console.log("Atualizando elementos para:", selectedValue);

        Object.keys(elements).forEach(key => {
            const element = elements[key];
            if (!element) {
                console.warn(`Elemento "${key}" não encontrado no DOM.`);
                return;
            }
            element.style.display = key === selectedValue ? "block" : "none";
            element.disabled = key !== selectedValue;
        });
    };

    // Função para exibir ou ocultar tabelas
    const atualizarTabelas = () => {
        const selectedValue = pai.value;
        console.log("Atualizando tabelas para:", selectedValue);

        document.querySelectorAll("table caption").forEach(caption => {
            const tabela = caption.closest("table");
            const deveMostrar = captionsParaOcultar[selectedValue] === caption.textContent.trim();
            tabela.style.display = deveMostrar ? "table" : "none";
        });
    };

    // Função central que garante a execução em sequência sem interrupção
    const atualizarTudo = () => {
        atualizarElementos();  // Primeiro, ajusta a exibição dos elementos
        setTimeout(atualizarTabelas, 0);  // Em seguida, executa a atualização das tabelas sem bloquear a execução
    };

    // Chama a função ao carregar a página
    atualizarTudo();

    // Adiciona evento para atualizar sempre que o seletor mudar
    pai.addEventListener("change", atualizarTudo);
});
