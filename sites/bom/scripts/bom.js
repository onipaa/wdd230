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
    // trim all elements from the array to start with... I'm wondering if this
    // is a good/bad thing.
    // basically:
    //     if chapterName has something, add it to the favorites
    //     otherwise don't do anything (nothing coded)
    //     clear the chapterInput existing value
    const chapterName = chapterInput.value;
    if (chapterName.trim() !== '') {
        addToFavorites(chapterName);
        chapterInput.value = '';
  }
});

if ( favoriteChapters.length > 0 ) {
    displayFavorites()
}

console.log('Favorite chapters:', favoriteChapters);


/* tdd testing
addToFavorites('1 Nephi 1 (Lehi Prays and Sees Vision)'.padEnd(75, '\u00A0'));
addToFavorites('1 Nephi 1 (Lehi Prays and Sees Vision)'.padEnd(75, '\u00A0'));
addToFavorites('1 Nephi 3 (Nephi Prays to Know Lehi\'s Vision)'.padEnd(75, '\u00A0'));
addToFavorites('Mosiah 1 (King Benjamin teches his sons)'.padEnd(75,'\u00A0'));
addToFavorites('Moroni 10 (You can receive gifts of the Spirit and Know the Truth Also)'.padEnd(75, '\u00A0'));

displayFavorites();
*/