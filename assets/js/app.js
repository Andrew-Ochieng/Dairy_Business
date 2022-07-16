// set greetings depending on time of day
const time = document.getElementById('time')

const newDate = new Date()

let hour = newDate.getHours()

greetings = () => {
    if (hour < 12) {
        time.innerText = 'Morning'
    } else if (hour > 12 && hour < 18) {
        time.innerText = 'Afternoon'
    } else {
        time.innerText = 'Evening'
    }
}

greetings()




//inputs
const inputs = document.getElementById('form-inputs');

inputs.addEventListener('submit', (e) => {
    e.preventDefault()

    submitInputs()
})


let submitInputs = () => {
    // console.log('hey the code worked :)')
    
}
















