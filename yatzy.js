document.addEventListener("DOMContentLoaded", function(e) {

    
    class GameState{
        constructor(){
            this.checkboxes = document.querySelectorAll('input[type="checkbox"]')
            this.state = {
                remainingThrows: 3,
                round: 0
            };
            
        }

        updateThrows(){
            let dicesLeft = document.getElementById('remaining-throws');
            let diceTrigger = document.getElementById('dice-trigger');  
            if (this.state.remainingThrows === 3){
                this.checkboxes.forEach(function(element){
                    element.disabled = false;
                })
            }
            if(Array.from(this.checkboxes).filter(e => e.checked === false).length > 0){
                this.state.remainingThrows -= 1
                dicesLeft.innerHTML = this.state.remainingThrows
            }
              
            if(this.state.remainingThrows === 0){
                this.checkboxes.forEach(function(element){
                    element.disabled = true;
                    element.checked = false;
                })
                diceTrigger.disabled = true;
            }
        }

        updateRound(){
            let dicesLeft = document.getElementById('remaining-throws');
            let diceTrigger = document.getElementById('dice-trigger');  
            this.state.remainingThrows = 3;
            dicesLeft.innerHTML = this.state.remainingThrows
            this.checkboxes.forEach(function(element){
                element.disabled = true;
                element.checked = false;
            })
            diceTrigger.disabled = false;

        }

        calculateSum(){
            let bonus_element = document.getElementById('player1_bonus');
            let one_to_six_td = document.querySelectorAll(`input[class="player1"]`)
            let player1_sum = document.getElementById('player1_sum')

            let sum = Array.from(one_to_six_td).reduce((acc, curr) => acc + Number(curr.value), 0)

            player1_sum.value = sum;

            if (sum >= 63){
                bonus_element.value = 50;
            } else {
                bonus_element.value = 0;
            }
        }
        
    }

    class Interface {

        CheckBoxStatus (){
            let checkboxes = document.querySelectorAll('input[type="checkbox"]')
            // return Array.from(checkboxes).filter(e => e.checked === false)

            //skicka index. kör map istället. returnerna index för att element som har 
            //e.checked === false
            return Array.from(checkboxes).map(function(element, index){
                if(element.checked === false){
                    return index
                }
            }).filter(e => e !== undefined)
        } 
        
        displayDiceValues (uncheckedArr, diceArr) {
            let checkboxes = document.querySelectorAll('input[type="checkbox"]')
            if (uncheckedArr && diceArr){
                for (let i = 0; i < uncheckedArr.length; i++){

                    console.log(uncheckedArr);
                    console.log(checkboxes[uncheckedArr[i]].id)
                    let id = checkboxes[uncheckedArr[i]].id.slice(9)

                    // let id = uncheckedArr[i].id.slice(9) 
                    document.querySelector(`span[id='dice-${id}']`).innerHTML = diceArr[i].value; 
                }   
            }else{
                document.querySelectorAll('span[class="dice"]').forEach(function(element){
                    element.innerHTML = "";
                })
            }
                      
        }
    }

    class Player {
        constructor(){
            this.player1 = {totalScore: 0};
        }
    }

    class Dice {
        constructor(size = 5) {
            this.dice = [];
            this.dice_values = [0, 0, 0, 0, 0, 0, 0];        
            for (let i = 0; i < size; i++) {
                this.dice.push(new Die());
        //     this.combinations = {
        //         pair: false,
        //         triple: true,
        // };
            }        
            this.calculateDiceValues();
        }

        checkCombinations(){
            //kör igenom alla metoder och kollar vilka kombinationer som fungerar: pushar true till objetet om det fungerar.
        }

        calculateDiceValues() {
            this.dice.map(current_value => {
                this.dice_values[current_value.value]++;
            })
        }

        checkFullHouse(){
            if (this.dice_values.includes(2) && this.dice_values.includes(3)){
                console.log(true + ' YAY FULL HOUSE');
            }else{
                console.log(false + ' inte full house');
            }
            console.log(this.dice_values);
        }
    
        checkFourOfaKind(){
            if(this.dice_values.includes(4)){
                console.log(true + ' YAY FOUR OF A KIND');
            } else{
                console.log(false + ' inte fyra av samma');
            }
        }

        //par, två par triss, liten stege, stor stege, chance, yatzy (5 av samma)

    }

    class Die {
        constructor() {
            this.value = this.new_value();
        }    
        new_value() {
            return Math.floor(Math.random() * 6) + 1;
        }
    }

    //compare-dice-array = [];
    const game = new GameState();
    const interface = new Interface();
    const dice = new Dice(5);

    const diceTrigger = document.getElementById('dice-trigger');
    const saveButton = document.getElementById('save-button');

    diceTrigger.addEventListener('click', function(){
        //gör så att man kan trycka på save.
        if(saveButton.disabled === true){
            saveButton.disabled = false;
        }
        // game.updateRoundAndThrow(); //håller koll på hur många slag man har, vilken runda man är på
        //den här ska uppdateras när värdet är. döp om till update gamestate
        let uncheckedArray = interface.CheckBoxStatus() //skapar en HTML-collection med alla checkboxar som är unchecked

        // let dice = new Dice(uncheckedArray.length); //skapar ett nytt dice-objekt med så många tärningar som det finns unchecked boxes.

        for (let index of uncheckedArray){
            dice.dice[index] = new Die()
        }

        //här kör man skapar man nya die-objekt och pushar dom till dice-objektets array. använd motsvarande index i checked.array
        interface.displayDiceValues(uncheckedArray, dice.dice) //skriver ut tärningsvärdena från dice-objektets dice-array på sidan.
        
        game.updateThrows()
        //ha möjlighet välj ett värde
        game.calculateSum()

    })

    saveButton.addEventListener('click', function(){
        game.updateRound()
        saveButton.disabled = true;
        interface.displayDiceValues();
    })
 
});

