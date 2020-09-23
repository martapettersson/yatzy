document.addEventListener('DOMContentLoaded', function(){
  let dicesLeft = document.getElementById('remaining-throws');
  let diceTrigger = document.getElementById('dice-trigger')
  let checkboxes = document.querySelectorAll('input[type="checkbox"]')
  
  let remainingThrows = 3

  checkboxes.forEach(function(element){ //resettar i firefox när man laddar sidan.
    element.disabled = true;
    element.checked = false;
  })

  function generateRandomNumber (num) {
    arr = []
    for (let i = 0; i < num; i++){
      arr.push(Math.floor(Math.random() * 6) + 1)
    }
    return arr;
  }

  function rollDices (){
    for(let i = 0; i < checkboxes.length; i++){
      if(checkboxes[i].checked === false && remainingThrows > 0){
          let uncheckedBoxes = document.querySelectorAll('input[type="checkbox"]:not(:checked)')
          let newValues = generateRandomNumber(uncheckedBoxes.length);

          //det här under behöver ändras. 
          //tryck in ett tärningselement med motsvarande värde.
          for (let i = 0; i < uncheckedBoxes.length; i++){
              let id = uncheckedBoxes[i].id.slice(9)
              document.querySelector(`span[id='dice-${id}']`).innerHTML = newValues[i];
              }
        
          remainingThrows -= 1
          dicesLeft.innerHTML = remainingThrows
          break
      }
    }
  }

  diceTrigger.addEventListener('click', function(){

      if(remainingThrows === 3){    
        checkboxes.forEach(function(element){
          element.disabled = false;
        })
      }
      rollDices();
  })


});
