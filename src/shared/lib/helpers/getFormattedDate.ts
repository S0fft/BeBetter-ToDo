/**
 * Formatting the date in dd.mm.yy format.
 * @param {Date} date - The date to be formatted.
 * @returns string - Returns the date string in dd.mm.yy format.
 */
const getFormattedTime = (date: Date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(2);
  return `${day}.${month}.${year}`;
};

export default getFormattedTime;
