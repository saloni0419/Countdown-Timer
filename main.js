const endDate = "15 February 2030 12:00 AM"

document.getElementById("end-date").innerText = endDate
const inputs = document.querySelectorAll("input")

const clock = () => {

    // get the given end date in miliseconds
    const end = new Date(endDate);

    // get the current date in miliseconds
    const now = new Date();

    // this end - now gives time in mili sec so divide by 1000 for sec
    const diff = (end - now)/1000;
    console.log(diff);

    // check for negative values
    if(diff < 0) return;

    // convert diff into days, hours, minutes, seconds

    // convert into days
    // math.floor shows exact number
    inputs[0].value = Math.floor(diff/3600/24);

    // calculate hours but removing the days part
    inputs[1].value = Math.floor(diff/3600) % 24;

    // calculte minutes removing both day and hour part
    inputs[2].value = Math.floor(diff/60) % 60;

    // calculate seconds parts removing all days hours seconds part
    inputs[3].value = Math.floor(diff%60);
}

// initial call : when page refreshes
clock()

// we want to call function at every second
setInterval(
    () => {
        clock()
    }, 1000
)

/* 
- 1 day = 24 hrs
- 1 hr = 60 mins
- 1 min = 60 sec
- 1 min = 3600 sec
*/
