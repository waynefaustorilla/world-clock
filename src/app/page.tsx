import React from "react";
import Clock from "@/components/Clock";
import WorldClock from "@/services/WorldClock";

async function getTimeZones() {
  return await WorldClock.getTimeZones();
}

const Home = async () => {
  const timezones = await getTimeZones();

  return (
    <div className="p-4 min-h-screen items-center grid grid-cols-2 gap-4 bg-black">
      <Clock timezones={timezones} label={"Philippine Time"} timezone={"Asia/Manila"} />
      <Clock timezones={timezones} label={"Denmark Time"} timezone={"CET"} />
      <Clock timezones={timezones} label={"India Time"} timezone={"Asia/Kolkata"} />
      <Clock timezones={timezones} label={"Australia Time"} timezone={"Australia/Sydney"} />
    </div>
  );
};

export default Home;