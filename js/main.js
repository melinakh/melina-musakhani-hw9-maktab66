const date = new Date();
createDate = (time) => {
  let h = time.getHours();
  let m = time.getMinutes();
  dateArr = [];
  if (h >= 12) {
    dateArr = [h, ":", m, "p.m."];
  } else {
    dateArr = [h, ":", m, "a.m."];
  }
  return dateArr;
};
createDate(date);

timeToEat = (dateArr) => {
  if (dateArr[0] < 12 && dateArr[0] >= 7) {
    let remainTime = [11 - dateArr[0], 60 - dateArr[2]];
    console.log(remainTime);
    console.log(
      `${remainTime[0]} hours and ${remainTime[1]} minutes until the next meal, Lunch`
    );
  } else if (dateArr[0] < 19 && dateArr[0] >= 12) {
    let remainTime = [18 - dateArr[0], 60 - dateArr[2]];
    console.log(remainTime);
    console.log(
      `${remainTime[0]} hours and ${remainTime[1]} minutes until the next meal, dinner`
    );
  } else {
    let remainTime = [6 - dateArr[0], 60 - dateArr[2]];
    console.log(remainTime);
    console.log(
      `${remainTime[0]} hours and ${remainTime[1]} minutes until the next meal, breakfast`
    );
  }
};

timeToEat(dateArr);
