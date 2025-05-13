//CLASS PRACTICE
/*script.js*/
//FILE#001
class ObjectId {
    constructor(number, category) {
        //let x = toString(number);
        if (number.length == 3 && category.length == 4) {
            this.category = category;
            this.number = number;
            this.idSet = number + category;
        } else {
            throw new Error('Yo!, syntax error on ID.');
        }
    }
}

//CARDLORE
class ObjectLore {
    constructor(name, lore) {
        if (name.length <= 20) {
            if (lore.length <= 100) {
            this.name = name;
            this.lore = lore;
            } else {
                throw new Error('Das a chonky lore.');
            }
        } else {
             throw new Error('Das a chonky name.');
        }
    }
}

//FILE#002
class ObjectSet {
    constructor(setId, setLore, vit, atk, def) {
        if (setId instanceof ObjectId) {
            this.id = setId.idSet
        } else {
            throw new Error('ID not Valid Object.');
        }
        if (setLore instanceof ObjectLore) {
            this.name = setLore.name;
            this.lore = setLore.lore;
        } else {
            throw new Error('Lore not Valid Object.');
        }
        this.vit = vit;
        this.atk = atk;
        this.def = def;
    }
}

//FILE#003
class MagicObjectSet extends ObjectSet {
    constructor(setId, setLore, vit, atk, def, magAtk, magDef) {
        super(setId, setLore, vit, atk, def);
        this.magAtk = magAtk;
        this.magDef = magDef;
    }
}
    

//FILE#004
let test1_1 = new ObjectId('000', 'AAAA');
let test1_2 = new ObjectLore('Common Axe', 'A dull yet trusty axe, you may use it to defend yourself.');
let test1 = new ObjectSet(test1_1, test1_2, 10, 10, 10, 10, 10);

let test2_1 = new ObjectId('001', 'AAAA');
let test2_2 = new ObjectLore('Magic Common Axe', 'A dull yet trusty axe, it is imbued with some sort of magic, you may use it to defend yourself.');
let test2 = new MagicObjectSet(test2_1, test2_2, 10, 10, 10, 1, 1);

console.log('Id: ' + test1.id);
console.log('Name: ' + test1.name);
console.log('Lore: ' + test1.lore);
console.log('Attack: ' + test1.atk);
console.log('turururururururururururururururururururururu');
console.log('Id: ' + test2.id);
console.log('Name: ' + test2.name);
console.log('Lore: ' + test2.lore);
console.log('Attack: ' + test2.atk);
console.log('Magic Attack: ' + test2.magAtk);