document.addEventListener("DOMContentLoaded", () => {
        var captions = document.querySelectorAll("table caption");
      const pai = document.querySelector('[xname="inpsetorASerVerificado"]');
      const elements = {
        CONSERVAS: document.getElementById("Controle de materiais rígidos e cortantes - CONSERVAS"),
        CHOCOLATE: document.getElementById("Controle de materiais rígidos e cortantes - CHOCOLATE"),
        "FRUTAS E POLPAS": document.getElementById("FRUTA E POLPA"),
        PESAGEM: document.getElementById("SALA DE PESAGEM"),
        LEITE: document.getElementById("Controle de materiais rígidos e cortantes - LEITE"),
        ENVASE: document.getElementById("Controle de materiais rígidos e cortantes - ENVASE"),
        EMBALAGEM: document.getElementById("Controle de materiais rígidos e cortantes - EMBALAGEM"),
        "SALA DE REPROCESSO": document.getElementById("Controle de materiais rígidos e cortantes - SALA DE REPROCESSO"),
        "PESAGEM CHOCOLATE": document.getElementById("Controle de materiais rígidos e cortantes - PESAGEM CHOCOLATE"),
        "PESAGEM CONSERVAS": document.getElementById("Controle de materiais rígidos e cortantes - PESAGEM CONSERVAS")
      };
      const toggleElement = (element, show) => {
        element.style.display = show ? "block" : "none";
        element.disabled = !show;
      };
      Object.keys(elements).forEach(key => toggleElement(elements[key], key === pai.value));
});
