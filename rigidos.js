function elementosId() {
    var captions = document.querySelectorAll("table caption");
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
        tabela.style.display = captionsParaOcultar[pai.value] === caption.textContent.trim() ? "table" : "none";
    });
}
function tabelasId() {
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
<script>
document.addEventListener("DOMContentLoaded", () => {
    const pai = document.querySelector('[xname="inpsetorASerVerificado"]');
    const elementos = {
        CONSERVAS: {
            tabela: "Tabela itens conserva",
            elemento: "Controle de materiais rígidos e cortantes - CONSERVAS"
        },
        CHOCOLATE: {
            tabela: "Tabela de itens - CHOCOLATE",
            elemento: "Controle de materiais rígidos e cortantes - CHOCOLATE"
        },
        "FRUTAS E POLPAS": {
            tabela: "Tabela de itens - FRUTA E POLPA",
            elemento: "FRUTA E POLPA"
        },
        PESAGEM: {
            tabela: "Tabela de itens - SALA DE PESAGEM",
            elemento: "SALA DE PESAGEM"
        },
        LEITE: {
            tabela: "Tabela de itens - LEITE",
            elemento: "Controle de materiais rígidos e cortantes - LEITE"
        },
        ENVASE: {
            tabela: "Tabela de itens - ENVASE",
            elemento: "Controle de materiais rígidos e cortantes - ENVASE"
        },
        EMBALAGEM: {
            tabela: "Tabela de itens - EMBALAGEM",
            elemento: "Controle de materiais rígidos e cortantes - EMBALAGEM"
        },
        "SALAS DE REPROCESSO": {
            tabela: "Tabela de itens - SALA DE REPROCESSO",
            elemento: "Controle de materiais rígidos e cortantes - SALA DE REPROCESSO"
        },
        "PESAGEM CHOCOLATE": {
            tabela: "Tabela de itens - PESAGEM CHOCOLATE",
            elemento: "Controle de materiais rígidos e cortantes - PESAGEM CHOCOLATE"
        },
        "PESAGEM CONSERVAS": {
            tabela: "Tabela de itens - PESAGEM CONSERVAS",
            elemento: "Controle de materiais rígidos e cortantes - PESAGEM CONSERVAS"
        }
    };
    const atualizarExibicao = () => {
        const valorSelecionado = pai.value;
        console.log("Valor selecionado:", valorSelecionado);
        for (const key in elementos) {
            const { tabela, elemento } = elementos[key];

            const elElemento = document.getElementById(elemento);
            const elTabela = Array.from(document.querySelectorAll("table caption"))
                                    .find(caption => caption.textContent.trim() === tabela)
                                    ?.closest("table");

            if (valorSelecionado === key) {
                if (elElemento) {
                    elElemento.style.display = "block";
                    elElemento.disabled = false;
                }
                if (elTabela) {
                    elTabela.style.display = "table";
                }
            } else {
                if (elElemento) {
                    elElemento.style.display = "none";
                    elElemento.disabled = true;
                }
                if (elTabela) {
                    elTabela.style.display = "none";
                }
            }
        }
    };
    atualizarExibicao();

    pai.addEventListener("change", atualizarExibicao);
});
