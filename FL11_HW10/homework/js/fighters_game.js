class Fighter {
    constructor(obj){
        let { name, damage, hp, agility } = obj;
        let wins = 0,
            loses = 0;
        const health = obj.hp;

        this.getName = () => name;
        this.getDamage = () => damage;
        this.getAgility = () => agility;
        this.getHealth = () => hp;
        this.attack = (obj) => {
            const top = 100;
            const probability = top - obj.getAgility();
            const success = () => {
                obj.dealDamage(this.getDamage());
                let message = `${this.getName()} make ${this.getDamage()} damage to ${obj.getName()}`;
                console.log(message);
            }
            const fail = () => {
                console.log(`${this.getName()} attack missed`);
            }
            Math.random() * top < probability ? success() : fail();
        }
        this.dealDamage = (damage) => {
            const hpLeft = hp - damage;
            hp = hpLeft < 0 ? 0 : hpLeft;
        }
        this.heal = (num) => {
            const changedHp = hp + num;
            hp = changedHp > health ? health : changedHp;
        }
        this.logCombatHistory = () => {
            const message = `Name: ${this.getName()}, Wins: ${wins}, Losses: ${loses}`;
            console.log(message);
        }
        this.addWin = () => {
            wins++;
        }
        this.addLoss = () => {
            loses++;
        }

    }
}

const battle = (obj, obj2) => {

    const endFight = 0;

    const isAlive = (obj) => {
       if(obj.getHealth() > endFight) {
           return true;
       } else {
           console.log(`Fighter ${obj.getName()} is dead`);
           return false;
       }
    } 

    const isWinner = () => {
        const winner = obj.getHealth() > obj2.getHealth() ? obj : obj2;
        const loser = obj.getHealth() > obj2.getHealth() ? obj2 : obj;
        
        winner.addWin();
        loser.addLoss();
           
        console.log(`The winner is ${winner.getName()}`);
    } 

    if(isAlive(obj) && isAlive(obj2)) {

        while(obj.getHealth() > endFight && obj2.getHealth() > endFight) {

            obj.attack(obj2);

            if(obj2.getHealth() === endFight) {
                break;
            }

            obj2.attack(obj);
        }

        isWinner();
    }
} 

const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const myFighter2 = new Fighter({name: 'Jack', damage: 10, hp: 120, agility: 60});

battle(myFighter, myFighter2);