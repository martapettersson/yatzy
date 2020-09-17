document.addEventListener("DOMContentLoaded", function (e) {

    let throwDiceButton = document.getElementById('throwDice');
    let oneToSixCollection = document.querySelectorAll('input.player1');
    //console.log(oneToSixCollection);

    //lägg till eventlistener på alla tds, så fort yatzytabellen ändras uppdateras också summafältet + bonusfältet:
    oneToSixCollection.forEach(function(element){
        element.addEventListener('change', function(e){

            //skapa en ny array med map från oneToSixCollection (html collection)
            let oneToSixArr = Array.from(oneToSixCollection);
            let oneToSixArray = oneToSixArr.map((num) => {
            return Number(num.value);
            });
            console.log(oneToSixArray);

            // använd reduce för att få summarn från arrayen oneToSixArray och skriva ut den i sum:
            let reducedArray = oneToSixArray.reduce((sum, currValue) => {
                return sum + currValue;
            }, 0);
            console.log(reducedArray);

            //skriver ut summan i "sum"-fältet:
            let player1_sum = document.getElementById('player1_sum');
            player1_sum.value = reducedArray;

            //bonusfältet fylls i med 50 ifall summafältet är mer är 63:
            let player1_bonus = document.getElementById('player1_bonus');
            if(player1_sum.value >= 63){
                player1_bonus.value = 50;
            } else{
                player1_bonus.value = 0;
            }
         });
     });

    //add eventlistener på knappen. när knappen trycks ges random nummer till tillhörande labels
    let timesThrown = 0; //håller koll på antal slag
    throwDiceButton.addEventListener('click', function(element){
        let diceValue = document.querySelectorAll('.dice_value');
        let checkbox = document.querySelectorAll('.checkbox');
        for(i = 0; i <5; i++){ //loopar igenom alla checkboxar/tärningsvärden, om inte boxen på nuvarande index är kyssad: ge värdet på samma index ett random nummer
            if(!checkbox[i].checked){
                let random = Math.floor((Math.random() * 6)+1);
                diceValue[i].innerHTML = random;
            }
        }
        timesThrown++;
        if(timesThrown >= 3){ // när man slagit tre slag fungerar inte knappen längre
            throwDiceButton.disabled = true;
        } 
    });



    
    
    
    
    



    
    
    




    

    
    
    


});