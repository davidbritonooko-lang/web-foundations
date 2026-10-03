// first javascript code
  console.log("Hello from Javascript");
  console.log(2 + 3);

// declearing variable
  // const creates a variable that cannot be re-assigned. Make it your default choice for anything that will not be replaced.
    const appName = "Quick Notes";
  
  // let creates a variable that can be re-assigned. Use it for values that change, such as counters, totals and the current state of the app.
    let noteCount = 0;

  // var is the old way of creating variables. It has confusing rules about where the variable can be used, so avoid it in new code - but recognise it when you see it in older tutorials.
    var folderName = "practice";

    // increamentation
      noteCount = noteCount + 1;         // now 1
      noteCount +=1;                     // now 2
      noteCount++;                       // now 3

      // log to console
        console.log(appName, noteCount);   // Quick Notes 3

// javascript data types
  // 1. String - a text inside double or single quotes, such as "Buy milk" or 'Hi'.
    const firstName = "David";

    // string cancatination
      // joining with +
        const greeting = "Hello, " + firstName + "!";

      // template literal
        const bettergreeting = `Hello, ${firstName} !`;

        // log to console
          console.log(greeting, bettergreeting);   // Hello, David! Hello, David!
          console.log(firstName.length);           // 5 (number of characters)
          console.log(firstName.toUpperCase());    // DAVID
          console.log("  Hi  ".trim());            // Hi (removes whitespace from the start and end of a string)
      
      // more useful string methods 
        const sentence = "Learn HTML CSS and Javascript";

        console.log(sentence.includes("CSS"));        // true
        console.log(sentence.startsWith("Learn"));    // true
        console.log(sentence.endsWith("Javascript")); // true
        console.log(sentence.indexOf("HTML"));        // 6 (position of the first character of the first match)
        console.log(sentence.replace("CSS", "JS"));   // Learn HTML JS and Javascript (replace first match)
        console.log(sentence.split(" "));             // ["Learn", "HTML", "CSS", "and", "Javascript"] (split into an array of words)
        console.log(sentence.slice(0, 5));            // "Learn" (extract a portion of the string)
        console.log("ab".repeat(3));                  // ababab

    // Key Idea - template literals: Strings written with backticks (the key above Tab) can include variables inside ${ }.
    // This is much easier to read than joining pieces with +

  // 2. Number - any number, whole or decimal, such as 42, 3.14 or -7. JavaScript does not separate whole numbers and decimals.
    const age = 20;

    // arrithmetic javascript
      console.log(age + 2);           // 22 addition
      console.log(age - 1);           // 19 subtraction
      console.log(age * 4);           // 80 multiplication
      console.log(age / 5);           // 4 division
      console.log(age % 3);           // 2 modulo (returns remainder)
      console.log(age + "2");         // 202 (string concatenation, not addition)
      console.log(age + Number("2")); // 22 (convert string to number before adding)

  // 3. Boolean - one of two values, true or false, used for decisions.

  // 4. Array - an ordered list of values, such as ["a", "b", "c"]. It holds many values in order. Each value has a position number called an index, and indexes start at 0.
    const colors = ["red", "green", "blue"];

    // console logging
      console.log(colors[0]);                 // red - first item in the array at index 0
      console.log(colors[1]);                 // green - second item in the array at index 1
      console.log(colors[2]);                 // blue - third item in the array at index 2
      console.log(colors.length);             // 3 - number of items in the array

      colors.push("yellow");                  // add a new item to the end of the array
      console.log(colors);                    // ["red", "green", "blue", "yellow"]
      console.log(colors.length);             // 4 - number of items in the array

      colors.pop();                           // remove the last item from the array
      console.log(colors.includes("green"));  // true - check if the array contains "green"

      // array methods
        const scores = [72, 95, 58, 88];
        
        console.log(scores.some((s) => s > 90));    // true - check if any score is greater than 90
        console.log(scores.every((s) => s > 50));       // true - check if all scores are greater than 50









  // 5. Object - a group of named values (key–value pairs), such as { text: "Hi", done: false }.
    const note = {
      id: 1,
      text: "Buy milk",
      done: false
    };

    // console logging
      console.log(note.text);    // Buy milk
      console.log(note.done);    // false
      console.log(note.id);      // 1

      note.priority = "high";        // add a new key-value pair to the object
      console.log(note.priority);    // high

    // Key Idea: QuickNotes will store its data as an array of objects: a list where each item is one note object. 
      // An array of objects(javascript)
        const notes = [
          { id: 1, text: "Buy milk", done: false },
          { id: 2, text: "Do homework", done: true },
          { id: 3, text: "Clean room", done: false }
        ];

        console.log(notes[0].text);   // Buy milk - first note's text
        console.log(notes[1].done);    // true

        // Watch Out: const stops you replacing the variable, but you can still change what is inside an array or object. notes.push(...) is fine with const notes; notes = [] is not.

