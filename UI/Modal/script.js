window.onload = () => {
  const openModalButton = document.querySelector("#button-open");
  const modalWindow = document.querySelector("#modal-backdrop");
  const closeModalButton = document.querySelector("#button-close");
  const closeModalIcon = document.querySelector("#close-icon");

  const handleOpenModal = () => {
    modalWindow.style.display = "flex";
  };

  const handleCloseModal = () => {
    modalWindow.style.display = "none";
  };

  // Close modal with clicking on button, icon or pushing ESC
  openModalButton.addEventListener("click", handleOpenModal);
  closeModalButton.addEventListener("click", handleCloseModal);
  closeModalIcon.addEventListener("click", handleCloseModal);
  document.addEventListener("keyup", handleCloseModal);
};
