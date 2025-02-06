document.addEventListener("DOMContentLoaded", () => {
    const pai = document.querySelector('[xname="inpsetorASerVerificado"]');

    if (!pai) {
        console.error("Elemento pai não encontrado!");
        return;
    }

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

    // Verificar se os elementos foram encontrados
    Object.keys(elements).forEach(key => {
        if (!elements[key]) {
            console.warn(`Elemento com ID "${key}" não encontrado no DOM.`);
        }
    });

    // Função para controlar a exibição dos elementos
    const atualizarElementos = () => {
        Object.keys(elements).forEach(key => {
            const element = elements[key];
            if (!element) return;
            element.style.display = key === pai.value ? "block" : "none";
            element.disabled = key !== pai.value;
        });
    };

    // Executa a função para garantir que rode ao carregar a página
    atualizarElementos();

    // Adiciona evento para atualizar ao mudar a seleção
    pai.addEventListener("change", atualizarElementos);
});
