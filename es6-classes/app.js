//CLASSES ES6


//CLASSES are simply constructor functions.

//ES6
class Wizard {
    constructor(name, hp, spells){
        this.name = name;
        this.hp = hp;
        this.spells = spells;
    }
    
    attack(Wizard, spell){
        //code
    }
}


class Spell {
    constructor(name, damage){
        this.name = name;
        this.damage = damage;
    }
}


let lumos = new Spell ("lumos", 20);
let alohamora = new Spell ("alohamora", 10);
let patronum = new Spell ("patronum", 30);


let harryPotter = new Wizard("Harry Potter", 100, [lumos, patronum]);