// making decisions i.e. conditionals
  // Programs need to make choices: "if the note is empty, show an error; otherwise, save it." We use comparison operators to ask questions that give true or false, and if/else to act on the answer.
    // Comparison and logical operators produce true or false:
      // 1. === checks whether two values are equal and the same type: 5 === 5 is true, but 5 === "5" is false (a number is not a string).
      // 2. !== checks whether two values are not equal: 3 !== 4 is true.
      // 3. > and < mean greater than and less than: 10 > 3 is true.
      // 4. >= and <= mean greater than or equal to, and less than or equal to: 5 <= 5 is true.
      // 5. && (AND) is true only if both sides are true, for example age > 18 && hasTicket.
      // 6. || (OR) is true if at least one side is true, for example isAdmin || isOwner.
      // 7. ! (NOT) flips a value: !true is false, and !isEmpty means "is not empty".

      const noteText = "    ";

      if (noteText.trim() === "") {
        console.log("Error: Note is empty!");
      } else if (noteText.length > 200) {
        console.log("Error: Keep notes under 200 characters.");
      } else {
        console.log("Note saved!");
      }

    // 1. Use === to compare.
    // 2. Use = to assigns a value.
    // 3. Use == to convert data types in surprising ways (0 == "" is true!)

// loops
  // Loops repeat code until a condition is false. They are useful for repeating tasks, such as showing all notes in a list.
    // for loop
      for (let i = 0; i < 5; i++) {
        console.log(i);   // 0, 1, 2, 3, 4
      }

    // for .... of 
      const colorsList = ["red", "green", "blue"];
      for (const color of colorsList) {
        console.log(color);   // red, green, blue
      }

    // while loop
      let count = 0;
      while (count < 5) {
        console.log(count);
        count++;
      }

// Arrays have built-in methods that loop for you. You give them a function that runs once for each item
  const newNotes = [
    { id: 1, text: "Buy milk", done: false },
    { id: 2, text: "Do homework", done: true },
    { id: 3, text: "Clean room", done: false }
  ];
  
  // forEach: do something with every item
    newNotes.forEach((note) => {
      console.log(note.text);
    });

  // filter: build a NEW array with only matching items
    const unfinished = newNotes.filter((note) => note.done === false);
    console.log(unfinished.length); // 2

  // find: get the FIRST matching item (or undefined)
    const note2 = newNotes.find((note) => note.id === 2);
    console.log(note2.text); // Do homework

  // map: build a NEW array by transforming every item
    const noteTexts = newNotes.map((note) => note.text.toLocaleUpperCase());
    console.log(noteTexts); // ["BUY MILK", "DO HOMEWORK", "CLEAN ROOM"]

    // Key Idea: To delete an item, we usually filter it out: 
      // 1. keep every note whose id is not the one we want to remove. 
      // 2. notes.filter((n) => n.id !== 2) returns a new array without note 2.

