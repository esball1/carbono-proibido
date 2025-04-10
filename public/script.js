function converterParaGramas(valor, unidade) {
    switch(unidade) {
        case 'kg': return valor * 1000;
        case 'mg': return valor / 1000;
        default: return valor;
    }
}

function converterDeGramas(valor, unidade) {
    switch(unidade) {
        case 'kg': return valor / 1000;
        case 'mg': return valor * 1000;
        default: return valor;
    }
}

function formatarUnidade(unidade) {
    const unidades = {
        'g': 'g',
        'kg': 'kg',
        'mg': 'mg'
    };
    return unidades[unidade] || unidade;
}

function calcularCarbono() {
    // Obter valores e unidades
    const bicarbonato = parseFloat(document.getElementById('bicarbonato').value);
    const bicarbonatoUnit = document.getElementById('bicarbonato-unit').value;
    const vinagre = parseFloat(document.getElementById('vinagre').value);
    const vinagreUnit = document.getElementById('vinagre-unit').value;
    const resultUnit = document.getElementById('result-unit').value;
    
    // Validar entradas
    if (isNaN(bicarbonato) || isNaN(vinagre) || bicarbonato < 0 || vinagre < 0) {
        alert("Por favor, insira valores válidos (números positivos)");
        return;
    }
    const bicarbonatoG = converterParaGramas(bicarbonato, bicarbonatoUnit);
    const vinagreG = converterParaGramas(vinagre, vinagreUnit);
    const carbonoBicarbonato = bicarbonatoG * 0.134;
    const carbonoVinagre = vinagreG * 0.134;
    const carbonoProduzidoG = Math.min(carbonoBicarbonato, carbonoVinagre);
    const carbonoProduzido = converterDeGramas(carbonoProduzidoG, resultUnit);
    const titulo = document.getElementById('titulo');
    if (Math.abs(carbonoProduzidoG - 2019) < 0.001) {
        titulo.textContent = "Você é da sala de nerd!";
        titulo.classList.add('nerd-title');
    } else {
        titulo.textContent = "Produção de Carbono Permitido";
        titulo.classList.remove('nerd-title');
    }
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <strong>Resultado:</strong><br>
        Com ${bicarbonato.toFixed(2)}${formatarUnidade(bicarbonatoUnit)} de bicarbonato e 
        ${vinagre.toFixed(2)}${formatarUnidade(vinagreUnit)} de vinagre, você pode produzir:<br>
        <span style="font-size: 24px; color: #2e7d32;">${carbonoProduzido.toFixed(3)}${formatarUnidade(resultUnit)} de carbono</span>
    `;
    
    if (Math.abs(carbonoBicarbonato - carbonoVinagre) > 0.001) {
        if (carbonoBicarbonato < carbonoVinagre) {
            resultadoDiv.innerHTML += `<br><small>Bicarbonato é o reagente limitante</small>`;
        } else {
            resultadoDiv.innerHTML += `<br><small>Vinagre é o reagente limitante</small>`;
        }
    }
}
