let notes = [
  { id: 1, text: "Buy milk and bread", category: "personal" },
  { id: 2, text: "Finish the Day 3 assignment", category: "study" },
  { id: 3, text: "Email the project report to Grace", category: "work" },
  { id: 4, text: "Revise JavaScript arrays", category: "study" },
  { id: 5, text: "Call mum", category: "personal" },
];

// 1. searchNotes(word) returns an array of notes whose text contains word, ignoring upper and lower case.

    function searchNotes(word) {
        return notes.filter(note => note.text.toLowerCase().includes(word.toLowerCase()));
    }

// 2. longestNote() returns the note object with the most characters, or null if there are no notes.

    function longestNote() {
        if (notes.length === 0) {
            return null;
        }
        return notes.reduce((longest, current) => {
            return current.text.length > longest.text.length ? current : longest;
        });
    }

// 3. countByCategory() returns an object counting notes per category, such as { personal: 2, work: 1, study: 2 }.

    function countByCategory() {
        return notes.reduce((count, note) => {
            count[note.category] = (count[note.category] || 0) + 1;
            return count;
        }, {});
    }
// 4. getSummary() returns a sentence such as "5 notes: 2 personal, 1 work, 2 study."

    function getSummary() {
        const totalNotes = notes.length;
        const categoryCounts = countByCategory();
        const categorySummary = Object.entries(categoryCounts)
            .map(([category, count]) => `${count} ${category}`)
            .join(", ");
        return `${totalNotes} notes: ${categorySummary}.`;
    }

// 5. isDuplicate(text) returns true if a note with the same text already exists (ignoring case and extra spaces).

    function isDuplicate(text) {
        const normalizedText = text.trim().toLowerCase();
        return notes.some(note => note.text.trim().toLowerCase() === normalizedText);
    }

// 6. addNote(text, category) adds a note only if it is 1–200 characters, is not a duplicate and the category is one of personal, work or study. It returns true when added and false otherwise, logging the reason.

    function addNote(text, category) {
        const validCategories = ["personal", "work", "study"];

        if (text.length < 1 || text.length > 200) {
            console.log("Note text must be between 1 and 200 characters.");
            return false;
        }
        if (!validCategories.includes(category)) {
            console.log("Category must be one of: personal, work, study.");
            return false;
        }
        if (isDuplicate(text)) {
            console.log("A note with this text already exists.");
            return false;
        }

        notes.push({ id: Date.now(), text, category });
        return true;
    }

console.log(searchNotes("milk")); // Expected: [{ id: 1, text: "Buy milk and bread", category: "personal" }]
console.log(searchNotes("eggs")); // Expected: []
console.log(longestNote()); // Expected: { id: 2, text: "Finish project proposal", category: "work" }
console.log(longestNote()); // Expected: { id: 3, text: "Read a book on JavaScript", category: "study" }