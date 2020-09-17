document.addEventListener("DOMContentLoaded", function (e) {
    let player1_ints = document.querySelectorAll(".player1_ints");
    let player1_sum = document.getElementById("player1_sum");

    player1_ints.forEach(function (player1_int) {
        player1_int.addEventListener('change', function (e) {
            sum = 0;
            for (let i = 0; i < player1_ints.length; i++) {
                sum += Number(player1_ints[i].value);
            }
            player1_sum.value = sum;
        });
    });

    let times_thrown = 0;
    let throw_dices_button = document.getElementById("throw_dices_button")
    console.log(throw_dices_button);
    throw_dices_button.addEventListener("click", function (e) {
        let dice_value = document.querySelectorAll(".dice_value");
        let checkbox = document.querySelectorAll(".checkbox")
        for (i = 0; i < 5; i++) {
            if (!checkbox[i].checked) {
                let random = Math.floor(Math.random() * 6) + 1;
                dice_value[i].innerHTML = random;
            }
        }
        times_thrown++;
        if (times_thrown >= 3) {
            throw_dices_button.disabled = true;
        }

    });
});