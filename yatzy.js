document.addEventListener("DOMContentLoaded", function (e) {
    let player1 = document.getElementById("player1");
    let player1_sum = document.getElementById("player1_sum");
    let player1_bonus = document.getElementById("player1_bonus");

    player1_sum.addEventListener("keyup", function (event) {
        let player1_ints = document.querySelectorAll('input[class="player1"]')
        let sum = 0;

        for (let i = 0; i < player1_ints.length; i++) {

            sum += Number(player1_ints[i].value);
            player1_sum.value = sum;

            if (sum >= 63) {
                player1_bonus.value = 50;
            }
            else {
                player1_bonus.value = 0;
            }

        }

    });

});