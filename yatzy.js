document.addEventListener("DOMContentLoaded", function(e) {
    let name_element = document.getElementById("name");
    let calc_button = document.getElementById("calc");
<<<<<<< HEAD
    let calc_tds = document.querySelectorAll('input[class="calc"]');
    
=======
    let sum_element = document.getElementById('player1_sum');
    let bonus_element = document.getElementById('player1_bonus');
>>>>>>> a63259a75b6e10a26187dcd1ea8499b29e88f6e6

    //det här funkar bara med en spelare

    calc_button.addEventListener("click", function(event) {
        
        let total = 0;
<<<<<<< HEAD

        for (let i = 0; i < calc_tds.length; i++){
            total += (calc_tds[i].value) * (i + 1);
        }
        console.log(total)
    });
});
=======
        for (let i = 0; i < calc_tds.length; i++) {
            
            /* funkar för input av summa av tärningar 
            (dvs. får jag 3 st femmor fyller jag i 15) */
            total += Number(calc_tds[i].value);

            /* funkar för input av antal tärningar
            (dvs. får jag 3 st femmor fyller jag i 3) */
            //total += Number(calc_tds[i].value) * (i + 1); 
        }
        sum_element.value = total;

        if(total >= 63){
            bonus_element.value = 50;
        }else{
            bonus_element.value = 0;
        }

    });

    //behöver en class för varje spelares columner. 
    //skape en funktion som tar in arrayen och räknar ut summan och skriver ut summan bredvid "sum",
    


});
>>>>>>> a63259a75b6e10a26187dcd1ea8499b29e88f6e6
