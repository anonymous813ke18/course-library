export function addCard (UId, bookName, authorName, pageCount) {
    const cardGrid = document.querySelector(".card-grid");
    const card = document.createElement("div");
    const namep = document.createElement("p");
    const authorp = document.createElement("p");
    const pagep = document.createElement("p");
    const btnContainer = document.createElement("div");
    const toggleBtn = document.createElement("button");
    const delBtn = document.createElement("button");

    authorp.innerHTML += "<strong>Author:</strong> ";
    namep.innerHTML += "<strong>Title:</strong> <em></em>";
    pagep.innerHTML += "<strong>Pages:</strong> ";
    toggleBtn.textContent = "Mark As Read";
    delBtn.textContent = "Delete";

    namep.querySelector("em").textContent += bookName;
    authorp.textContent += authorName;
    pagep.textContent += pageCount;
    card.setAttribute("data-UID", `${UId}`);
    delBtn.setAttribute("data-UID", `${UId}`);
    toggleBtn.setAttribute("data-UID", `${UId}`);

    card.classList.add("card");
    card.classList.add("un-read");
    btnContainer.classList.add("btn-flex");
    toggleBtn.classList.add("toggle-btn");
    delBtn.classList.add("del-btn");

    toggleBtn.setAttribute("id", "toggle-btn");
    delBtn.setAttribute("id", "del-btn");

    btnContainer.appendChild(toggleBtn);
    btnContainer.appendChild(delBtn);

    card.appendChild(authorp);
    card.appendChild(namep);
    card.appendChild(pagep);
    card.appendChild(btnContainer);

    cardGrid.appendChild(card);
}