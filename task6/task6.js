function createCalendar(monthChange,
    pickedDay = currentDate.day,
    pickedMonth = currentDate.month,
    pickedYear = currentDate.year) {

    var htmlContent = "";
    var counter = 1;

    if (pickedDay) {
        var day = pickedDay;
        var year = pickedYear;
        var month = pickedMonth + monthChange;
    } else {
        var dateNow = new Date();
        var day = dateNow.getDate();
        var year = dateNow.getFullYear();
        var month = dateNow.getMonth() + monthChange;
    }

    while (month > 11) {
        month -= 12;
        ++year;
    }
    while (month < 0) {
        month += 12;
        --year;
    }

    currentDate.day = day;
    currentDate.month = month;
    currentDate.year = year;
    currentDate.monthChange = 0;

    // names of months and weekdays
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // days in previous month and next one, and day of week
    var nextMonth = month + 1;
    var nextDate = new Date(nextMonth + ' 1 ,' + year);
    var weekdays = nextDate.getDay();
    var weekdays2 = weekdays;
    var numOfDays = getDaysPerMonth(year, month);

    // this leaves a white space for days of previous month
    while (weekdays > 0) {
        htmlContent += "<td class='calendar__monthPrev'></td>";

        // used in next loop
        weekdays--;
    }

    // loop to build the calendar body
    while (counter <= numOfDays) {

        // when to start new line
        if (weekdays2 > 6) {
            weekdays2 = 0;
            htmlContent += "</tr><tr class='calendar__daysRow'>";
        }

        // if counter is current day
        // highlight current day using the CSS defined in header
        if (counter == day) {
            htmlContent += "<td class='calendar__monthNow_dayNow calendar__monthNow'  onMouseOver='this.style.background=\"#FF0000\"; this.style.color=\"#FFFFFF\"' " +
                "onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#FF0000\"'>" + counter + "</td>";
        } else {
            htmlContent += "<td class='calendar__monthNow' onMouseOver='this.style.background=\"#FF0000\"'" +
                " onMouseOut='this.style.background=\"#FFFFFF\"'>" + counter + "</td>";

        }

        weekdays2++;
        counter++;
    }

    // building the calendar html body
    var calendarBody = "<table class='calendar__main'><tr class='calendar__monthChangeRow'><th class='calendar__monthChanger' onclick='createCalendar(--currentDate.monthChange)'>&#9665;</th><th colspan='5' class='calendar__monthName'>" + monthNames[month] + " " + year + "</th><th class='calendar__monthChanger' onclick='createCalendar(++currentDate.monthChange)'>&#9655;</th></tr>";
    calendarBody += "<tr class='calendar__dayNamesRow'>  <td class='calendar__dayName'>Sun</td>  <td class='calendar__dayName'>Mon</td> <td class='calendar__dayName'>Tues</td> <td class='calendar__dayName'>Wed</td> <td class='calendar__dayName'>Thurs</td> <td class='calendar__dayName'>Fri</td> <td class='calendar__dayName'>Sat</td> </tr>";
    calendarBody += "<tr class='calendar__daysRow'>";
    calendarBody += htmlContent;
    calendarBody += "</tr></table>";

    // set the content of div
    if (document.querySelector(".calendar")) {
        var calendar = document.querySelector(".calendar");
        calendar.innerHTML = calendarBody;
    } else {
        appendCalendar(calendarBody);
        appendDatePicker(day, month, year);
    }
    setCalendarStyles();
}

function appendCalendar(calendarBody) {
    var calendar = document.createElement('div');
    calendar.classList.add("calendar");
    calendar.onclick = displayDayInPicker;
    calendar.innerHTML = calendarBody;
    document.body.appendChild(calendar);
}

function setCalendarStyles() {
    var selectors = [".calendar__main", ".calendar__monthPrev", ".calendar__monthNow", ".calendar__monthNow_dayNow", ".calendar__monthName", ".calendar__dayName", ".calendar__monthChanger"];
    var styles = [
        "border: 2px solid black;",
        "htmlContent: 2px; width: 40px;",
        "color: darkblue; text-align: center; htmlContent: 2px; width: 40px; cursor: pointer;",
        "border: 2px solid black; color: #FF0000; text-align: center; htmlContent: 2px; width: 40px; cursor: pointer;",
        "background-color: #000000; color: #FFFFFF; text-align: center; cursor: default;",
        "background: #CCCCCC; text-align: center; htmlContent: 2px; width: 40px; cursor: default;",
        "background-color: #000000; color: #FFFFFF; cursor: pointer; text-align: center;"
    ];
    for (var x = 0; x < selectors.length; x++) {
        var elements = document.querySelectorAll(selectors[x]);

        for (var y = 0; y < elements.length; y++) {
            elements[y].style.cssText = styles[x];
        }
    }
}

function appendDatePicker(day, month, year) {
    var datePicker = document.createElement('div');
    datePicker.classList.add("datePicker");
    datePicker.innerHTML = "<label class='datePicker__main'><br>Input date in DD-MM-YYYY format<br>and press enter to show date.<br><input class='datePicker__date' onkeypress='pickDate()' value=" + day + "-" + (month + 1) + "-" + year + "></input></label>";
    document.body.appendChild(datePicker);
}

function pickDate() {
    if (event.charCode == 13) {
        var dateInput = document.querySelector(".datePicker__date").value;
        var dateArr = ["DD", "MM", "YYYY"];
        if (dateInput[2] == "-" && dateInput[5] == "-") {
            dateArr = dateInput.split("-");
            var day = Number(dateArr[0]);
            var month = Number(dateArr[1]) - 1;
            var year = Number(dateArr[2]);
            if (isNumeric(year)) {
                if (isMonthCorrect(month)) {
                    if (isDayCorrect(day, month, year)) {
                        createCalendar(0, day, month, year);
                    } else {
                        alert("Day input incorrect.");
                    }
                } else {
                    alert("Month input incorrect.");
                }
            } else {
                alert("Year input incorrect.");
            }
        } else {
            alert("Input date in DD-MM-YYYY format.");
        }
    }
}

function displayDayInPicker(event) {
    if (event.target.tagName == 'TD' && event.target.classList.contains("calendar__monthNow")) {
        var day = (event.target.innerHTML > 9) ? event.target.innerHTML : ("0" + event.target.innerHTML);
        var month = ((currentDate.month + 1) > 9) ? (currentDate.month + 1) : ("0" + (currentDate.month + 1));
        var year = currentDate.year;
        document.querySelector(".datePicker__date").value = day + "-" + month + "-" + year;
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isMonthCorrect(month) {
    return isNumeric(month) && month >= 0 && month <= 11;
}

function isDayCorrect(day, month, year) {
    return isNumeric(day) && day >= 0 && day <= getDaysPerMonth(year, month);
}

function getDaysPerMonth(year, month) {
    var FebNumberOfDays = "";
    if (month == 1) {
        if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
            FebNumberOfDays = 29;
        } else {
            FebNumberOfDays = 28;
        }
    }
    var dayPerMonth = ["31", "" + FebNumberOfDays + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
    return dayPerMonth[month];
}

var currentDate = {
    day: undefined,
    month: undefined,
    year: undefined,
    monthChange: 0,
}
window.onload = createCalendar(currentDate.monthChange);
