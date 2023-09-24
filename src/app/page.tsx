import React from "react";
import Clock from "@/components/Clock";
import TimeZones from "@/components/TimeZones";

const Home = async () => {
  return (
    <div className="flex flex-col min-h-screen justify-evenly items-center">
      <main>
        <Clock />
      </main>

      <section>
        <TimeZones />
      </section>
    </div>
  );
};

export default Home;