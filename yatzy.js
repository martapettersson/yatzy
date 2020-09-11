document.addEventListener("DOMContentLoaded", function (e) {
    let name_element = document.getElementById('name');
    let calc_button = document.getElementById('calc');
    let sum_element = document.getElementById('player1_sum');
    let bonus_element = document.getElementById('player1_bonus');

    calc_button.addEventListener("click", function (event) {
        let calc_tds = document.querySelectorAll('input[class="calc"]');
        let total = 0;
        for (let i = 0; i < calc_tds.length; i++) {
            total += Number(calc_tds[i].value); 
        }
        sum_element.value = total;

        if(total >= 63){
            bonus_element.value = 50;
        }else{
            bonus_element.value = 0;
        }
    });
    

    // ägg in eventlyssnare på varje td, typ change, så att summan uppdataeras automatiskt 
    
    


});