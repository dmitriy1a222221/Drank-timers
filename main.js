"use strict";
const newYear = "2022/01/01, 00:00:00";
const Xmas = "2022/01/07, 12:00:00";
const Even = "2022/01/14, 21:00:00";
const voter = "2022/01/19, 12:00:00";
setClock('#newYear',newYear);
setClock('#Xmas',Xmas);
setClock('#Even',Even);
setClock('#Voter',voter);



function getTimeRemaining(deadLine) {
   const differense = Date.parse(deadLine) - Date.parse(new Date()),
   allDaysRound = Math.floor( (differense/(1000*60*60*24)) ),
   allHoursRound = Math.floor( (differense/(1000*60*60) % 24) ),
   allMinutesRound = Math.floor( (differense/1000/60) % 60 ),
   allSecondsRound = Math.floor( (differense/1000) % 60 );
  
   
   return {
      "total": differense,
      "days": allDaysRound,
      "hours": allHoursRound,
      "minutes": allMinutesRound,
      "seconds": allSecondsRound
   };
}
function setClock(selector, endTime) {
   const timer = document.querySelector(selector),
         days = timer.querySelector('#days'),
         hours = timer.querySelector('#hours'),
         minutes = timer.querySelector('#minutes'),
         seconds = timer.querySelector('#seconds');

   uptateClock();
   const deadLineInterval = setInterval(uptateClock, 1000);
   
   function uptateClock(){
      const t = getTimeRemaining(endTime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours) ;
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);
   }
}
function getZero(num){
   if(num < 10 && num >= 0){
      return "0" + num;
   }else{
      return num + "";
   }
}
