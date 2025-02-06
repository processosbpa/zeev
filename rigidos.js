<script>
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

    // Função para controlar a exibição dos elementos
    const atualizarElementos = () => {
        Object.keys(elements).forEach(key => {
            const element = elements[key];
            if (!element) return;
            element.style.display = key === pai.value ? "block" : "none";
            element.disabled = key !== pai.value;
        });
    };

    // Função para controlar a exibição das tabelas
    const atualizarTabelas = () => {
        document.querySelectorAll("table caption").forEach(caption => {
            const tabela = caption.closest("table");
            if (!tabela) return;
            tabela.style.display = captionsParaOcultar[pai.value] === caption.textContent.trim() ? "table" : "none";
        });
    };

    // Executa ambas as funções no carregamento da página
    atualizarElementos();
    atualizarTabelas();

    // Adiciona evento para atualizar ao mudar a seleção
    pai.addEventListener("change", () => {
        atualizarElementos();
        atualizarTabelas();
    });
});
</script>
