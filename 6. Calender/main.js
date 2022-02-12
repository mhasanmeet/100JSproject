// Get Browser current date
const date = new Date();

date.setMonth(1);

// get days from document HTML
const monthDays = document.querySelector('.days');

// get full year, get month and last day of the month by 0
const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate;



// Array of Months
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

// Get month and inset into document HTML
document.querySelector('.date h1').innerHTML = months[date.getMonth()];

// get weekday, date & time and insert into document browser
document.querySelector(".date p").innerHTML = date.toDateString();

// let days
let days = "";

// Making 31 days and inset into days variable
for (let i = 1; i <= lastDay; i++){
    days += `<div>${i}</div>`;
    monthDays.innerHTML = days;
}

