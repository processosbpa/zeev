document.addEventListener("DOMContentLoaded", () => {
    var captions = document.querySelectorAll("table caption");
    const pai = document.querySelector('[xname="inpsetorASerVerificado"]');
    const elements = {
        CONSERVAS: document.getElementById("Controle de materiais rígidos e cortantes - CONSERVAS"),
        CHOCOLATE: document.getElementById("Controle de materiais rígidos e cortantes - CHOCOLATE"),
        FRUTAS E POLPAS: document.getElementById("FRUTA E POLPA"),
        PESAGEM: document.getElementById("SALA DE PESAGEM"),
        LEITE: document.getElementById("Controle de materiais rígidos e cortantes - LEITE"),
        ENVASE: document.getElementById("Controle de materiais rígidos e cortantes - ENVASE"),
        EMBALAGEM: document.getElementById("Controle de materiais rígidos e cortantes - EMBALAGEM"),
        SALAS DE REPROCESSO: document.getElementById("Controle de materiais rígidos e cortantes - SALA DE REPROCESSOS"),
        PESAGEM CHOCOLATE: document.getElementById("Controle de materiais rígidos e cortantes - PESAGEM CHOCOLATE"),
        PESAGEM CONSERVAS: document.getElementById("Controle de materiais rígidos e cortantes - PESAGEM CONSERVAS")
    };
    const toggleElement = (element, show) => {
        element.style.display = show ? "block" : "none";
        element.disabled = !show;
    };
    Object.keys(elements).forEach(key => toggleElement(elements[key], key === pai.value));

    const captionsParaOcultar = {
        CONSERVAS: "Tabela itens conserva",
        CHOCOLATE: "Tabela de itens - CHOCOLATE",
        "FRUTAS E POLPAS": "Tabela de itens - FRUTA E POLPA",
        PESAGEM: "Tabela de itens - SALA DE PESAGEM",
        LEITE: "Tabela de itens - LEITE",
        ENVASE: "Tabela de itens - ENVASE",
        EMBALAGEM: "Tabela de itens - EMBALAGEM",
        SALAS DE REPROCESSO: "Tabela de itens - SALA DE REPROCESSOS",
        PESAGEM CHOCOLATE: "Tabela de itens - PESAGEM CHOCOLATE",
        PESAGEM CONSERVAS: "Tabela de itens - PESAGEM CONSERVAS"
    };
    document.querySelectorAll("table caption").forEach(caption => {
        const tabela = caption.closest("table");
        tabela.style.display = captionsParaOcultar[pai.value] === caption.textContent.trim() ? "table" : "none";
    });
});
