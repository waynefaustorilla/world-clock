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
      <Clock timezones={timezones} label={"Philippines"} timezone={"Asia/Manila"} />
      <Clock timezones={timezones} label={"Denmark"} timezone={"CET"} />
      <Clock timezones={timezones} label={"India"} timezone={"Asia/Kolkata"} />
      <Clock timezones={timezones} label={"Australia"} timezone={"Australia/Sydney"} />
    </div>
  );
};

export default Home;