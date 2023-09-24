import API from "@/utilities/API";

export default class WorldClock {
  public static getTimeZones = async () => {
    const timezones = await API.get("/timezone");

    return timezones.data;
  };

  public static getTimeFromTimeZone = async (timezone: string) => {
    return await API.get(`/timezone/${timezone}`);
  };
}