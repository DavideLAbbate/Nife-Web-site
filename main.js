const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const dialogContainer = document.querySelector(".dialogContainer");

openBtn.addEventListener("click", (outerEvent) => {
    outerEvent.stopPropagation();
    dialogContainer.parentElement.style.overflow = "hidden";
    dialogContainer.style.display = "block";
  
    document.body.addEventListener("click", closeDialogOnClickOut);
  });
  
  // close dialog manually
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dialogContainer.style.display = "none";
    dialogContainer.parentElement.style.overflow = "unset";
    document.body.removeEventListener("click", closeDialogOnClickOut);
  });

  /**
 * Click event handler for the document's body element. It closes the previously opened dialog.
 * @param {Event} e Click event
 */
function closeDialogOnClickOut(e) {
    if (!dialogContainer.children[0].contains(e.target)) {
      dialogContainer.style.display = "none";
      dialogContainer.parentElement.style.overflow = "unset";
      document.body.removeEventListener("click", closeDialogOnClickOut);
    }
  }

























