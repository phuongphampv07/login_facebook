
var min = 1913,
    max = 2021,
    select = document.querySelector('.yeardropdown');

for (var i = min; i <= max; i++) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
}

function populateDates() {
    var today = new Date(),
        day = today.getUTCDate(),
        month = today.getUTCMonth(),
        year = today.getUTCFullYear(),
        daysInCurrMonth = daysInMonth(month, year);

    //Year
    // for (var i = 0; i < 19; i++) {
    //     var opt = document.createElement('option');
    //     opt.value = i + year;
    //     opt.text = i + year;
    //     yeardropdown.appendChild(opt);
    // }

    // Month
    for (var i = 0; i < 12; i++) {
        var opt = document.createElement('option');
        opt.value = months[i];
        opt.text = months[i];
        monthdropdown.appendChild(opt);
    }

    // Day
    for (var i = 0; i < daysInCurrMonth; i++) {
        var opt = document.createElement('option');
        opt.value = i + 1;
        opt.text = i + 1;
        daydropdown.appendChild(opt);
    }
}

var daydropdown = document.querySelector(".daydropdown"),
    monthdropdown = document.querySelector(".monthdropdown"),
    yeardropdown = document.querySelector(".yeardropdown");

// Change handler for months
monthdropdown.onchange = function () {
    var newMonth = months.indexOf(monthdropdown.value) + 1,
        newYear = yeardropdown.value;

    daysInCurrMonth = daysInMonth(newMonth, newYear);

    daydropdown.innerHTML = "";
    for (var i = 0; i < daysInCurrMonth; i++) {
        var opt = document.createElement('option');
        opt.value = i + 1;
        opt.text = i + 1;
        daydropdown.appendChild(opt);
    }
}

populateDates()
