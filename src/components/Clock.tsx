"use client";

import React from "react";
import { RootState } from "@/states/stores/store";
import { useSelector } from "react-redux";
import moment from "moment-timezone";

const Clock = () => {
  const { timezone } = useSelector((state: RootState) => state.clock);

  const [time, setTime] = React.useState<string>("");
  const [date, setDate] = React.useState<string>("");

  React.useEffect(() => {
    if (timezone !== "") {
      setInterval(() => {
        const timeByZone = moment().tz(timezone);

        setDate(timeByZone.format("dddd, MMMM Do, YYYY"));
        setTime(timeByZone.format("hh:mm:ss A"));
      }, 100);
    }
  }, [timezone]);

  return (
    <React.Fragment>
      {
        time === "" ?
          <div className="text-center flex flex-col gap-4">
            <h1 className="font-mono text-white text-6xl">Welcome to the World Clock</h1>
            <h3 className="font-mono text-white text-4xl">Please select a time zone below.</h3>
          </div>
          :
          <div className="text-center flex flex-col gap-4">
            <h1 className="font-mono text-white text-6xl">{time}</h1>
            <h3 className="font-mono text-white text-4xl">{date}</h3>
          </div>
      }
    </React.Fragment>
  );
};

export default Clock;