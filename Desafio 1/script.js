/** Alguns amigos foram comer uma pizza e, na hora de pagar a conta, não sabiam quanto cada um deveria pagar.
 * Para ajudá-los, faça um algoritimo que leia o valor da conta e a quantidade de pessoas que irão entrar na 
 * divisão. Calcule também a gorjeta do garçom, que será de 10% do valor na conta. No final, mostre o quanto
 * cada um ira pagar. **/

(function() {
    $write = document.querySelector(".write")

    let qtd_Pessoas = parseInt(prompt("Digite a quantidade de pessoas:"));
    $write.innerHTML = `<strong>Quantidade de pessoas:</strong> ${qtd_Pessoas} <br>`;
    let v_Pizza = parseFloat(prompt("Digite o valor da pizza:"));
    $write.innerHTML += `<strong>Valor da pizza:</strong> R$ ${v_Pizza.toFixed(2)} reais <br>`;

    function CalcularValorPorPessoa() {
        let valor = v_Pizza + getValorGorjeta(0.1);
        return `<strong>O valor para cada um pagar é de:</strong> R$ ${(valor / qtd_Pessoas).toFixed(2)} reais`;
    }

    function getValorGorjeta(valor) {
        return valor * v_Pizza;
    }

    $write.innerHTML += CalcularValorPorPessoa();
    $write.classList.add("show")
})()