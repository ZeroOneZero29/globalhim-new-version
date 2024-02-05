const rangeInputs = document.querySelectorAll('input[type="range"]');
const numberInput = document.querySelector('input[type="number"]');

let isRTL = document.documentElement.dir === 'rtl';

function handleInputChange(e) {
  let target = e.target
  let val
  if (e.target.type !== 'range') {
    val = target.valueAsNumber
    target = document.getElementById('square-range')
  } else {
    val = target.value 
  }
  const min = target.min
  const max = target.max
  let percentage = (val - min) * 100 / (max - min)
  if (isRTL) {
    percentage = (max - val) 
  }
  
  target.style.backgroundSize = percentage + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

numberInput.addEventListener('input', handleInputChange)



// Handle element change, check for dir attribute value change
function callback(mutationList, observer) {  mutationList.forEach(function(mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
      isRTL = mutation.target.dir === 'rtl'
    }
  })
}

// Listen for body element change
const observer = new MutationObserver(callback)
observer.observe(document.documentElement, {attributes: true})

function calculate(e) {
    totalPriceElement.innertText = '1000'
}