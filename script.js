function calcularCarbono() {
    const bicarbonato = parseFloat(document.getElementById('bicarbonato').value);
    const vinagre = parseFloat(document.getElementById('vinagre').value);
    if (isNaN(bicarbonato) || isNaN(vinagre) || bicarbonato < 0 || vinagre < 0) {
        alert("Por favor, insira valores válidos (números positivos)");
        return;
    }
    
    const carbonoBicarbonato = bicarbonato * 0.134;
    const carbonoVinagre = vinagre * 0.134;
    const carbonoProduzido = Math.min(carbonoBicarbonato, carbonoVinagre);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <strong>Resultado:</strong><br>
        Com ${bicarbonato}g de bicarbonato e ${vinagre}g de vinagre, você pode produzir:<br>
        <span style="font-size: 24px; color: #2e7d32;">${carbonoProduzido.toFixed(3)}g de carbono</span>
    `;
    
    if (carbonoBicarbonato !== carbonoVinagre) {
        if (carbonoBicarbonato < carbonoVinagre) {
            resultadoDiv.innerHTML += `<br><small>Bicarbonato é o reagente limitante</small>`;
        } else {
            resultadoDiv.innerHTML += `<br><small>Vinagre é o reagente limitante</small>`;
        }
    }
}
