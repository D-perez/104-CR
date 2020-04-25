//obj constructor

class Charcter{
    constructor(id,name,energy){
        this.id=id;
        this.name=name;
        this.energy=energy;
    }

    //display()
    display=function(){
        console.log(`${this.name} ${this.energy}`);
        document.getElementById('info-'+this.id).innerHTML=`Name: ${this.name} <br> Energy: ${this.energy}`
    }
    //attack()
    attack=function(opponent, item){
        let newEnergy=opponent.energy - item.iPoints;
        opponent.energy=newEnergy;
        opponent.display();
        document.getElementById('console').innerHTML=`
            Item: <img class="item-img" src="${item.iImg}">
        `;

        //~~~CR challenge~~~ ex. yoshi is attacking blue yoshi with the <img>
        
        //display game over 
        if (opponent.energy <= 0){
            document.getElementById('info-'+opponent.id).innerHTML=`game over`
            document.getElementById('info-'+this.id).innerHTML=`you win`
        }
    }
}

const c1= new Charcter("c1","yoshi",100);
const c2= new Charcter("c2","blue-yoshi", 100);

c1.display()
c2.display()

class Items{
    constructor(iName,iPoints,iImg){
        this.iName=iName;
        this.iPoints=iPoints;
        this.iImg=iImg;

    }
}

const item1= new Items("Goomba", 20,"img/goomba.webp")
const item2= new Items("shell", 10,"img/shell.jpeg")
const item3= new Items("banana", 5,"img/Banana.png")
let items=[item1,item2,item3]

//random selection

function Select(){
    let selection = Math.floor(Math.random()*3);

    return items[selection];

}

console.log(Select())