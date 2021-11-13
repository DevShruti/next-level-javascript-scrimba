//**Classes Challenge**:

//Create a class Player with the following:
//- Add a Name and Country properties
//- Add a function that when it runs should print into the console ("Messi was born in Argentina");
//- Make sure to adapt this function to receive dynamic Names and Clubs.

//Create a Subclass called TennisPlayer that extends from the class Player
//- Add a new property Age.
//- Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
//- Make sure the Name and Age are dynamic.


// data.js

export class Player {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }

    game(name, country) {
       console.log(` ${this.name} was born in ${this.country}`)
    }
}
 export class TennisPlayer extends Player {
            constructor(name, country, age) {
            super(name, country);
            this.age = age; }
            tennisGame(age) {
                console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`);
            }    

 }      


 // index.js

 import { Player , TennisPlayer } from './data.js';

let player = new Player('VIrat' , 'India');

player.game()

// VIrat was born in India

const roger = new TennisPlayer( "Roger Federer", "Spain", 38)

roger.tennisGame()

// Roger Federer is 38 years old and knows how to play Tennis