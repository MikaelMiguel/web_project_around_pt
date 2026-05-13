# Around The U.S.

Projeto front-end responsivo que apresenta um perfil interativo e uma galeria de cartões de destinos turísticos.

## Visão geral

- Página única em HTML, CSS e JavaScript puro.
- Layout estruturado com componentes de perfil, lista de cards e pop-ups.
- Estilo organizado em `pages/`, `blocks/` e `vendor/`.
- Interação de edição de perfil via modal.

## Principais funcionalidades

- Edição do nome e da descrição do perfil.
- Exibição de cartões com imagem e título já definidos no HTML.
- Interface com botões visuais de curtir e excluir nos cards.
- Pop-ups de edição de perfil e criação de novo card presentes na marcação.

## Tecnologias usadas

- HTML5
- CSS3
- JavaScript (ES6)

## Estrutura do projeto

- `index.html` — marcação da página, estrutura do perfil, cards e pop-ups.
- `scripts/index.js` — lógica de abertura e fechamento do modal e atualização do perfil.
- `pages/index.css` — arquivo principal que importa estilos de blocos e ajustes de layout.
- `blocks/` — estilos de componentes reutilizáveis: layout, header, conteúdo, footer, perfil, cards, pop-up, etc.
- `vendor/` — arquivos de normalização e fontes (`normalize.css`, `fonts.css`).
- `images/` — imagens e ícones utilizados pelo projeto.

## Como usar

1. Abra a pasta do projeto no seu editor de código.
2. Abra `index.html` em um navegador.
3. Clique no botão de editar perfil para abrir o formulário.
4. Altere o nome e a descrição e clique em salvar para aplicar as mudanças.

> Importante: o projeto funciona localmente sem servidor; basta abrir `index.html`.

## Observações

- Os cartões de destinos são estáticos no HTML.
- O JavaScript atual atualiza apenas o perfil e não gera os cards dinamicamente.
- Há um log no console que imprime o nome de cada card inicial.

## Possíveis melhorias

- Gerar os cards dinamicamente a partir de um array de dados.
- Implementar criação, exclusão e curtidas reais dos cards.
- Tornar o pop-up de imagem funcional ao clicar nos cards.
- Adicionar validação e persistência de dados com `localStorage`.

## Autor

MM | Web Developer
