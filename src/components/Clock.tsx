"use client";

import React, { FunctionComponent } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import moment from "moment-timezone";

interface ClockProps {
  timezones: string[]
  timezone?: string;
  label: string;
}

const Clock: FunctionComponent<ClockProps> = (props) => {
  const [timezone, setTimezone] = React.useState("");
  const [time, setTime] = React.useState("");
  const [date, setDate] = React.useState("");

  React.useEffect(() => {
    setInterval(() => {
      const timeByZone = moment().tz(!props.timezone ? timezone : props.timezone);

      setDate(timeByZone?.format("dddd, MMMM Do, YYYY"));
      setTime(timeByZone?.format("hh:mm:ss A"));
    }, 100);
  }, [time, date, timezone, props.timezone]);

  return (
    <section className="flex flex-col gap-4 border border-green-500 h-full rounded justify-evenly">
      {
        time === "" ?
          <div className="text-center flex flex-col">
            <span>
              <h5 className="font-mono text-green-500 text-xl">Welcome to the World Clock</h5>
              <h6 className="font-mono text-green-500 text-lg">Please select a time zone below.</h6>
            </span>
          </div>
          :
          <>
            <span className="flex items-center justify-center">
              <h3 className="text-5xl text-green-500 font-bold">{props.label}</h3>
            </span>

            <div className="text-center flex flex-col">
              <span>
                <h1 className="font-mono text-green-500 text-8xl font-bold">{time}</h1>
                <h6 className="font-mono text-green-500 text-4xl">{date}</h6>
              </span>
            </div>
          </>
      }

      {
        !props.timezone ?
          <>
            <section className="flex items-center justify-center">
              <Dropdown options={props.timezones} value={timezone} filter onChange={(event: DropdownChangeEvent) => setTimezone(event.target.value)} />
            </section>
          </>
          :
          <>
          </>
      }
    </section>
  );
};

export default Clock;