document.addEventListener("DOMContentLoaded", function (e) {
    let player1Sum = document.getElementById("player1_sum");
    let player1Bonus = document.getElementById("player1_bonus")
    let throwDicesBtn = document.getElementById("throw_dices_button")
    let throwsLeft = document.getElementById("throws_left")
    let pictureArray = 

    throwsLeft.innerHTML = 3; //antalet tärningskast från början
    throwDicesBtn.addEventListener("click", function (e) { // om man klickar på throwDiceBtn hände följande:
        
        let checkbox = document.querySelectorAll(".checkbox")
        let diceValue = document.getElementsByClassName("dice_value");
        diceValue = Array.from(diceValue); //gör en array av diceValue
        // let playersDiceValues = [];
        // let saveBtn = document.getElementById("save_button");

        for (i = 0; i < 5; i++) { //fem st tärningar, lika många kryssrutor
            
            if (!checkbox[i].checked) { // ifall kryssruta inte är ikryssad då ska vi göra följande:
                let randomDiceNbr = Math.floor(Math.random() * 6) + 1; // randomDiceNbr blir random nummer mellan 1-6
                diceValue[i].innerHTML = randomDiceNbr; //ändrar innerHTML på det index av diceValue vi är på till randomDiceNbr 
            }
            //vad händer när kryssruta är ikryssad? .filter?
            // saveBtn.addEventListener
            // if (checkbox[i].checked) {
            //     // console.log("hej");

            //     playersDiceValues.push(diceValue[i].innerHTML);
            //     console.log(playersDiceValues);

            // }

        }

        throwsLeft.innerHTML--;
        if (throwsLeft.innerHTML <= 0) {
            throwDicesBtn.setAttribute("disabled", "");
        }

    });
    
    // Hela DOMen lyssnar efter eventet "change" (vi ska ändra på värdena i spelare 1, 1-6)
    document.addEventListener('change', function (e) {

        let player1Ints = document.querySelectorAll(".player1_ints");
        player1Ints = Array.from(player1Ints); //gör variabeln till en array
        
        //oneToSix = ny array som innehåller siffrorna som player 1 fått i sina 1-6 fält
        let oneToSix = player1Ints.map((value, index, array) => {
            return parseInt(value.value);
        });

        //player1OneToSix är en array av oneToSix. 
        //här räknar vi mha reduce metoden ut player1Sum. funktion går igenom varje värde i arrayen.
        //Ex, spelaren har fått 1,2,3,4,5,6 
        // 1a vändan: 0 + 1 = 1, 2a vändan: 1 + 2 = 3, 3e vändan: 3 + 3 = 6, 
        // 4e vändan: 6 + 4 = 10, 5e vändan: 10 + 5 = 15, 6e vändan: 15 + 6 = 21
        // Det är summan. Alltså funktionen gör samma som att summera alla värden i arrayen! 1+2+3+4+5+6
        let player1OneToSix = oneToSix.reduce((acc, currValue, currIndex, array) => {
            return acc + currValue;
        }, 0);
        player1Sum.value = player1OneToSix;

        //skriver ut bonus om spelaren får 63 eller högre i 1-6
        if (player1OneToSix >= 63) {
            player1Bonus.value = 50;
        }
        else {
            player1Bonus.value = 0;
        }
    });

});