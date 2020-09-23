document.addEventListener("DOMContentLoaded", function (e) {

//----------------class för en tärning----------------
class Die {
    constructor(){
        this.value = this.new_value();
    }

    new_value(){
        return Math.floor(Math.random() * 6) +1;
    }
}
 //--------------class för tärningsuppsättning---------
class Dice {
    constructor(){
        this.throw = this.throwDice();
    }

    //metod som skriver ut tärningsvärden för de tärningar som ej är icheckade
    //uppdaterar även hur många slag spelar har kvar i denna omgång
    throwDice(){
        this.diceValue = document.querySelectorAll('.dice_value');
        this.checkbox = document.querySelectorAll('.checkbox');

        for(let i = 0; i <5; i++){ //loopar igenom alla checkboxar/tärningsvärden, om inte boxen på nuvarande index är kyssad: ge värdet på samma index ett random nummer
            if(!this.checkbox[i].checked){
                let random = new Die().value; 
                this.diceValue[i].innerHTML = random;
            }
        }

        timesThrown++;
        if(timesThrown >= 3){ // när man slagit tre slag fungerar inte knappen längre
            throwDiceButton.disabled = true;
        } 
    }
    //lägg till andra tärningsmetoder här, fullhouse osv.. 
    
}

//--------------------class gameBoard -----------------------------

class Gameboard {
    constructor(){
        this.sum = this.calculateSum();
        this.bonus = this.checkBonus();
    }

    calculateSum(){
        let oneToSixCollection = document.querySelectorAll('input.player1');
        let oneToSixCollToArr = Array.from(oneToSixCollection);
        let oneToSixArray = oneToSixCollToArr.map((num) => { // behöver ej göra om med map?
        return Number(num.value);

        });
        let reducedArray = oneToSixArray.reduce((sum, currValue) => {
            return sum + currValue;
        }, 0);

        let player1_sum = document.getElementById('player1_sum');
        player1_sum.value = reducedArray;
    }

    checkBonus(){
        let player1_bonus = document.getElementById('player1_bonus');
        if(player1_sum.value >= 63){
            player1_bonus.value = 50;
        } else{
            player1_bonus.value = 0;
        }
    }
}



   //knappen startar allt
    let throwDiceButton = document.getElementById('throwDice');

    //håller koll på antal slag en spelare har per runda
    let timesThrown = 0; 

    // let gamee = new Gameboard();
    
    // när knappen trycks uppdateras gameBoard och tärningsformuläret. 
    throwDiceButton.addEventListener('click', function(element){ 
    
    let newDice = new Dice();
    let game = new Gameboard();
       
    });
    
});