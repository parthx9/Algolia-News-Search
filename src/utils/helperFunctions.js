const convertDiffDates = (d) => {
  const currDate = new Date()
  const date = new Date(d)
  var time = (date.getTime() - currDate.getTime()) / 1000;
  var year = Math.abs(Math.round((time / (60 * 60 * 24)) / 365.25));
  var month = Math.abs(Math.round(time / (60 * 60 * 24 * 7 * 4)));
  // var days = Math.abs(Math.round(time / (3600 * 24)));

  if (month > 12) {
    return `${year} months ago`
  }
  else {
    return `${month} years ago`
  }
}
export {
  convertDiffDates
}