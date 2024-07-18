import React, { useEffect, useState } from "react";

import "./calendar.scss";

function getDays(year, month) {
  return new Date(year, month, 0).getDate();
}

function getFirstDayMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

function Calendar() {
  const [date, setDate] = useState(new Date());
  const [days, setDays] = useState([]);

  useEffect(() => {
    const monthDays = getDays(date.getFullYear(), date.getMonth() + 1);
    let firstDayMonth = getFirstDayMonth(date.getFullYear(), date.getMonth());

    const buttons = [];

    if (!firstDayMonth) firstDayMonth = 7;

    let bool = false;
    let numDay = 0;
    for (let i = 1; i <= monthDays + firstDayMonth - 1; i += 7) {
      const divArr = [];
      for (let d = 1; d <= 7; d++) {
        if (d == firstDayMonth && !bool) bool = true;
        if (bool) {
          numDay++;

          if (new Date() > date && date.getDate() >= numDay) {
            divArr.push(
              <button
                className="calendar__button"
                style={{ color: "gray" }}
                disabled
              >
                {numDay}
              </button>
            );
          } else {
            divArr.push(<button className="calendar__button">{numDay}</button>);
          }
        } else {
          divArr.push(<span></span>);
        }

        if (numDay == monthDays) break;
      }

      const div = <div className="calendar__item">{divArr}</div>;
      buttons.push(div);
    }

    setDays(buttons);
  }, [date]);
  return (
    <div className="calendar">
      <div className="calendar__top">
        <button
          type="button"
          onClick={() =>
            setDate((date) => {
              const newDate = new Date(date);
              if (date <= new Date()) return date;
              newDate.setMonth(newDate.getMonth() - 1);
              return newDate;
            })
          }
        >
          <svg width={20} height={20}>
            <use xlinkHref="./images/icons.svg#arrow-prev"></use>
          </svg>
        </button>
        <h5>{date.toLocaleString("en-us", { month: "long" })}</h5>
        <button
          type="button"
          onClick={() =>
            setDate((date) => {
              const newDate = new Date(date);
              newDate.setMonth(newDate.getMonth() + 1);
              console.log(date);
              return newDate;
            })
          }
        >
          <svg width={20} height={20}>
            <use xlinkHref="./images/icons.svg#arrow-next"></use>
          </svg>
        </button>
      </div>

      {days}
    </div>
  );
}

export default Calendar;
