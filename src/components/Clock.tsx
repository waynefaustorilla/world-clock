"use client";

import React from "react";
import { RootState } from "@/states/stores/store";
import { useSelector } from "react-redux";

const Clock = () => {
  const timezone = useSelector((state: RootState) => state.clock.timezone);

  return (
    <h1 className="font-mono text-6xl">12:00 PM</h1>
  );
};

export default Clock;