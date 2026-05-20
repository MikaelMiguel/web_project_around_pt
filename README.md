# Around The U.S.

Projeto front-end responsivo que apresenta um perfil interativo e uma galeria de cartões de destinos turísticos.

## Visão geral

- Página única construída com HTML, CSS e JavaScript puro.
- Perfil editável via modal e criação de novos cartões com imagens.
- Cards renderizados dinamicamente a partir de uma lista inicial de destinos.
- Interação de visualização de imagem, curtidas e exclusão de cards.

## Principais funcionalidades

- Edição do nome e da descrição do perfil.
- Criação de novos cartões com título e link de imagem.
- Exclusão de cards existentes.
- Curtir/descurtir cartões com feedback visual.
- Visualização em modal da imagem clicada.

## Tecnologias usadas

- HTML5
- CSS3
- JavaScript (ES6)

## Estrutura do projeto

- `index.html` — estrutura da página, perfil, pop-ups e template de cartão.
- `scripts/index.js` — lógica de modais, gerenciamento de perfil, criação e remoção de cards.
- `pages/index.css` — estilos principais e importação de arquivos de bloco.
- `blocks/` — estilos de componentes como header, profile, cards, pop-up e footer.
- `vendor/` — arquivos de normalização e fontes (`normalize.css`, `fonts.css`).
- `images/` — imagens de exemplo e recursos visuais do projeto.

## Como usar

1. Abra a pasta do projeto no seu editor de código.
2. Abra `index.html` em um navegador.
3. Clique no botão de editar perfil para abrir o modal de edição.
4. Atualize nome e descrição e salve.
5. Clique no botão de adicionar (`+`) para abrir o modal de novo local.
6. Preencha título e URL da imagem, depois clique em criar.
7. Clique no card para abrir a imagem em visualização ampliada.
8. Use os botões de curtir e excluir em cada card.

> **Nota:** O projeto funciona localmente apenas abrindo `index.html` no navegador.

## Link do Projeto

https://mikaelmiguel.github.io/web_project_around_pt/

## Observações

- O JavaScript renderiza os cards iniciais e permite adicionar novos cards durante a sessão.
- Os dados não são persistidos entre recargas da página.
- O modal de imagem abre usando o título do card como legenda.

## Possíveis melhorias

- Adicionar validação de formulário mais completa.
- Salvar perfil e cards no `localStorage`.
- Permitir edição de cards existentes.
- Adicionar transições e animações mais suaves.

## Autor

MM | Web Developer
