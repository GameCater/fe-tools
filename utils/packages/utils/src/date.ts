/**
 * @module Date
 * @description date functions
 * @Date 2020-04-11 21:55:46
 * @LastEditTime 2022-05-31 16:00:55
 */

/**
 * @function dayOfYear
 * @description 此日期是当年中的第几天
 * @param {Date} date
 * @return {number}
 */
export function dayOfYear(date: Date) {
  return Math.floor((+date - +new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
}

/**
 * @function getColonTimeFromDate
 * @description 获取hh:mm:ss时间
 * @param {Date} date
 * @return {string}
 * @example
 *  getColonTimeFromDate(new Date()); // 如'15:58:40'
 */
export function getColonTimeFromDate(date: Date) {
  return date.toTimeString().slice(0, 8);
}

/**
 * @function getDaysDiffBetweenDates
 * @description 判断两个日期差了几天
 * @param {Date} dateInitial
 * @param {Date} dateFinal
 * @return {number}
 */
export function getDaysDiffBetweenDates(dateInitial: Date, dateFinal: Date) {
  return (+dateFinal - +dateInitial) / (1000 * 60 * 60 * 24);
}

/**
 * @function isAfterDate
 * @param {Date} dateA
 * @param {Date} dateB
 * @return {boolean}
 */
export function isAfterDate(dateA: Date, dateB: Date) {
  return dateA > dateB;
}

/**
 * @function isBeforeDate
 * @param {Date} dateA
 * @param {Date} dateB
 * @return {boolean}
 */
export function isBeforeDate(dateA: Date, dateB: Date) {
  return dateA < dateB;
}

/**
 * @function tomorrow
 * @description 获取明天日期
 * @return {string}
 */
export function tomorrow() {
  const t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
}

/**
 * @function formatRemainTime
 * @description 获取倒计时日期信息
 * @param {Date} startTime
 * @param {Date} endTime
 * @return {string}
 */
export function formatRemainTime(startDate: Date, endDate: Date) {
  const t = +endDate - +startDate;
  let day = 0;
  let hour = 0;
  let minute = 0;
  let second = 0;

  if (t >= 0) {
    day = Math.floor(t / 1000 / 3600 / 24);
    hour = Math.floor((t / 1000 / 60 / 60) % 24);
    minute = Math.floor((t / 1000 / 60) % 60);
    second = Math.floor((t / 1000) % 60);
  }
  return {
    day,
    hour,
    minute,
    second,
  };
}