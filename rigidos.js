document.addEventListener("DOMContentLoaded", () => {
  const pai = document.querySelector('[xname="inpsetorASerVerificado"]');
  const conservas = document.getElementById("Controle de materiais rígidos e cortantes - CONSERVAS");
  const chocolate = document.getElementById("Controle de materiais rígidos e cortantes - CHOCOLATE");
  const fruta = document.getElementById("FRUTA E POLPA");
  const pesagem = document.getElementById("SALA DE PESAGEM");

  // Oculta ou exibe os elementos e os habilita/desabilita de acordo com o valor de pai
  const toggleElement = (element, show) => {
    if (element) { // Verifica se o elemento existe
      element.style.display = show ? "block" : "none";
      element.disabled = !show;
    }
  };

  // Função para atualizar a exibição com base no valor de `pai`
  const atualizarExibicao = () => {
    if (pai && pai.value) {
      console.log(`Setor selecionado: ${pai.value}`); // Debug para verificar o valor selecionado
      toggleElement(conservas, pai.value === "CONSERVAS");
      toggleElement(chocolate, pai.value === "CHOCOLATE");
      toggleElement(fruta, pai.value === "FRUTA E POLPA");
      toggleElement(pesagem, pai.value === "PESAGEM");
    }
  };

  // Chama a função ao carregar a página
  atualizarExibicao();

  // Adiciona um eventListener para capturar mudanças no campo pai
  if (pai) {
    pai.addEventListener("change", atualizarExibicao);
  }
});
