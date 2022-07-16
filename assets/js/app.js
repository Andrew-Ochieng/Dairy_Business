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



//initialize input variables
// production variables
const milkAmount = document.getElementById('milk-amount')
const inputs = document.getElementById('form-inputs');
const dailyReport = document.getElementById('daily-report')
const shedA = document.getElementById('shed-a')
const shedB = document.getElementById('shed-b')
const shedC = document.getElementById('shed-c')
const shedD = document.getElementById('shed-d')


// add event listener
inputs.addEventListener('submit', (e) => {
    e.preventDefault()

    totalProduction();

    // incomeOverTime();
})


let totalProduction = () => {
    if (shedA != '' && shedB != '' && shedC != '' && shedD != '') {
        // creating new element and adding value to it
        let newShedA = document.createElement('LI')
        newShedA.appendChild(document.createTextNode(shedA.value))

        let newShedB = document.createElement('LI')
        newShedB.appendChild(document.createTextNode(shedB.value))

        let newShedC = document.createElement('LI')
        newShedC.appendChild(document.createTextNode(shedC.value))

        let newShedD = document.createElement('LI')
        newShedD.appendChild(document.createTextNode(shedD.value))

        //adding li to ul
        dailyReport.appendChild(newShedA)
        weeklyReport.appendChild(newShedB)
        dailyReport.appendChild(newShedC)
        dailyReport.appendChild(newShedD)

        // dailyFinalReport = 'Your production in Shed A is' + dailyReport

    } else {
        console.log('inputs cannot be empty!')
    }

    // reset input boxes
    shedA.value = '';
    shedB.value = '';
    shedC.value = '';
    shedD.value = '';
    
    
}

totalProduction()


// income function
// let incomeOverTime = () => {

// }










