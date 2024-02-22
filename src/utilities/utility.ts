export const getDayName = (dateStr?: string) => {
  const date = dateStr ? new Date(dateStr) : new Date()
  const DAYNAMES_LONG = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return DAYNAMES_LONG[date.getDay()];
};