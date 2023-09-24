export default class TimeZone {
  public static getClientTimeZone = () => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  };
}