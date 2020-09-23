//vad fan är det här?

let calc_tds = document.querySelectorAll(`input[class="player1"]`)
let player1_sum = document.getElementById('player1_sum')


calc_tds.forEach(function(element){
    element.addEventListener('change', function(e){
        player1_sum.value += this.value;
    })
})