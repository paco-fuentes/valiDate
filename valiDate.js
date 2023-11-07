// import dayjs
const dayjs = require("dayjs")
// call parse date plugin
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

// format entry dates to DD-MM-YYYY

// today refernce
const today = new Date();
const todayFormated = dayjs(today).format('DD-MM-YYYY');
console.log(`Today is ${todayFormated}`);

// appointment date
const myDateEntry = "26-11-2083"; // not on weekend
// const myDateEntry = "26-11-2033"; // not on weekend
// const myDateEntry = "26-11-1983"; // not time travel to the past allowed
// const myDateEntry = todayFormated; // not today
const myDateFormated = dayjs(myDateEntry, 'DD-MM-YYYY', true).format('DD-MM-YYYY');
console.log(`I want an appointment on ${myDateFormated}`);

// this date function is designed to validate a date and return a JSON response to your API REST client.
// not today - not on weekend - not in the past
// to test it, uncomment/comment the 'return console.log' lines and input a date in the DD-MM-YYYY format in the second field of the function

const valiDate = (dateToday, appointmentDate) => {
    const appointmentDay = dayjs(appointmentDate).format('DD')
    const appointmentMonth = dayjs(appointmentDate).format('MM')
    const appointmentYear = dayjs(appointmentDate).format('YYYY')

    const day = dayjs(dateToday).format('DD')
    const month = dayjs(dateToday).format('MM')
    const year = dayjs(dateToday).format('YYYY')

    if (appointmentDate === dateToday) {
        return console.log('Appointments only avaible from next day');
        return res.status(400).json(
            {
                success: true,
                message: 'Appointments only avaible from next day',
            }
        )
    }

    const appointmentDateObj = dayjs(appointmentDate, 'DD-MM-YYYY', true);
    const dateTodayObj = dayjs(dateToday, 'DD-MM-YYYY', true);
    if (appointmentDateObj.isBefore(dateTodayObj, 'day')) {
        return console.log('Time travel not allowed at this time');
        return res.status(400).json({
            success: true,
            message: 'Time travel not allowed at this time',
        });
    }

    // if ((parseInt(appointmentMonth) < parseInt(month) || parseInt(appointmentYear) < parseInt(year)) || (parseInt(appointmentMonth) <= parseInt(month) && parseInt(appointmentDay) < parseInt(day))) {
    //     return console.log('Time travel not allowed at this time');
    //     return res.status(400).json(
    //         {
    //             success: true,
    //             message: 'Time travel not allowed at this time',
    //         }
    //     )
    // }

    const weekDay = dayjs(appointmentDate, 'DD-MM-YYYY', true).format('dddd');
    if (weekDay === "Saturday" || weekDay === "Sunday") {
        return console.log('Appointments not avaible on weekend');
        return res.status(400).json(
            {
                success: true,
                message: 'Appointments not avaible on weekend',
            }
        )
    }

    return console.log(`Appointment for ${appointmentDate} valiDated on ${dateToday} ;) `);
    return res.status(400).json(
        {
            success: true,
            message: 'Appointment succesfully vali-dated, see you soon!',
        }
    )

}

const test = valiDate(todayFormated, myDateFormated) // test a date

module.exports = valiDate;