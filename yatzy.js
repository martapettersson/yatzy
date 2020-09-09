document.addEventListener("DOMContentLoaded", function(e) {
    let name_element = document.getElementById("name");
    let calc_button = document.getElementById("calc");
    let bonus_element = document.getElementById('player1_bonus');

    let players = ['player1', 'player2', 'player3', 'player4']; 

    calc_button.addEventListener("click", function(event) {

        
        for (let i = 0; i < players.length; i++) {

            let total = 0;
            let bonus_element = document.getElementById(`${players[i]}_bonus`);
            let sum_element = document.getElementById(`${players[i]}_sum`);
            let calc_tds = document.querySelectorAll(`input[class="${players[i]}"]`)

            for (let i = 0; i < calc_tds.length; i++) {
                total += Number(calc_tds[i].value)
            }

            sum_element.value = total;

            if (total >= 63){
                bonus_element.value = 50;
            } else {
                bonus_element.value = 0;
            }
        
        };
    });    

});
