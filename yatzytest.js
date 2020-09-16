document.addEventListener("DOMContentLoaded", function (e) {
    let player1Sum = document.getElementById("player1_sum");
    let player1Bonus = document.getElementById("player1_bonus");
    let diceCheckboxHTMLCol = document.querySelectorAll("td.dice");
    let throwDiceBtn = document.getElementById("throwDiceButton")


    document.addEventListener('change', function (e) {
        let otsHTMLCol = document.querySelectorAll("input.calc"); //gör en NodeList av alla <input> med class="calc"
        let otsElArr = Array.from(otsHTMLCol); //gör en array av elementen i NodeList
        let otsVal = otsElArr.map((element, index, array) => { //gör en array av värden ur elementen
            return parseInt(element.value);
        });

        let otsSum = otsVal.reduce((acc, currValue, currIndex, array) => {
            return acc + currValue;
        }, 0);
        player1Sum.value = otsSum;

        //ger bonus om summan är 63 eller högre.
        if (otsSum >= 63) {
            player1Bonus.value = 50;
        } else {
            player1Bonus.value = 0;
        }
    });

    function throwDice() {
        let dieSum = Math.floor(Math.random() * 6) + 1;
        return dieSum;
    }
    throwDiceBtn.addEventListener('click', function (e) {
        let diceArray = [];
        for (let i = 0; i < diceCheckboxHTMLCol.length; i++) {
            diceArray.push(throwDice());
        }
        //fortsätt försöka lösa nedan
        console.log(diceArray);
        for (let val of diceArray) {
            let j = 1;
            console.log("j:", j);
            console.log("val:", val);
            j++;

        }
    })


});