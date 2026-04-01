import { addCard } from "./addCard.js";
import { setUpEventListeners } from "./eventListeners.js";

export let myLibrary = [];
export function setLibrary(newList) {
    myLibrary = newList;
}


const openDialog = document.querySelector(".open-dialog");
const dialog = document.querySelector("dialog");
const bookName = document.querySelector("#book-name");
const authorName = document.querySelector("#author-name");
const pageCount = document.querySelector("#pages")
const addBtn = document.querySelector("#add-btn");
const errMsg = document.querySelector(".err-msg");


function Book (UId, authorName, bookTItle, pageCount) {
    this.UId = UId;
    this.authorName = authorName;
    this.bookTItle = bookTItle;
    this.pageCount = pageCount;
    this.cardCreated = false;
}

openDialog.addEventListener("click", () => {
    bookName.value = '';
    authorName.value = '';
    pageCount.value = 0;
    dialog.showModal();
})

addBtn.addEventListener("click", () => {
    const thisUId = self.crypto.randomUUID();

    if (bookName.value == '' || authorName.value == '' || pageCount.value == '') {
        errMsg.textContent = "Please fill all the information."
    } else {
        errMsg.textContent = '';
        myLibrary.push(new Book(thisUId, authorName.value, bookName.value, pageCount.value));
        console.log(myLibrary);
        addCard(thisUId, bookName.value, authorName.value, pageCount.value);
        dialog.close();
    }
})

setUpEventListeners();