import { myLibrary, setLibrary } from "./script.js";

export function setUpEventListeners () {
    const cardGrid = document.querySelector(".card-grid");

    cardGrid.addEventListener("click", (e) => {
        const target = e.target;
        const Uid = target.dataset.uid;
        console.log(`Button UID: ${Uid}`);
        const card = target.parentElement.parentElement;
        console.log(card);
        switch(target.id) {
            case 'toggle-btn':
                console.log("Pressed")
                if (card.classList.contains("un-read")) {
                    card.classList.remove("un-read");
                    card.classList.add("read");
                    target.textContent = "Mark as Unread";
                } else {
                    card.classList.remove("read");
                    card.classList.add("un-read");
                    target.textContent = "Mark as Read";
                }
                break;
            case 'del-btn':
                let newLibrary = myLibrary.filter(book => book.UId !== Uid);
                setLibrary(newLibrary);
                card?.remove();
        }
    })
}