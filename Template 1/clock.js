function startTime() 
{
  const today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  time = h + ":" + m + ":" + s;
  const date = new Date();
  currentDay = String(date.getDate()).padStart(2, '0');
  currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  currentYear = date.getFullYear();
  currentDate = `${currentMonth}/${currentDay}/${currentYear}`;
  clockLine = time + "</br>" + currentDate;
  $("#clock").html(clockLine);
  setTimeout(startTime, 1000);
}

function checkTime(i) 
{
  if (i < 10) { i = "0" + i };
  return i;
}