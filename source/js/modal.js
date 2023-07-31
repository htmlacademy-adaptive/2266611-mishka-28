const modal = document.querySelector(".modal")
const orderButton = document.querySelectorAll(".order-button")
const overlays = document.querySelectorAll(".modal__overlay")
const pageBody = document.body

toggleModal = function() {
    return modal.classList.toggle("is-active"),
    pageBody.classList.toggle('scroll-lock')
};
for (let e of orderButton)
    e.addEventListener("click", toggleModal);
for (let e of overlays)
    e.addEventListener("click", toggleModal);
