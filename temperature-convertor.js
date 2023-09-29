const inputTemp = document.querySelector('input[name="inputTemp"]');
const inputUnit = document.getElementById('TempInput');
const outputTemp = document.querySelector('input[name="outputTemp"]');
const outputUnit = document.getElementById('TempOutput');

inputTemp.addEventListener('input', updateOutputTemp);

inputUnit.addEventListener('change', updateOutputTemp);

outputUnit.addEventListener('change', updateOutputTemp);

function convertTemperature(value, from, to) {
    if (from === 'celsius' && to === 'fahrenheit') {
        return (value * 9 / 5) + 32;
    } else if (from === 'fahrenheit' && to === 'celsius') {
        return (value - 32) * 5 / 9;
    } else if (from === 'celsius' && to === 'kelvin') {
        return value + 273.15;
    } else if (from === 'kelvin' && to === 'celsius') {
        return value - 273.15;
    } else if (from === 'fahrenheit' && to === 'kelvin') {
        return (value - 32) * 5 / 9 + 273.15;
    } else if (from === 'kelvin' && to === 'fahrenheit') {
        return (value - 273.15) * 9 / 5 + 32;
    } else {
        return value;
    }
}

function updateOutputTemp() {
    const inputValue = parseFloat(inputTemp.value);
    const inputUnitValue = inputUnit.value;
    const outputUnitValue = outputUnit.value;

    if (!isNaN(inputValue)) {
        const result = convertTemperature(inputValue, inputUnitValue, outputUnitValue);
        outputTemp.value = result.toFixed(2);
    } else {
        outputTemp.value = '';
    }
}

updateOutputTemp();

