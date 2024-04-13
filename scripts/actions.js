Hooks.once("ready", () => {
    console.log("---------------LANCER ACTION REF----------------------");
    try {
        game.journal.getName('Actions').delete()
      } catch (error) {}
    const actions = [];
    fetch("https://raw.githubusercontent.com/massif-press/lancer-data/master/lib/actions.json")
        .then((response) => response.json())
        .then((json) => {
            let i = 0;
            json.forEach((actiondata) => {
                actions[i] = { type: "text", name: actiondata.name, text: { content: actiondata.detail } };
                i++;
            });
            const data = {
                name: "Actions",
                pages: actions, // can be an array of JournalEntryPage data
            };
            const journal = JournalEntry.implementation.create(data);
        });
});
