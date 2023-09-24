"use client";

import React from "react";
import WorldClock from "@/services/WorldClock";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { useQuery } from "@tanstack/react-query";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/states/stores/store";
import { clockActions } from "@/states/reducers/clock";

const TimeZones = () => {
  const timezone = useSelector((state: RootState) => state.clock.timezone);

  const dispatch = useDispatch();

  const { data } = useQuery({
    queryKey: ["timezones"],
    queryFn: async () => await WorldClock.getTimeZones()
  });

  return (
    <React.Fragment>
      <Dropdown options={data} value={timezone} onChange={(event: DropdownChangeEvent) => dispatch(clockActions.setTimeZone(event.target.value))}/>
    </React.Fragment>
  );
};

export default TimeZones;