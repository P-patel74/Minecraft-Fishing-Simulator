// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById('fish-btn');
let charSelect = document.getElementById('character-select');
let resultImg = document.getElementById('result-img');
let numCodSpan = document.getElementById('num-cod');
let numSalmonSpan = document.getElementById('num-salmon');
let numTropicalSpan = document.getElementById('num-tropical');
let numPufferSpan = document.getElementById('num-puffer');

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
fishBtn.addEventListener('click', fishBtnClicked);

// Event handler for fishBtn
function fishBtnClicked() {
  // Check Selected Character
  let character = charSelect.value;

  // Catch fish based on character
    // STEVE: Cod 70%, Salmon 20%, Tropical 5%, Puffer 5%
    if (character === 'steve') {
      catchFish(70,90,95)
    
    // ALEX: Cod 10%, Salmon 10%, Tropical 30%, Puffer 50%
    } else if (character === 'Alex'){
      catchFish(10,20,50)
    }

    // VILLAGER: Cod 25%, salmon 25%, Tropical 25%, Puffer 25%
    else{
      catchFish(25,50,75)
    }



  function catchFish(Cod, Salmon, Tropical ){

    let randNum = Math.random();
    if (randNum < (Cod/100)){
      numCod++;
      numCodSpan.innerHTML = numCod;
      resultImg.src = 'img/Raw-Cod.png';
    } else if (randNum < (Salmon/100)) {
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      resultImg.src = 'img/Raw-Salmon.png';
    } else if (randNum < (Tropical/100)) {
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      resultImg.src = 'img/Tropical-Fish.png';
    } else{
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      resultImg.src = 'img/Pufferfish.png';
    }
    console.log(`${randNum}`)
    }
    
    console.log(numCod,numSalmon,numPuffer, numTropical)
  }

  
