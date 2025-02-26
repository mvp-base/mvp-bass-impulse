export function countdownCalc(countToDate, countFromDate = null) {
  // Set the date we're counting down to
  countToDate = new Date(countToDate).getTime();

  // Get today's date and time
  var now = countFromDate
    ? new Date(countFromDate).getTime()
    : new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countToDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}
