// Brother B. said that we should not use var as a variable constructor. I think
// I have got all of them set to const. I also did not like the way that the
// vanilla script named stuff with abbreviations EVERYWHERE.

// Pseudo:
// 1. Create an array to hold favorite chapters.
// 2. Create a function to add input to the array.
// 3. Create a function to remove values from the array.
// 4. Display favorites.
// 5. Create listener buttons.
// 6. Pass tests at the bottom of page

const favoriteChapters = [];

function addToFavorites(bookChapter) {
    // Check if the chapter is already in the favorite list
    if (!favoriteChapters.includes(bookChapter)) {
      // Add the chapter to the favorite list
      favoriteChapters.push(bookChapter);
      console.log('Added to favorites:', bookChapter);
    } else {
      console.log('Chapter is already in favorites:', bookChapter);
    }

    if ( favoriteChapters.length > 0 ) {
        displayFavorites()
    }
}

function removeFromFavorites(bookChapter) {
    // create an index variable of the entire array (what I would call a list
    // in Python).
    const index = favoriteChapters.indexOf(bookChapter);
    // if the index is not empty, meaning you have remove everything and cannot
    // remove any more. Splice removes the bookChapter from the array. If the
    // Chapter is not in the list (must match perfectly), then the index item
    // will not be removed.
    if (index !== -1) {
        favoriteChapters.splice(index, 1 );
        console.log('Removed from favorites:', bookChapter);
        // refresh the list without the chapter cause it is no longer in the
        // list.
        displayFavorites();
    }
}

function displayFavorites() {
    const list = document.getElementById('favoriteList');
    list.innerHTML = '';

    // Loop through chapters in list and create a new li element per list item.
    favoriteChapters.forEach((chapter) => {
        const listItem = document.createElement('li');
        listItem.textContent = chapter;
        list.appendChild(listItem);
    
        const removeButton = document.createElement('button');
        removeButton.textContent = '\u274C';

        removeButton.addEventListener('click', () => {
            removeFromFavorites(chapter);
        });

        listItem.appendChild(removeButton);
        list.appendChild(listItem);
    });
}

// create a listener on the button
const addButton = document.getElementById('addChapterButton');

// create an on click action to the button
addButton.addEventListener('click', () => {
    //fetch the input from the text id chapterInput
    const chapterInput = document.getElementById('chapterInput');
    
    // Look at the "trimmed" chapterName value. If it is not blank, 
    // addToFavorites(chapterName)
    // empty the value from the input box
    const chapterName = chapterInput.value;
    if (chapterName.trim() !== '') {
        addToFavorites(chapterName);
        chapterInput.value = '';
  }
});

console.log('Favorite chapters:', favoriteChapters);

/* testing
addToFavorites('1 Nephi 1 (Lehi Prays and Sees Vision)'.padEnd(75, '\u00A0'));
addToFavorites('1 Nephi 1 (Lehi Prays and Sees Vision)'.padEnd(75, '\u00A0'));
addToFavorites('1 Nephi 3 (Nephi Prays to Know Lehi\'s Vision)'.padEnd(75, '\u00A0'));
addToFavorites('Mosiah 1 (King Benjamin teches his sons)'.padEnd(75,'\u00A0'));
addToFavorites('Moroni 10 (You can receive gifts of the Spirit and Know the Truth Also)'.padEnd(75, '\u00A0'));

displayFavorites();
*/