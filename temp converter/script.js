document.getElementById('convert').addEventListener('click', function () {
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDisplay = document.getElementById('result');
    const errorDisplay = document.getElementById('error');

    // Clear previous results and errors
    resultDisplay.textContent = '';
    errorDisplay.textContent = '';

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput.trim() === '') {
        errorDisplay.textContent = 'Please enter a valid number.';
        return;
    }

    const temperature = parseFloat(temperatureInput);

    let convertedTemperature = '';

    // Perform conversions
    if (unit === 'celsius') {
        convertedTemperature = `${(temperature * 9/5 + 32).toFixed(2)} °F (Fahrenheit), ${(temperature + 273.15).toFixed(2)} K (Kelvin)`;
    } else if (unit === 'fahrenheit') {
        convertedTemperature = `${((temperature - 32) * 5/9).toFixed(2)} °C (Celsius), ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} K (Kelvin)`;
    } else if (unit === 'kelvin') {
        convertedTemperature = `${(temperature - 273.15).toFixed(2)} °C (Celsius), ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F (Fahrenheit)`;
    }

    // Display result
    resultDisplay.textContent = convertedTemperature;
});
