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
            console.log(sum);
        });
    });
    
    let 

});




// document.addEventListener("DOMContentLoaded", function (e) {
//     let player1_ints = document.querySelectorAll(`input[class="player1_ints"]`);
//     let player1_sum = document.getElementById("player1_sum");

//     player1_ints.forEach(function (player1_int) {
//         player1_int.addEventListener('change', function (e) {
//             sum = 0;
//             for (let i = 0; i < player1_ints.length; i++) {
//                 sum += (Number(player1_ints[i].value));
//             }
//             player1_sum.value = sum;
//         });
//     });

// });