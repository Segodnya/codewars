function WhatIsTheTime(timeInMirror) {
  let inputs = timeInMirror.split(":");

  let minutes = Number(inputs[1]);
  let arrowMinutes = minutes * 6;
  let resultArrowMinutes = 360 - arrowMinutes;
  let resultMinutes = resultArrowMinutes / 6;
  let stringMinutes = resultMinutes < 10 ? "0" + resultMinutes.toString() : resultMinutes.toString();
  if (stringMinutes === "60") {
    stringMinutes = "00";
  }

  let hours = Number(inputs[0]) === 12 ? 0 : Number(inputs[0]);
  let arrowHours = (360 / 12) * hours + (minutes / 60) * (360 / 12);
  let resultArrowHours = 360 - arrowHours;
  let resultHours = Math.floor(resultArrowHours / 30);
  let stringHours = resultHours < 10 ? "0" + resultHours.toString() : resultHours.toString();
  if (stringHours === "00") {
    stringHours = "12";
  }

  return stringHours + ":" + stringMinutes;
}

/* console.log(WhatIsTheTime("06:35")); // "05:25"
console.log(WhatIsTheTime("11:59")); // "12:01"
console.log(WhatIsTheTime("12:02")); // "11:58"
console.log(WhatIsTheTime("04:00")); // "08:00"
console.log(WhatIsTheTime("06:00")); // "06:00"
console.log(WhatIsTheTime("12:00")); // "12:00"
 */

console.log(WhatIsTheTime("12:02")); // 11:58
