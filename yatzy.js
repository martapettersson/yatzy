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
    /*
    //metod för att uppdatera ny runda: få tre nya kast. ttimesThrown = 0;
    uppdateRound(){
        denna ligger i globala scopet nu, skulle det fungera att lägga den i en metod här?

    }*/

    //lägg till andra tärningsmetoder här, fullhouse osv.. 
    
}

//--------------------class gameBoard -----------------------------

class Gameboard {
    constructor(){
        this.gameState = {
            currentPlayer: "player1",
            timesThrown: 0,
            players: {
                player1: {
                    rounds: 0
                },
                player2: {
                    rounds: 0
                }
            }
        }
        //this.sum = this.calculateSum();
        //this.bonus = this.checkBonus();
    }

    setSumListener(player){
        let table = document.getElementById('main')
        let player1_sum = document.getElementById(`player${player}_sum`)
        let calc_tds = document.querySelectorAll(`input.player${player}Top`)
        let player1_bonus = document.getElementById(`player${player}_bonus`);
        let calc_tds2 = document.querySelectorAll(`input.player${player}Bottom`)
        let player1_TotalSum = document.getElementById(`totalSumPlayer${player}`)

        main.addEventListener('change', function(e){ 

            player1_sum.value = Array.from(calc_tds).reduce((acc, curr) => 
            acc + Number(curr.value), 0)

            if(player1_sum.value >= 63){
                player1_bonus.value = 50;
            } else{
                player1_bonus.value = 0;
            }

            player1_TotalSum.value = Array.from(calc_tds2).reduce((acc, curr) => acc + Number(curr.value), 0) + 
            Number(player1_bonus.value) + Number(player1_sum.value)

        })
    }    
        
}
    
    //håller koll på antal slag en spelare har per runda
    let timesThrown = 0; 
    let round = 1;

    let game = new Gameboard();
    game.setSumListener(1);
    
    //knappen som kastar tärning
    let throwDiceButton = document.getElementById('throwDice');
    // när knappen trycks uppdateras tärningsformuläret. 
    throwDiceButton.addEventListener('click', function(element){ 
         newDice = new Dice(); 
    });

    // klar-knappen: avslutar rundan: enablar kastknappen igen och uppdaterar antal kast till 3
    //kan man flytta delar av detta till classer istället? ja det kan man flytta allt utom event-listerner.
    //håll koll på vem som spelar genom objetet. börja med att sätt spelare till. töm alla rutor. 
    let doneButton = document.getElementById('doneButton');
    doneButton.addEventListener('click', function(){
        console.log('done');
        throwDiceButton.disabled = false;
        timesThrown = 0;
        round++;
        console.log('round:' + round);
        if(round === 15){
            let messageHolder = document.getElementById('messageHolder');
            let gameOverMessage = document.createElement('p');
            gameOverMessage.innerHTML = 'game Over';
            messageHolder.append(gameOverMessage);
            
        }

    });

    
    
});