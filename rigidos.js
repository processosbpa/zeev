document.addEventListener("DOMContentLoaded", () => {
    const pai = document.querySelector('[xname="inpsetorASerVerificado"]');
 
    if (!pai) {
        console.error("Elemento pai não encontrado!");
        return;
    }
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
            "SALA DE REPROCESSO": "Tabela de itens - SALA DE REPROCESSO",
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
