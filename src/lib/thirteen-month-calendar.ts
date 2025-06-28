export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'Sol',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const DAYS_IN_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const DAYS_IN_MONTH = 28;

export const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const getDayOfYear = (date: Date): number => {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

export const gregorianTo13Month = (date: Date) => {
  const year = date.getFullYear();
  const dayOfYear = getDayOfYear(date);

  // The International Fixed Calendar places Leap Day after June 28.
  // This corresponds to day 182 in a Gregorian leap year (if Feb has 29).
  // Day of year for June 28 is 31+29+31+30+31+28 = 180. The day after is 181.
  const leapDayOfYear = 181;

  if (isLeapYear(year)) {
    if (dayOfYear === leapDayOfYear) {
      return { year, month: -1, day: -1, specialDay: 'Leap Day' };
    }
    
    let adjustedDayOfYear = dayOfYear;
    if (dayOfYear > leapDayOfYear) {
      adjustedDayOfYear--;
    }
    
    // After adjustment, check for Year Day
    if(adjustedDayOfYear > MONTH_NAMES.length * DAYS_IN_MONTH) {
       return { year, month: -1, day: -1, specialDay: 'Year Day' };
    }

    const monthIndex = Math.floor((adjustedDayOfYear - 1) / DAYS_IN_MONTH);
    const dayOfMonth = ((adjustedDayOfYear - 1) % DAYS_IN_MONTH) + 1;

    return { year, month: monthIndex, day: dayOfMonth, specialDay: null };
  }

  // Non-leap year
  if (dayOfYear > MONTH_NAMES.length * DAYS_IN_MONTH) {
    return { year, month: -1, day: -1, specialDay: 'Year Day' };
  }

  const monthIndex = Math.floor((dayOfYear - 1) / DAYS_IN_MONTH);
  const dayOfMonth = ((dayOfYear - 1) % DAYS_IN_MONTH) + 1;

  return { year, month: monthIndex, day: dayOfMonth, specialDay: null };
};

export const getCalendarYear = (year: number) => {
  return {
    year,
    months: MONTH_NAMES.map((name) => ({ name })),
    hasLeapDay: isLeapYear(year),
  };
};
