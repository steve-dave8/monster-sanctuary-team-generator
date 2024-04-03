let duplicatesAllowed = false;
const msList = document.getElementById("ms-list");

const toggleDuplicates = () => {
    duplicatesAllowed = !duplicatesAllowed;
}

const generateList = () => {
    let deck = monsters.map(x => {return {...x}});
    const maxShuffles = 5;
    let shuffles = Math.floor(Math.random() * (maxShuffles)) + 1;

    for (shuffles; shuffles > 0; shuffles--) {
        shuffle(deck);
    }

    let selections = [];

    for (let i=6; i>0; i--) {
        let index = Math.floor(Math.random() * deck.length);
        selections.push(deck[index]);
        if (!duplicatesAllowed) {
            deck.splice(index, 1);
        }
    }

    msList.innerHTML = selections.map(mon =>
        `<li>
            ${mon.number}.
            <a href="${mon.link}" target="_blank" rel="noopener noreferrer">
                 ${mon.name}
            </a>
        </li>`
    ).join("")
};