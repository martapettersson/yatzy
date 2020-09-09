document.addEventListener("DOMContentLoaded", function(e) {
    let name_element = document.getElementById("name");
    let calc_button = document.getElementById("calc");
    let sum_element = document.getElementById('player1_sum');
    let bonus_element = document.getElementById('player1_bonus');
    

    //det här funkar bara med en spelare

    let current_class = ['calc', 'calc2', 'calc3', 'calc4'];

    calc_button.addEventListener("click", function(event) {

        for (let i = 0; i < current_class.length; i++) {

            let calcs_td = document.querySelectorAll(`input[class="${current_class[i]}"]`)
            
            let total = 0;

            for (let i = 0; i < calc_tds.length; i++) {
                total += Number(calc_tds[i].value)
            }

            sum_element.value = total; //här blir det problem

            if(total >= 63){
                bonus_element.value = 50;
            }else{
                bonus_element.value = 0;
            }
        };

    });

    //behöver en class för varje spelares columner. 
    //skape en funktion som tar in arrayen och räknar ut summan och skriver ut summan bredvid "sum",
    


});
