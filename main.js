
// Creates and configures a reader
const reader = new FileReader();

reader.addEventListener(
    "load",
    () => {

        // Gets the text from the file
        const texto = reader.result;

        const count = countWords(texto);

        // Generates the name
        let name = document.getElementById("file").files[0].name;

        name = name.substring(0, name.length - 4);


        // Creates the reference to the json text
        var blob = new Blob([JSON.stringify(count)], {
            type: "application/json;charset=utf-8",
        });



        download(blob, name);

    },
    false
);

// Gets the text, and generates the JSON. Returns false to not refresh the page
function handleSubmit(e) {

    e.preventDefault();
    // Gets the file
    const [file] = document.getElementById("file").files;

    // If there is file executes the reader function
    if (file) {
        reader.readAsText(file);
    }

    return false;
}

// Adds to the form the submit function
document.getElementById('file-form').addEventListener('submit', handleSubmit);

// Returns an object with the count of every word

function countWords(text) {

    // Will save useful  data
    let totalWords = 0, diferentWords = 0, characters;

    // Traetment of the text
    text = text.toLowerCase()
        .trim().
        replace(/[.,\/#!123<456789>0?¿¡—%\^&\*\]\[\{\};$:…{}«»,=\-_`~()]/g, " ").
        replace(/\n/g, " ").
        replace(/\s+/g, " ");

    characters = text.length;

    console.log('text :>> ', text);

    // Object word: repeticions...
    const objectWordRepeticions = {};

    // Adds a word to objectWordRepeticions. Or it sums one to a word, previously added:
    const addWord = (word) => {

        if (objectWordRepeticions[word] === undefined) {

            objectWordRepeticions[word] = 1;

            diferentWords++;
        }
        else {

            objectWordRepeticions[word]++;
        }

        totalWords++;
    }

    // Adds the words to the objectWordRepeticions
    text = text.split(' ').map(addWord);

    // Transforms the object in a array of objects and we short it
    const arrWordRepeticions = Object.entries(objectWordRepeticions)
        .map((x => { return { word: x[0], count: x[1] } }))
        .sort((a, b) => {
            if (a.count < b.count) {

                return 1;
            }
            else if (a.count > b.count) {

                return -1;
            }

            else {

                if (a.word > b.word) {
                    return 1;
                }
                if (a.word < b.word) {
                    return -1;
                }
                return 0;

            }
        })

    // Returns all
    return { totalWords, diferentWords, characters, count: arrWordRepeticions };

}

// Dowloads the blob 
function download(blob, name) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
}
