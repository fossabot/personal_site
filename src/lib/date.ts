export function calculateTimeUntilGraduation() {
  let dateTime = new Date();
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth();
  const day = dateTime.getDate();
  const graduationYear = 2027;
  const graduationMonth = 5;
  const graduationDay = 14;
  let years = graduationYear - year;
  let months = graduationMonth - month;
  let days = graduationDay - day;

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (days < 0) {
    months -= 1;
    days += new Date(year, month, 0).getDate();
  }
  return { years, months, days };
}
