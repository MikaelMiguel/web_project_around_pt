let initialCards = [{ 
    name: 'Vale de Yosemite',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg'
  }, {
    name: 'Lago Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg'        
  }, {
    name: 'Montanhas Carecas',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg'
  }, {
    name: 'Latemar',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg'
  }, {
    name: 'Parque Nacional de Vanoise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg'
  }, {
    name: 'Lago di Braies',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg'
  }
];

// ─── SELETORES DO PERFIL ───────────────────────────────────────────────────────
const editButton = document.querySelector(".profile__edit-button");
const editModal = document.querySelector("#edit-popup");
const closeButton = editModal.querySelector(".popup__close");
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const formElement = editModal.querySelector("#edit-profile-form");

// ─── SELETORES DO NOVO LOCAL ───────────────────────────────────────────────────
const addButton = document.querySelector(".profile__add-button");     // botão "+"
const addModal = document.querySelector("#new-card-popup");           // modal "Novo Local"
const addCloseButton = addModal.querySelector(".popup__close");       // botão fechar do modal
const addFormElement = addModal.querySelector("#new-card-form");      // formulário do modal 

// ─── SELETORES DO MODAL DE IMAGEM ───────────────────────────────────────
const modal = document.querySelector('#image-popup');
const modalImage = modal.querySelector('.popup__image');
const modalCaption = modal.querySelector('.popup__caption');
const modalCloseButton = modal.querySelector('.popup__close');

// ─── FUNÇÕES DO MODAL ──────────────────────────────────────────────────────────
function openModal(modal) {
  modal.classList.add('popup_is-opened');
}

function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
}

function fillProfileForm() {
  const currentName = profileTitle.textContent;
  const currentDescription = profileDescription.textContent;
  formElement.querySelector('.popup__input_type_name').value = currentName;
  formElement.querySelector('.popup__input_type_description').value = currentDescription;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal(editModal);
}

// ─── MANIPULADOR DO FORMULÁRIO "EDITAR PERFIL" ────────────────────────────────
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = formElement.querySelector('.popup__input_type_name');
  let jobInput = formElement.querySelector('.popup__input_type_description');
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(editModal);
}

// ─── MANIPULADOR DO FORMULÁRIO "NOVO LOCAL" ────────────────────────────────────
function handleCardFormSubmit(evt) {
  evt.preventDefault();                                                // impede o reload da página

  const nameInput = addFormElement.querySelector('.popup__input_type_card-name');   // pega o campo nome
  const linkInput = addFormElement.querySelector('.popup__input_type_url');          // pega o campo link

  renderCard(nameInput.value, linkInput.value, cardsContainer);       // cria e adiciona o cartão

  addFormElement.reset();                                             // limpa o formulário
  closeModal(addModal);                                               // fecha o modal
}


// ─── EVENTOS DO MODAL "EDITAR PERFIL" ─────────────────────────────────────────
editButton.addEventListener('click', function() {
  handleOpenEditModal();
});

closeButton.addEventListener('click', function() {
  closeModal(editModal);
});

formElement.addEventListener('submit', handleProfileFormSubmit);

// ─── EVENTOS DO MODAL "NOVO LOCAL" ────────────────────────────────────────────
addButton.addEventListener('click', function() {
  openModal(addModal);                                                // abre o modal ao clicar em "+"
});

addCloseButton.addEventListener('click', function() {
  closeModal(addModal);                                               // fecha o modal
});

addFormElement.addEventListener('submit', handleCardFormSubmit);     // escuta o submit do formulário

// ─── EVENTOS DO MODAL DE IMAGEM ─────────────────────────────────────────────
modalCloseButton.addEventListener('click', () => {
    closeModal(modal); // botão de fechar do modal de imagem
});

// ─── TEMPLATE E CARTÕES ────────────────────────────────────────────────────────
const cardTemplate = document.querySelector('#card-template');
const cardsContainer = document.querySelector('.cards__list');

function getCardElement(name = "Lugar sem nome", link = "./images/placeholder.jpg") {
  const cardElement = cardTemplate.content.cloneNode(true);
  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  const likeButton = cardElement.querySelector('.card__like-button');
  // Botão de curtir 
  likeButton.addEventListener('click', function(event) {
    event.target.classList.toggle('card__like-button_is-active');
  });
  // Botão de excluir
  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', handleDeleteCard);

  cardImage.addEventListener('click', () => {
    modalCaption.textContent = name;
    modalImage.src = link;
    modalImage.alt = name;
  
    openModal(modal);
  });

  return cardElement;
}

function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);
  container.prepend(cardElement);
}

function handleDeleteCard(event) {
  // Encontra o cartão pai do botão clicado
  const cardToDelete = event.target.closest('.card');
  // Remove o cartão do DOM
  cardToDelete.remove();
}

// ─── RENDERIZA OS CARTÕES INICIAIS ────────────────────────────────────────────
initialCards.forEach((item) => {
  renderCard(item.name, item.link, cardsContainer);
});