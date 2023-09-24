import React from "react";
import Clock from "@/components/Clock";
import TimeZones from "@/components/TimeZones";

const Home = () => {
  return (
    <div className="p-4 min-h-screen grid items-center bg-[#2d2d2d]">
      <div className="h-full flex items-center flex-col justify-evenly shadow-2xl rounded">
        <main>
          <Clock />
        </main>

        <section>
          <TimeZones />
        </section>
      </div>
    </div>
  );
};

export default Home;