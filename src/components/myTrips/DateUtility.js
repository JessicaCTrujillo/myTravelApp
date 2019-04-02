class DateUtility {
  static dateTimeToDateTimeFormat(dateTimeString) {
    const newDateArray = [
      dateTimeString.slice(5, 7),
      "/",
      dateTimeString.slice(8, 10),
      "/",
      dateTimeString.slice(0, 4),
      " ",
      dateTimeString.slice(11, 19)
    ];
    return newDateArray.join("");
  }

  static dateTimeToDateFormat(dateTimeString) {
    const newDateArray = [
      dateTimeString.slice(5, 7),
      "/",
      dateTimeString.slice(8, 10),
      "/",
      dateTimeString.slice(0, 4)
    ];
    return newDateArray.join("");
  }
}

export default DateUtility;
