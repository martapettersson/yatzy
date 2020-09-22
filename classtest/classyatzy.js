document.addEventListener("DOMContentLoaded", function (e) {

  let throwDiceBtn = document.getElementById("throwDiceButton");

  //Tärningsklass, slår en tärning och returnerar värdet till klassen Dice.
  class Die {
    constructor() {
      this.value = this.newValue();
    }
    newValue() {
      return Math.floor(Math.random() * 6) + 1;
    }
  }


  class Dice {

    constructor(size = 5) {
      this.dice = []; //array av tärningsvärden
      this.diceValues = [0, 0, 0, 0, 0, 0, 0]; //array med antalet tärningar av varje nummer 1-6 (index 0 används ej).

      //nån form av checkbox if-statement? metod som returnerar true/false?

      for (let i = 0; i < size; i++) {
        this.dice.push(new Die());
      }

      this.calculateDiceValues();

    }

    calculateDiceValues() {
      this.dice.map(currentValue => {
        this.diceValues[currentValue.value]++;
      });
    }
    //lägg till metoder för att kontrollera par, två par, triss, fyrtal, kåk, stegar, yatzy.

  }

  //class Player?
    /* spelarnamn, poäng i de olika fälten */



  //class Game?
    /* (turordning), antal kast, nollställning av antal kast, summering av delsumma, ev bonus, totalsumma */




  //lägg i class Game? Player? Dice?
  throwsLeft.innerHTML = 3;

  //lägg i class Game? Player?
  throwDiceBtn.addEventListener("click", function (e) {
    let test = new Dice;
    console.log(test);
    throwsLeft.innerHTML--;

    if (throwsLeft.innerHTML <= 0) {
      throwDiceBtn.setAttribute("disabled", "");
    }



  });






});