const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')


const convertValues = async () => {
    let inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')

    // async await
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
    .then( response => response.json());

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    console.log(data)

    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    }

    if (select.value === 'US$ Dólar americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }

}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')
    console.log(select.value)


    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = "./assets/euro.png"
    }
    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.png"
    }
    convertValues()
}



button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)



