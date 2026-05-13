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
const editButton = document.querySelector(".profile__edit-button");
const editModal = document.querySelector("#edit-popup");
const closeButton = editModal.querySelector(".popup__close");
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const formElement = editModal.querySelector("#edit-profile-form");

function openModal(editModal) {
  editModal.classList.add('popup_is-opened');
};
function closeModal(editModal) {
  editModal.classList.remove('popup_is-opened');
};

editButton.addEventListener('click', function() {
    handleOpenEditModal();
});

closeButton.addEventListener('click', function() {
  closeModal(editModal); // chama a função reutilizável
});

function fillProfileForm() {
  // Lê os valores da página
  const currentName = profileTitle.textContent;
  const currentDescription = profileDescription.textContent;
  // Define os valores nos campos do formulário
  formElement.querySelector('.popup__input_type_name').value = currentName;
  formElement.querySelector('.popup__input_type_description').value = currentDescription;
};

function handleOpenEditModal() {
  fillProfileForm();    // Primeiro: preenche o formulário
  openModal(editModal); // Segundo: abre o modal
};

function handleProfileFormSubmit(evt) {
 evt.preventDefault();// Esta linha impede o navegador de enviar o formulário da forma padrão.
  let nameInput = formElement.querySelector('.popup__input_type_name');
  let jobInput = formElement.querySelector('.popup__input_type_description');
  const newName = nameInput.value;
  const newDescription = jobInput.value;
  profileTitle.textContent = newName;
  profileDescription.textContent = newDescription;
  closeModal(editModal); // chama a função reutilizável
}

formElement.addEventListener('submit', handleProfileFormSubmit)

initialCards.forEach((item) => {
    console.log(item.name);
});