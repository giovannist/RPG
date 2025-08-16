class BaseNPC {
    name;
    dialogue;
    location;

    getDialogue() {
        return this.dialogue;
    }
}

class TavernNPC extends BaseNPC {
    name = "Alexander"
    dialogue = "salve rpz"
    location = "Tavern";
    type = "NPC"
}

const tavernNPC = new TavernNPC