//
//behövs verkligen while-loopen
//var ska man sätta tillbaka rem
//var ska man kunna lägga till poäng?
//rundor, remaining throws ska uppdateras.
//välja kombinationer, var



//Den här delen sätter en eventlistener smo summerar ihop poängen för alla spelare.
//     loppar igenom varje spelare
//     let players = ['player1', 'player2', 'player3', 'player4']; //det här behöver inte vara en eventlistener som ligger på allt.

    //den här delen kontrollerar tärningsslagen. När man trycker på knappen skapas en tärningsklass med så många
    //tärningar som boxar som inte är icheckade. Ändra till klass. kolla vilka poäng-kombinationer som är möjliga.
  
    // checkboxes.forEach(function(element){ //resettar i firefox när man laddar sidan. behövs nog inte.
    //   element.disabled = true;
    //   element.checked = false;
    // })


//lägg till spelare. while-loop kanske? som styr flödet. 
//skapa objekt för varje spelare?
//while(current_player.round < 16)
// player1 = {
//     rounds: 15,
//     score: 
//     available_combinations: {
//         ones: false,
//         twos,
//         three
//     }
// }

 //updates the round and number of throws. if remaining throws is 3 when the round starts (initiated by the button click) the checkboxes are enabled.
        // updateRoundAndThrow(){
        //     //remaining throws - 1
        //     //r
        //     let remainingThrows = this.state.remainingThrows  
        //     let dicesLeft = document.getElementById('remaining-throws');

        //     if (remainingThrows === 3){ 
        //         this.checkboxes.forEach(function(element){
        //             element.disabled = false;
        //             element.checked = false;
        //         })
        //     }

        //     //kollar att det finns minst en checkbox vars checked-värde är false.
        //     if(Array.from(this.checkboxes).filter(e => e.checked === false).length > 0){
        //         this.state.remainingThrows -= 1        
        //         this.state.round++
        //     }

        //     if(this.state.remainingThrows === 0){
        //         this.state.remainingThrows = 3
        //     }

        //     dicesLeft.innerHTML = this.state.remainingThrows
        // }

        //calculates the sum of the top part of the form for player 1

                //disables the checkboxes when the player has 3 remaining throws. måste implementeras!
        // disableCheckboxes(){
        //     this.checkboxes.forEach(function(element){
        //         element.disabled = true;
        //     })
        // }