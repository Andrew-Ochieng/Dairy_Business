// set greetings depending on time of day
const time = document.getElementById('time')

const newDate = new Date()

let hour = newDate.getHours()

greetings = () => {
    if (hour < 12) {
        time.innerText = 'Morning'
    } else if (hour < 17) {
        time.innerText = 'Afternoon'
    } else {
        time.innerText = 'Evening'
    }
}

greetings()




//inputs
//initialize variables
const shadeNum = document.getElementById('shade-num')
const milkAmount = document.getElementById('milk-amount')
const inputs = document.getElementById('form-inputs');
const postAmount = document.getElementById('post-amount')
const shadeOutput = document.getElementById('shade-output')
const milkOutput = document.getElementById('milk-output')
const amountOutput = document.getElementById('amount-output')

inputs.addEventListener('submit', (e) => {
    e.preventDefault()

    submitInputs()
})


let submitInputs = () => {

    if (shadeNum != '' && milkAmount != '') {
        // creating new element and adding value to it
        let newShadeNum = document.createElement('LI')
        newShadeNum.appendChild(document.createTextNode(shadeNum.value))

        let newMilkAmount = document.createElement('LI')
        newMilkAmount.appendChild(document.createTextNode(milkAmount.value))
    
        // adding li to ul
        shadeOutput.appendChild(newShadeNum)

        milkOutput.appendChild(newMilkAmount)

    } else {
        console.log('inputs cannot be empty')
    }

    //reset input boxes
    shadeNum.value = '';
    milkAmount.value = '';



}
















