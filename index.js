const fullDate = document.querySelector(".date p")
const monthdisplayed = document.querySelector(".date h1");
const monthIndex = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthIndex +1 , 0).getDate()
const daysE1 = document.querySelector(".days")
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1 ).getDay() -1;
// console.log(firstDay)

const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
];

const monthName = months[monthIndex];


monthdisplayed.innerHTML = monthName;

fullDate.innerHTML = new Date().toDateString()

let days = ""

for(let i = firstDay; i > 0; i--){
    days += `<div class = "empty"></div>`
}

for(let i = 1; i <= lastDay ; i++){
    if(i === new Date().getDate()){
        days += `<div class="today">${i}</div>`
    }else{
        days += `<div>${i}</div>`
    }
    
}

daysE1.innerHTML = days;



