document.addEventListener("DOMContentLoaded", function (e) {
    let player1_ints = document.querySelectorAll(".player1_ints");
    let player1_sum = document.getElementById("player1_sum");

    player1_ints.forEach(function (player1_int) {
        player1_int.addEventListener('change', function (e) {
            let sum = 0;
            for (let i = 0; i < player1_ints.length; i++) {
                sum += Number(player1_ints[i].value);
            }
            player1_sum.value = sum;

            let player1_bonus = document.getElementById("player1_bonus");
            if (sum>=63){
                player1_bonus.value = 50;
            }
            else {
                player1_bonus.value = 0;
            }
        });
    });
    let throws_left=3;
    let throw_dices_button = document.getElementById("throw_dices_button")
    throw_dices_button.addEventListener("click", function (e) {
        let dice_value = document.querySelectorAll(".dice_value");
        let checkbox = document.querySelectorAll(".checkbox")
        for (i = 0; i < 5; i++) {
            if (!checkbox[i].checked) {
                let random_dice_number = Math.floor(Math.random() * 6) + 1;
                dice_value[i].innerHTML = random_dice_number;
            }
        }
        throws_left--;
        if (throws_left <= 0) {
            throw_dices_button.setAttribute("disabled", "");
        }

    });
});