document.addEventListener("DOMContentLoaded", function (e) {
    let name_element = document.getElementById("name");
    let calc_button = document.getElementById("calc");

    calc_button.addEventListener("click", function (event) {
        let calc_tds = document.querySelectorAll('input[class="calc"]')
        let total = 0;
        for (let i = 0; i < calc_tds.length; i++) {
            
            /* funkar för input av summa av tärningar 
            (dvs. får jag 3 st femmor fyller jag i 15) */
            total += Number(calc_tds[i].value);

            /* funkar för input av antal tärningar
            (dvs. får jag 3 st femmor fyller jag i 3) */
            //total += Number(calc_tds[i].value) * (i + 1); 
        }
        console.log(total);
    });


});