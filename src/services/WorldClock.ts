import TimeZone from "@/types/TimeZone";
import API from "@/utilities/API";

export default class WorldClock {
  public static getTimeZones = async () => {
    const timezones = await API.get<string[]>("/timezone");

    return timezones.data;
  };

  public static getTimeFromTimeZone = async (timezone: string) => {
    const time = await API.get<TimeZone>(`/timezone/${timezone}`);

    return time.data;
  };
}