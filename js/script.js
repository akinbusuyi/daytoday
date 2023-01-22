var currentDayEl = $('#currentDay');




//this display the date
  function currentDay(){
  var rightNow = moment().format('DD MMMM YYYY');
  currentDayEl.text(rightNow);
  }
  