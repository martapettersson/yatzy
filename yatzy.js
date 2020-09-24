document.addEventListener("DOMContentLoaded", function (e) {

    //----------------class för en tärning----------------
    class Die {
        constructor() {
            this.value = this.new_value();
        }

        new_value() {
            return Math.floor(Math.random() * 6) + 1;
        }
    }
    //--------------class för tärningsuppsättning--------------
    class Dice {
        //skapar en array som fylls med tärningsvärden
        constructor(size = 5) {
            this.dice = [];
            for (let i = 0; i < size; i++) {
                this.dice.push(new Die());
            }
        }
        //skapar tärningsvärden för de tärningar som ej är icheckade
        throwDice() {
            let diceValue = document.querySelectorAll('.dice_value');
            let checkbox = document.querySelectorAll('.checkbox');
            //loopar igenom alla checkboxar/tärningsvärden, om inte boxen på nuvarande index är kryssad: 
            //ge värdet på samma index ett random nummer från motsvarande index i objektets dice-array. 
            for (let i = 0; i < 5; i++) { 
                if (!checkbox[i].checked) {
                    let random = this.dice[i].value;
                    diceValue[i].innerHTML = random;
                }
            }
        }    
    }
    //--------------------class gameBoard -----------------------------
    class Gameboard {
        constructor() {
            this.gameState = {
                currentPlayer: 'player1',
                timesThrown: 0,
                players: {
                    player1: {
                        round: 0
                    },
                    player2: {
                        round: 0
                    }
                }
            }
        }
        
        setSumListener(player) {
            let table = document.getElementById('main')
            let player_sum = document.getElementById(`player${player}_sum`)
            let calc_top = document.querySelectorAll(`input.player${player}Top`)
            let player_bonus = document.getElementById(`player${player}_bonus`);
            let calc_bottom = document.querySelectorAll(`input.player${player}Bottom`)
            let player_TotalSum = document.getElementById(`totalSumPlayer${player}`)

            table.addEventListener('change', function (e) {
                //Räknar ihop den totala summan av den övre delen (ettor till sexor)
                player_sum.value = Array.from(calc_top).reduce((acc, curr) => acc + Number(curr.value), 0)

                //Räknar ut eventuell bonus
                if (player_sum.value >= 63) {
                    player_bonus.value = 50;
                } else {
                    player_bonus.value = 0;
                }

                //Räknar ut allt genom att lägga ihop alla värden i den NEDRE DELEN (calc_bottom) + BONUS + SUMMAN (övre delen)
                player_TotalSum.value = Array.from(calc_bottom).reduce((acc, curr) => acc + Number(curr.value), 0) +
                    Number(player_bonus.value) + Number(player_sum.value)
            })
        }

         // Uppdaterar antal gånger nuvarande spelare har slagit. När man slagit tre slag fungerar inte knappen längre.
        updateThrow(){
            this.gameState.timesThrown++;
            if (this.gameState.timesThrown === 3) { 
                throwDiceButton.disabled = true;
            }
        } 

        endRound() {
            //kontrollerar vad som händer när man trycker på klar-knappen och lämnar över sin tur.
            let currentPlayer = this.gameState.currentPlayer
            //lägg till +1 på rounds för den spelaren som just avslutade sin tur (currentPlayer)
            this.gameState.players[currentPlayer].round++;
            //loggar att currentPlayer just avslutande sin x tur.
            console.log(currentPlayer + '\'s round: ' + this.gameState.players[currentPlayer].round + ' finished');
            //kollar om spelet är över
            if (this.gameState.players.player2.round === 15) {
                console.log('Game over')
            } else {
                //resetta timesThrown så att nästa spelare kan kasta tärningen 3 gånger.
                this.gameState.timesThrown = 0;
                //ser till att nästa spelare kan börja slå.
                throwDiceButton.disabled = false;
                if (this.gameState.currentPlayer === 'player1') {
                    this.gameState.currentPlayer = 'player2'
                } else {
                    this.gameState.currentPlayer = 'player1';
                }

                //tar bort alla nuvarande tärningsvärden från skärmen och uncheckar alla checkboxar så att nästa 
                //spelare kan börja sin runda.
                let diceValue = document.querySelectorAll('.dice_value');
                let checkbox = document.querySelectorAll('.checkbox');
                for (let i = 0; i < 5; i++) {
                    diceValue[i].innerHTML = "";
                    checkbox[i].checked = false;
                }
            }
        }
    }

    const game = new Gameboard();
    game.setSumListener(1);
    game.setSumListener(2);

    //knappen som kastar tärning
    let throwDiceButton = document.getElementById('throwDice');

    // när knappen trycks uppdateras tärningsformuläret. 

    throwDiceButton.addEventListener('click', function () {
        let dice = new Dice();
        dice.throwDice();
        game.updateThrow();
    });

    // klar-knappen. avslutar rundan genom att köra metoden endRound.

    let doneButton = document.getElementById('doneButton');
    doneButton.addEventListener('click', function(){
        game.endRound();
    });


});
