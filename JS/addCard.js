import { myLibrary } from "./script.js";

let books;
export function checkForCard() {
    books = myLibrary.filter(b => b.cardCreated == false);
    books.forEach(book => addCard(book));
}

function addCard (book) {
    book.cardCreated = true;
    const cardGrid = document.querySelector(".card-grid");
    const card = document.createElement("div");
    const namep = document.createElement("p");
    const authorp = document.createElement("p");
    const pagep = document.createElement("p");
    const btnContainer = document.createElement("div");
    const toggleBtn = document.createElement("button");
    const delBtn = document.createElement("button");

    authorp.innerHTML += "<strong>Author:</strong> <span></span>";
    namep.innerHTML += "<strong>Title:</strong> <em></em>";
    pagep.innerHTML += "<strong>Pages:</strong> <span></span>";
    toggleBtn.textContent = "Mark As Read";
    delBtn.textContent = "Delete";

    namep.querySelector("em").textContent += book.bookTitle;
    authorp.querySelector("span").textContent += book.authorName;
    pagep.querySelector("span").textContent += book.pageCount;
    card.setAttribute("data-UID", `${book.UId}`);
    delBtn.setAttribute("data-UID", `${book.UId}`);
    toggleBtn.setAttribute("data-UID", `${book.UId}`);

    card.classList.add("card");
    card.classList.add("un-read");
    btnContainer.classList.add("btn-flex");
    toggleBtn.classList.add("toggle-btn");
    delBtn.classList.add("del-btn");

    toggleBtn.setAttribute("id", "toggle-btn");
    delBtn.setAttribute("id", "del-btn");

    btnContainer.appendChild(toggleBtn);
    btnContainer.appendChild(delBtn);

    card.appendChild(namep);
    card.appendChild(authorp);
    card.appendChild(pagep);
    card.appendChild(btnContainer);

    cardGrid.appendChild(card);
}