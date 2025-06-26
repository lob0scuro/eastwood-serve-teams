export function getSundaysInMonth(year, month) {
  const sundays = [];
  const date = new Date(year, month, 1);
  // Find the first Sunday
  while (date.getDay() !== 0) {
    date.setDate(date.getDate() + 1);
  }
  // Push all Sundays in the month
  while (date.getMonth() === month) {
    sundays.push(new Date(date));
    date.setDate(date.getDate() + 7);
  }
  return sundays;
}

export function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export const ServeTeams = [
  { key: "first_impressions", value: "First Impressions" },
  { key: "baptism_team", value: "Baptism Team" },
  { key: "cafe_team", value: "Cafe Team" },
  { key: "gift_shop", value: "Gift Shop" },
  { key: "info_center", value: "Info Center" },
  { key: "host_and_hospitality", value: "Host & Hospitality" },
];
