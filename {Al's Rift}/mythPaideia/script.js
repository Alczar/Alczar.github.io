//MYTH PAIDEIA
/*script.js*/

//FILE#001
class ObjectBase {
    constructor(category, number, name, lore) {
        //let x = toString(number);
        if (!(category.length == 4 && number.length == 3)) {
            throw new Error('Yo!, syntax error on ID.');
        }
        if (!(name.length <= 20)) {
            throw new Error('Das a chonky name.');
        }
        if (!(lore.length <= 100)) {
            throw new Error('Das a chonky lore.');
        }
        //ID
        this.number = number;
        this.category = category;
        this.setId = category + number;
        //LORE
        this.name = name;
        this.lore = lore;
    }
}

//FILE#002
class ObjectSet {
    constructor(objectBase, vit, atk, def) {
        if (!(objectBase instanceof ObjectBase)) {
            throw new Error('ID not Valid Object.');
        }
        this.number = objectBase.number;
        this.category = objectBase.category;
        this.id = objectBase.setId;
        this.name = objectBase.name;
        this.lore = objectBase.lore;
        //
        this.vit = vit;
        this.atk = atk;
        this.def = def;
    }
}

let test1_1 = new ObjectBase('AAAA', '000', 'Common Axe', 'A dull yet trusty axe, you may use it to defend yourself.');
let test1 = new ObjectSet(test1_1, 10, 10, 10);

console.log('Id: ' + test1.id);
console.log('Name: ' + test1.name);
console.log('Lore: ' + test1.lore);
console.log('Attack: ' + test1.atk);











//JSTEST