// functions - a named, reusable block of code - like a recipe. You define it once, then call (use) it as many times as you like
  // they can take parameters (inputs) and return a result (output)

  // function declaration
    function greet(name) {        // name - parameter
      return `Hello, ${name}!`;   // return - sends value back
    }

    const message = greet("Brian");
    console.log(message);
    console.log(greet("Alice"));   // Hello, Alice!

  // arrow functions are a shorter way to write functions
    function greetOld(name) {
      return `Hello, ${name}!`;
    }

    const greetArrow = (name) => {
      return `Hello, ${name}!`;
    }

    const greetArrowShort = (name) => `Hello, ${name}!`;   // single expression returns automatically

    console.log(greetArrow("Charlie"));
    console.log(greetArrowShort("David"));

// a variable created inside a function (or inside { } braces) only exists there i.e. a  scope.
  function addOne() {
    const step = 1; 
    total += step;
  }

  addOne();

  console.log(total);   // 1
  console.log(step);    // error

// variables created at the top of a file (outside any function) are available everywhere in that file.
  let globalVar = "I am global";

// while loops and break
  // a while loop repeats as long as a condition is true.
  // a break exits a loop immediately.

  let attempts = 0;

  while (attempts < 5) {
    attempts++;
    console.log(`Attempt ${attempts}`);
    if (attempts === 3) {
      console.log("Breaking out of the loop at attempt 3");
      break;
    }
  }

  // Be careful: 
    // if the condition never becomes false, the loop runs forever and the browser tab freezes (an infinite loop). 
    // Always make sure something inside the loop moves it towards the end.

// switch for many fixed choices.
  // when one value can match several fixed options, switch can be easier to read than a long if/else if chain. 
  // each case needs a break, otherwise the code "falls through" into the next case.

    function categoryColour(category) {
      switch (category) {
        case "work":
          return "blue";
        case "personal":
          return "green";
        case "urgent":
          return "red";
        default:            // used when nothing else matches
          return "grey";
      }
    }

    console.log(categoryColour("study"));   // grey

    // return also ends the function, so no break is needed after each return.

// The three errors you will see most
  // SyntaxError - the code is not valid JavaScript, so nothing in the file runs.
  // ReferenceError - you used a name that does not exist, usually a typo or a variable used outside its scope.
  // TypeError - you did something with a value that it does not support, most often using a property of null or undefined.

// Printing values
  // console.log(notes) - print values at different points to see where they stop being what you expect
  // console.table(notes) prints an array of objects as a neat table
  // console.error("...") prints a message in red

//  Functions written with the function keyword are set up before the code runs (this is called hoisting), so you can call them earlier in the file than where they are written. 
//  Functions stored in a const variable (such as arrow functions) are not available until that line has run. 

  sayHello();               // works: function declarations are hoisted
 
  function sayHello() {
    console.log("Hello!");
  }
  
  // sayBye();              // ❌ ReferenceError: cannot use before this line
  const sayBye = () => console.log("Bye!");
  sayBye();                 // works here

// The call stack: functions calling functions.
  // When a function calls another function, the engine pauses the first one, runs the second, then comes back. 
  // It keeps track using the call stack

  function formatNote(text) {
    return `• ${text.trim()}`;  // 3. formatNote returns "• Buy milk" to printNote
  }
  
  function printNote(text) {
    const line = formatNote(text);  // 2. pause printNote, run formatNote
    console.log(line);              // 4. back in printNote
  }
  
  printNote("  Buy milk ");         // 1. run printNote
  
// Values and references: a very common surprise
  // Simple values - numbers, strings and booleans - are copied when you assign them to another variable. 
  // Arrays and objects are not copied: the new variable points to the same array or object in memory. 
  // This is called a reference.

    let a = 5;
    let b = a;       // b gets its own copy of 5
    b = 10;
    console.log(a);  // 5 - unchanged
    
    const lastNote = ["Buy milk"];
    const sameNotes = lastNote;    // NOT a copy: both names point to one array
    sameNotes.push("Call mum");
    console.log(lastNote);         // ["Buy milk", "Call mum"] - changed too!
    
    const realCopy = [...lastNote]; // spread syntax makes a real copy

  // This is why array methods such as filter and map are so useful: they return a new array and leave the original untouched, which makes code easier to reason about.

















