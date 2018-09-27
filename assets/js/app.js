// DOM Selection
let btn = document.querySelector(".con__btn");
let input = document.querySelector(".con__input");
let output = document.querySelector(".heading--2");

// event listener to the button
btn.addEventListener("click", calculate);

function calculate() {
  // collect the input value
  let inputData, inputArray, year, month, day;

  // store collect the input value
  inputData = input.value;

  //check the input value is black or not
  if (inputData !== "") {

    //split the input value and store into array
    inputArray = inputData.split("-");
    //deconstruct the value into variable
    [year, month, day] = inputArray;
    year = Number(year);
    month = Number(month);
    day = Number(day);

    // get the current date from the date constructor
    let current, currentYear, currentMonth, currentDate, Newdate, newMonth;

    // new date for current date
    current = new Date();
    currentYear = current.getFullYear();
    currentMonth = current.getMonth() + 1; // get month star with 0 // for that 1 added
    currentDate = current.getDate();

    // check birthday or not
    if (day === currentDate && month === currentMonth) {
      let birthday = currentYear - year;
      output.innerHTML = `Congratulation! Today Is your birthday your are <span class="year">${birthday}</span> Years Old. `;
    } else {

      //  calculate the day 
      if (day > currentDate) {
        Newdate = currentDate + 30;
        day = Newdate - day;
        currentMonth = currentMonth - 1;
      } else {
        day = currentDate - day;
      }
      // calcuclate the month
      if (month > currentMonth) {
        newMonth = currentMonth + 12;
        month = newMonth - month;
        currentYear = currentYear - 1;
      } else {
        month = currentMonth - month;
      }
      year = currentYear - year;

      output.innerHTML = `Your Age : <span class="year">${year}</span> Year <span class="month">${month}</span> Month <span class="day">${day}</span> Days.`;
    }

  } else {
    alert("Please Input your Birthday");
  }
}