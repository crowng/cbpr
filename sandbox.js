function checkScheduling(e) {
    // this event will have event.data.day && event.data.month 
    // check each object in actual events arry to match day and month and if match disable assistant input in form 
 let dayPicked = e.data.day
 let monthPicked = e.data.month
 let schedule = Array.from(event_data.events)
 console.log(dayPicked, monthPicked, schedule);
const months = [ 
   "January", 
   "February", 
   "March", 
   "April", 
   "May", 
   "June", 
   "July", 
   "August", 
   "September", 
   "October", 
   "November", 
   "December" 
];
let month = months.indexOf(monthPicked)
console.log(month);
schedule.forEach(entry => {
    if(entry.day === dayPicked && entry.month === month + 1) {
        console.log(entry);
    }
})


}






    // Check to see if assistant is already scheduled, if so disable from the select list 
    event_data.events.forEach(obj => {
        if(obj.occasion === name && obj.invited_count === count && obj.month === monthCheck && obj.day === day && obj.year === yearCheck) {
            let inputToDisable = document.querySelector('#name')
            let valuesToDisable = Array.from(inputToDisable.options)
            valuesToDisable.forEach(val => {
                if(val.value === name.toLowerCase()){
                    val.disabled = true;

                    
                }
                // boxToReset.options[0].selected = true;

            })
        } 
    
        if(obj.occasion !== name && obj.invited_count !== count && obj.month !== monthCheck && obj.day !== day && obj.year !== yearCheck) {
            
            let inputToDisable = document.querySelector('#name')
            let valuesToDisable = Array.from(inputToDisable.options)
            valuesToDisable.forEach(val => {
                if(val.value === name.toLowerCase()){
                    val.disabled = false;

                }
   
            })
        } 
        
    })