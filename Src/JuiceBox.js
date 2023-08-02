function calculateChargingTime() {
    const batterySize = parseFloat(document.getElementById('batterySize').value);
    const chargerPower = parseFloat(document.getElementById('chargerPower').value);
    const startPercentage = parseInt(document.getElementById('startPercentage').value);
    const chargedPercentage = parseInt(document.getElementById('chargedPercentage').value);
  
    // Convert percentages to fractions
    const startFraction = startPercentage / 100;
    const chargedFraction = chargedPercentage / 100;
  
    // Calculate the amount of energy to be charged
    const energyToCharge = batterySize * (chargedFraction - startFraction);
  
    // Calculate the charging time in hours
    const chargingTime = energyToCharge / chargerPower;
  
    // Extract the whole number of hours
    const hours = Math.floor(chargingTime);
  
    // Calculate the remaining minutes
    const minutes = Math.round((chargingTime - hours) * 60);
  
    // Display the result
    const resultElement = document.getElementById('chargingTimeResult');
    resultElement.innerHTML = `Charging Time: <br><br>${hours} Hours ${minutes} Minutes`;
  }

  // Update displayed percentage values when sliders change
  const startPercentageSlider = document.getElementById('startPercentage');
  const chargedPercentageSlider = document.getElementById('chargedPercentage');
  const startPercentageDisplay = document.getElementById('startPercentageDisplay');
  const chargedPercentageDisplay = document.getElementById('chargedPercentageDisplay');

  startPercentageSlider.addEventListener('input', () => {
    startPercentageDisplay.textContent = startPercentageSlider.value + '%';
  });

  chargedPercentageSlider.addEventListener('input', () => {
    chargedPercentageDisplay.textContent = chargedPercentageSlider.value + '%';
  });