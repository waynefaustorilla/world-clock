import TimeZone from "@/types/TimeZone";
import API from "@/utilities/API";
import TimeZones from "@/utilities/timezones.json";

export default class WorldClock {
  public static getTimeZones = async () => {
    return TimeZones;
  };

  public static getTimeFromTimeZone = async (timezone: string) => {
    const time = await API.get<TimeZone>(`/timezone/${timezone}`);

    return time.data;
  };
}