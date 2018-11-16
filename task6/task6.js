function displayCalendar(monthChange) {

    var htmlContent = "";
    var counter = 1;

    var dateNow = new Date();
    var day = arguments[1] || dateNow.getDate();
    var year = arguments[3] || dateNow.getFullYear();
    var month = arguments[2] || (dateNow.getMonth() + monthChange);
    while (month > 11) {
        month -= 12;
        ++year;
    }
    while (month < 0) {
        month += 12;
        --year;
    }
    var nextMonth = month + 1;

    // names of months and weekdays
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // days in previous month and next one, and day of week
    var nextDate = new Date(nextMonth + ' 1 ,' + year);
    var weekdays = nextDate.getDay();
    var weekdays2 = weekdays;
    var numOfDays = getDaysPerMonth(year, month);

    // this leaves a white space for days of previous month
    while (weekdays > 0) {
        htmlContent += "<td class='monthPre'></td>";

        // used in next loop
        weekdays--;
    }

    // loop to build the calendar body
    while (counter <= numOfDays) {

        // when to start new line
        if (weekdays2 > 6) {
            weekdays2 = 0;
            htmlContent += "</tr><tr>";
        }

        // if counter is current day
        // highlight current day using the CSS defined in header
        if (counter == day && monthChange == 0) {
            htmlContent += "<td class='dayNow'  onMouseOver='this.style.background=\"#FF0000\"; this.style.color=\"#FFFFFF\"' " +
                "onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#FF0000\"'>" + counter + "</td>";
        } else {
            htmlContent += "<td class='monthNow' onMouseOver='this.style.background=\"#FF0000\"'" +
                " onMouseOut='this.style.background=\"#FFFFFF\"'>" + counter + "</td>";

        }

        weekdays2++;
        counter++;
    }

    // building the calendar html body
    var calendarBody = "<table class='calendar'> <tr><th class='monthChanger' onclick='displayCalendar(--monthChange)'>&#9665;</th><th colspan='5' class='monthName'>" + monthNames[month] + " " + year + "</th><th class='monthChanger' onclick='displayCalendar(++monthChange)'>&#9655;</th></tr>";
    calendarBody += "<tr class='dayNames'>  <td>Sun</td>  <td>Mon</td> <td>Tues</td> <td>Wed</td> <td>Thurs</td> <td>Fri</td> <td>Sat</td> </tr>";
    calendarBody += "<tr>";
    calendarBody += htmlContent;
    calendarBody += "</tr></table>";

    // set the content of div
    if (document.getElementById("calendar")) {
        var calendar = document.getElementById("calendar");
        calendar.innerHTML = calendarBody;
    } else {
        var calendar = document.createElement('div');
        calendar.id = "calendar";
        calendar.innerHTML = calendarBody;
        document.body.appendChild(calendar);
        var datePicker = document.createElement('div');
        datePicker.id = "datePicker";
        datePicker.innerHTML = "<label><br>Input date in DD-MM-YYYY format<br>and press enter to show date.<br><input onkeypress='displayPickedDate()' value=" + day + "-" + (month+1) + "-" + year + "></input></label>";
        document.body.appendChild(datePicker);
    }

    // set CSS
    var selectors = [".calendar", ".monthPre", ".monthNow", ".dayNow", ".monthName", ".dayNames", ".monthChanger"];
    var styles = [
        "border: 2px solid black;",
        "color: gray; text-align: center; htmlContent: 2px; width: 40px;",
        "color: darkblue; text-align: center; htmlContent: 2px; width: 40px;",
        "border: 2px solid black; color: #FF0000; text-align: center; htmlContent: 2px; width: 40px;",
        "background-color: #000000; color: #FFFFFF; text-align: center;",
        "background: #BBBB00; color: #FFFFFF; text-align: center; htmlContent: 2px; width: 40px;",
        "background-color: #000000; color: #FFFFFF; cursor: pointer; text-align: center;"
    ];
    for (var x = 0; x < selectors.length; x++) {
        var elements = document.querySelectorAll(selectors[x]);

        for (var y = 0; y < elements.length; y++) {
            elements[y].style.cssText = styles[x];
        }
    }
}

function displayPickedDate() {
    if (event.charCode == 13) {
        var dateInput = document.querySelector("#datePicker input").value;
        var dateArr = ["DD", "MM", "YYYY"];
        if (dateInput[2] == "-" && dateInput[5] == "-") {
            dateArr = dateInput.split("-");
        }
        var day = Number(dateArr[0]), month = Number(dateArr[1]) - 1, year = Number(dateArr[2]);
        if (isNumeric(year)) {
            if (isNumeric(month) && month >= 0 && month <= 11) {
                if (isNumeric(day) && day >= 0 && day <= getDaysPerMonth(year, month)) {
                    displayCalendar(0, day, month, year);
                    return true;
                }
            }
        }
        return alert("Date input incorrect.");
    }
    else {
        return true;
    }

}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
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

var monthChange = 0;
window.onload = displayCalendar(monthChange);