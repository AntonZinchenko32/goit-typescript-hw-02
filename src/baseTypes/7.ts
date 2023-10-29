/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Sunday = 'sun',
  Monday = 'mon',
  Tuesday  = 'tue',
  Wednesday = 'wed',
  Thursday = 'thu',
  Friday = 'fri',
  Saturday = 'sat'
}

function isWeekend(day: Days): boolean {
  if (day === 'sun' || 'sat') return true
  else return false
}
