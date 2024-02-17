const convertButton = document.querySelector(".convert-button") //Mapeando o botão - Personagem principal do palco
const CurrencySelect = document.querySelector(".currency-select") // Mapeando o select para fazer a verificação da conversão




function convertValues() {
    const inputValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor a converter
    const currencyValueConverted = document.querySelector(".currency-value") // valor convertido
    // console.log(CurrencySelect.value) // verifica o value do select quando clicar no botão
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.24
    const bitcoinToday = 260.233
    const convertedValue = inputValue / dolarToday

    if (CurrencySelect.value == "dolar") {
        //currencyValueConverted.innerHTML = convertedValue //modifica o valor do texto pelo valor calculado

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }).format(inputValue / dolarToday)
    }

    if (CurrencySelect.value == "euro") {
        //currencyValueConverted.innerHTML = convertedValue //modifica o valor do texto pelo valor calculado

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-DE',
            { style: 'currency', currency: 'EUR' }).format(inputValue / euroToday)
    }

    if (CurrencySelect.value == "libra") {
        //currencyValueConverted.innerHTML = convertedValue //modifica o valor do texto pelo valor calculado

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK',
            { style: 'currency', currency: 'GBP' }).format(inputValue / libraToday)
    }

    if (CurrencySelect.value == "bitcoin") {
        //currencyValueConverted.innerHTML = convertedValue //modifica o valor do texto pelo valor calculado

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'BTC' }).format(inputValue / bitcoinToday)
    }

    // currencyValueToConvert.innerHTML = inputValue // modifica o valor do texto para o valor do input

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }).format(inputValue) //formatando o resultado em REAL

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")

    if (CurrencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/img/dolar.png"
    }

    if (CurrencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/img/euro.png"
    }

    if (CurrencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Estelina"
        currencyImage.src = "./assets/img/libra.png"
    }

    if (CurrencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/img/bitcoin.png"
    }


    convertValues()
}

CurrencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)