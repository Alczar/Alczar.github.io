//BASE
/*script.js*/
export * from 'cardClass.js';
//CARDID
class cardId {
    constructor(category, number) {
        if (category.length == 3 && number.length == 4) {
            this.category = category;
            this.number = number;
            this.id_set = category + number;
        } else {
            console.log('Yo!, syntax error on ID.');
        }
    }
}

let test1 = new cardId('000', 'aaaa');
console.log(test1.id_set);

//CARDLORE
class cardLore {
    constructor(name, lore) {
        if (name.length <= 15) {
            if (lore.length <= 60) {
            this.name = name;
            this.lore = lore;
            } else {
                console.log('Das a chonky lore.');
            }
        } else {
             console.log('Das a chonky name.');
        }
    }
}

let test2 = new cardLore('Common Axe', 'A dull yet trusty axe, you may use it to defend yourself.');
console.log(test2.lore);
