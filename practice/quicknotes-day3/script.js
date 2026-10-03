// 1. Our notes data stored in an array of objects
    let notes = [];

// 2. We check if client's note meets reqcuired standards
    function isValidNote(text) {
        const cleanedText = text.trim();
        return cleanedText.length > 0 && cleanedText.length <= 200;
    }

// 3. We add a new note to the array
    function addNote(text) {
        if (!isValidNote(text)) {
            console.error("Invalid note. Please ensure your note is between 1 and 200 characters.");
            return false;
        }

        const newNote = {
            id: Date.now(),
            text: text.trim(),
            createdAt: new Date().toLocaleString(),
        };

        notes.push(newNote);
        console.log(`Added: "${newNote.text}"`);
        return true;
    }

// 4. Delete a note by it's id
    function deleteNote(id) {
        notes = notes.filter((note) => note.id !== id);
    }

// 5. A friendly summary sentence
    function countMessage() {
        if (notes.length === 0) return "You have no notes yet.";
        if (notes.length === 1) return "You have 1 note.";
        return `You have ${notes.length} notes.`;
    }

// 6. Print all notes
    function listNotes() {
        notes.forEach((note, index) =>  {
            console.log(`${index + 1}.  ${note.text}    (${note.createdAt})`);
        });
        console.log(countMessage());
    }

// TEST 

    addNote("Finish day 3 assignment");
    addNote("   ");
    addNote("Check my script berfore submission");
    listNotes();
