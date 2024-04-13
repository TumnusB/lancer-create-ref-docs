Hooks.once("ready", () => {
    console.log("---------------LANCER Glossary REF----------------------");
    try {
        game.journal.getName('Glossary').delete()
      } catch (error) {}
    const glossary = [];
    fetch("https://raw.githubusercontent.com/massif-press/lancer-data/master/lib/glossary.json")
        .then((response) => response.json())
        .then((json) => {
            let i = 0;
            json.forEach((glossarydata) => {
                glossary[i] = { type: "text", name: glossarydata.name, text: { content: glossarydata.description } };
                i++;
            });
            const data = {
                name: "Glossary",
                pages: glossary, // can be an array of JournalEntryPage data
            };
            const journal = JournalEntry.implementation.create(data);
        });
});
