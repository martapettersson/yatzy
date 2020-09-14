document.addEventListener("DOMContentLoaded", function (e) {

    //nodelist med värdena från player1: ones till sixes.
    let oneToSix = document.querySelectorAll("input.calc");

    //input-elementet med id "player1_sum"
    let player1Sum = document.getElementById("player1_sum");

    //input-elementet med id "player1_bonus"
    let player1Bonus = document.getElementById("player1_bonus");

    //förändring i DOM, nollställer sum.
    document.addEventListener('change', function (e) {
        let sum = 0;
        //lägger ihop värdena i oneToSix
        oneToSix.forEach(function (element) {
            sum += Number(element.value);
            player1Sum.value = sum;
        });
        
        //ger bonus om summan är 63 eller högre.
        if (sum >= 63) {
            player1Bonus.value = 50;
        } else {
            player1Bonus.value = 0;
        }
    });

    
});