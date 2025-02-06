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
        "SALAS DE REPROCESSO": document.getElementById("Controle de materiais rígidos e cortantes - SALA DE REPROCESSO"),
        "PESAGEM CHOCOLATE": document.getElementById("Controle de materiais rígidos e cortantes - PESAGEM CHOCOLATE"),
        "PESAGEM CONSERVAS": document.getElementById("Controle de materiais rígidos e cortantes - PESAGEM CONSERVAS")
    };

    // Função para exibir ou ocultar elementos com base na seleção
    const atualizarElementos = (callback) => {
        const selectedValue = pai.value;
        console.log("Valor selecionado:", selectedValue); // Verificar valor selecionado

        Object.keys(elements).forEach(key => {
            const element = elements[key];
            if (!element) {
                console.warn(`Elemento com ID "${key}" não encontrado no DOM.`);
                return;
            }
            console.log(`Atualizando ${key}:`, element);
            if (key === selectedValue) {
                element.style.display = "block";
                element.disabled = false;
            } else {
                element.style.display = "none";
                element.disabled = true;
            }
        });
        // Chama a função callback depois que a atualização dos elementos for concluída
        callback();
    };

    // Função para exibir ou ocultar tabelas com base no caption
    const atualizarTabelas = () => {
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
    };

    // Chama a função atualizarElementos e depois chama a função atualizarTabelas
    atualizarElementos(atualizarTabelas);

    // Adiciona evento para atualizar sempre que o seletor mudar
    pai.addEventListener("change", () => {
        atualizarElementos(atualizarTabelas);
    });
});

