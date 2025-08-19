class BaseLocation {
    name;
    description;
    options;
    getLocationInfo() {
        console.log(this.name);
        console.log(this.description)
        console.log(this.options);
    }
}

class Tavern extends BaseLocation {
    name = "Tavern"
    description = "It's a tavern."
    options = [
        { name: "Shop", click: () => { nextLocation("Shop") } },
        { name: "City Center", click: () => { nextLocation("City Center") } }
    ]
    specifics = [
        { type: "NPC", content: tavernNPC }
    ]
}

class Shop extends BaseLocation {
    name = "Shop";
    description = "It's a Shop";
    options = [
        { name: "Tavern", click: () => { nextLocation("Tavern") } },
        { name: "City Center", click: () => { nextLocation("City Center") } }
    ]
}

class CityCenter extends BaseLocation {
    name = "City Center";
    description = "It's the City Center";
    options = [
        { name: "Tavern", click: () => { nextLocation("Tavern") } },
        { name: "Shop", click: () => { nextLocation("Shop") } },
        { name: "Forest", click: () => { nextLocation("Forest") } }

    ]
}

class Forest extends BaseLocation {
    name = "Forest";
    description = "It's a Forest";
    options = [
        { name: "City Center", click: () => { nextLocation("City Center") } },
        { name: "Deep Forest", click: () => { nextLocation("Deep Forest") } }
    ]
    specifics = [
        { type: "Battle", text: "Find Creatures", enemies: rat }  //Type, Text, Enemies
    ]
}

class DeepForest extends BaseLocation {
    name = "Deep Forest";
    description = "Deeper than before"
    options = [
        { name: "Forest", click: () => { nextLocation("Forest") } }
    ]
    specifics = [
        { type: "Battle", text: "Find MORE Creatures", enemies: bigRat }  //Type, Text, Enemies
    ]
}


const tavern = new Tavern
const shop = new Shop;
const cityCenter = new CityCenter;
const forest = new Forest;
const deepForest = new DeepForest;

function nextLocation(location) {
    switch (location) {
        case "Tavern":
            updateLocationInterface(tavern.name, tavern.description, tavern.options, tavern.specifics)
            break;
        case "Shop":
            updateLocationInterface(shop.name, shop.description, shop.options)
            break;
        case "City Center":
            updateLocationInterface(cityCenter.name, cityCenter.description, cityCenter.options)
            break;
        case "Forest":
            updateLocationInterface(forest.name, forest.description, forest.options, forest.specifics)
            break;
        case "Deep Forest":
            updateLocationInterface(deepForest.name, deepForest.description, deepForest.options, deepForest.specifics)
            break;
        default:
            console.log("couldn't find location")
    }
}