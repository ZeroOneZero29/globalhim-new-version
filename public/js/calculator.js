const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('.calculate')

const basePrice = 214;

const totalPriceElement = document.querySelector('#total-price')

squareRange.addEventListener('input', function () {
    squareInput.value = squareRange.value;
})

squareInput.addEventListener('input', function () {
    squareRange.value = squareInput.value;
})

function calculate () {
    let totalPrice = basePrice * parseInt(squareInput.value);
    totalPriceElement.innerText = totalPrice;
};

calculate();


for (const input of inputs) {
    input.addEventListener('input', function(){
        calculate();
    })
}