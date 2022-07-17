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
        //display input values in daily report
        document.getElementById('shedA-report').innerHTML = shedA.value
        document.getElementById('shedB-report').innerHTML = shedB.value
        document.getElementById('shedC-report').innerHTML = shedC.value
        document.getElementById('shedD-report').innerHTML = shedD.value

        // loop through sheds
        // const sheds = ['A', 'B', 'C', 'D']

        // for (let i = 0; i < sheds.length; i++) {
        //     const element = sheds[i];
             
        // }


        // display daily total 
        let dailyTotal = document.getElementById('daily-total') 
        dailyTotal.innerHTML = Number(shedA.value) + Number(shedB.value) + Number(shedC.value) + Number(shedD.value)
    
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

// function incomeOverTime (selling_price, time) {
    

// }

// incomeOverTime(45, 7)









