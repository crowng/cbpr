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