document.addEventListener("DOMContentLoaded", function (e) {
    let player1_ints = document.querySelectorAll('input[class="player1"]')
    let player1_sum = document.getElementById("player1_sum");

    player1_ints.forEach(function(element){
        element.addEventListener('change', function(e){ 
            sum = 0;
            for(let i = 0; player1_ints.length > i; i++){
                sum+= (Number(player1_ints[i].value));
            }
            player1_sum.value = sum;
        })
    })

});