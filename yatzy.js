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
        console.log('done');

    }*/
    //lägg till andra tärningsmetoder här, fullhouse osv.. 
    
}

//--------------------class gameBoard -----------------------------

class Gameboard {
    constructor(){
        //this.sum = this.calculateSum();
        //this.bonus = this.checkBonus();
    }

    calculateSum(){
        let calc_tds = document.querySelectorAll('input.player1Top')
        let player1_sum = document.getElementById('player1_sum')
        calc_tds.forEach(function(element){
             element.addEventListener('change', function(e){ 
             player1_sum.value = Array.from(calc_tds).reduce((acc, curr) => 
             acc + Number(curr.value), 0)
            })
        })
    }

    checkBonus(){
        let player1_bonus = document.getElementById('player1_bonus');
        if(player1_sum.value >= 63){
            player1_bonus.value = 50;
        } else{
            player1_bonus.value = 0;
        }
    }
    calculateTotalSum(){
        let calc_tds = document.querySelectorAll('input.player1Bottom')
        let player1_TotalSum = document.getElementById('totalSumPlayer1')
       // let currentTopSum = document.query('#player1_sum'); FORTSÄTTHÄR
        console.log(currentTopSum);
        calc_tds.forEach(function(element){
             element.addEventListener('change', function(e){ 
             player1_TotalSum.value = Array.from(calc_tds).reduce((acc, curr) => acc + Number(curr.value), 0)
            })
        })
    }
        
        
        
}



   

//knappen som kastar tärning
    let throwDiceButton = document.getElementById('throwDice');
    
    

    //håller koll på antal slag en spelare har per runda
    let timesThrown = 0; 
    let round = 1;

    let game = new Gameboard();
    game.calculateSum();
    game.calculateTotalSum();
    
    // när knappen trycks uppdateras gameBoard och tärningsformuläret. 
    throwDiceButton.addEventListener('click', function(element){ 
    
    let newDice = new Dice();
    //let game = new Gameboard();

       
    });

    // klar knappen: enablar kastknappen igen och uppdaterar antal kast till 3
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