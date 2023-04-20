const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const Bitcon = 142.256

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValuTest = document.getElementById('currency-valu-test')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === "US$ Dolar Americano")
        currencyValuTest.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)

    if (select.value === "€ Euro")
        currencyValuTest.innerHTML = new Intl.NumberFormat('en-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)

     if (select.value === "₿ Bitcoin")
        currencyValuTest.innerHTML = new Intl.NumberFormat('en-DE',
            { style: 'currency', currency: 'BCT' }
        ).format(inputReais / Bitcon)
}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dolar Americano') {
        currencyName.innerHTML = "Dolar Americano"
        currencyImg.src = "./assets/estados-unidos.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/Bitcoin.png"
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)